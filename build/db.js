"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("promise-mysql");
const texttools_1 = require("./texttools");
class Db {
    /**
     * Constructor für die DB Klasse
     *
     * @param {string} host
     * @param {string} user
     * @param {string} password
     * @param {string} database
     * @param {number} port
     */
    constructor(host, user, password, database, port) {
        this.pool = mysql.createPool({
            host: host,
            user: user,
            password: password,
            database: database,
            port: port,
        });
        this.texttools = new texttools_1.Texttools();
    }
    /**
     *
     * @returns {Promise<any>}
     */
    async testQuery() {
        return await this.query("SELECT * from children Limit 1");
    }
    /**
     * get random top 1000 post
     *
     * @returns {Promise<any>}
     */
    async getRandomPost() {
        return await this.query("SELECT top.*, messages.post_message FROM (SELECT * FROM jodeldb.posts order by votes desc LIMIT 1000) as top \n" +
            "inner join messages on (messages.post_id = top.post_id)\n" +
            "order by RAND() LIMIT 1\n");
    }
    /**
     * This Function will return a result if at least one keyword exists in the table keywords!
     * The table keywords is very big, so this function is very slow.
     *
     * @param keywords words from the jodelmessage which will be searched in the table keywords for
     */
    async getPostsFromKeywords(keywords) {
        let res;
        let _query = "SELECT t.post_id FROM keywords t WHERE post_keyword IN (";
        for (let i = 0; i < keywords.length; i++) {
            if (i == keywords.length - 1) {
                _query += "\"" + keywords[i] + "\"" + ")";
            }
            else {
                _query += "\"" + keywords[i] + "\"" + ",";
            }
        }
        let count = keywords.length;
        do {
            if (count == 0) {
                return [];
            }
            let _query_1 = _query + " GROUP BY t.post_id HAVING COUNT(DISTINCT t.post_keyword) = " + count;
            res = await this.query(_query_1);
            count--;
            process.stdout.write(".");
        } while (res.length == 0);
        return res;
    }
    timeKeywords(keywords) {
        for (let i = 0; i < 25; i++) {
            let _query = "SELECT post_id FROM posts WHERE created_at LIKE \"%T" + i + ":%\"";
            let query_res = this.query(_query);
            for (let key in query_res) {
                this.getKeywordsById(query_res[key]);
            }
            //this.getKeywordsById()
        }
    }
    /**
     * Same Function as getPostsFromKeywords
     * @param tags the tags which will be searched in the table tags
     */
    async getPostsFromTags(tags) {
        let res;
        let _query = "SELECT t.post_id FROM tags t WHERE post_tag IN (";
        for (let i = 0; i < tags.length; i++) {
            if (i == tags.length - 1) {
                _query += "\"" + tags[i] + "\"" + ")";
            }
            else {
                _query += "\"" + tags[i] + "\"" + ",";
            }
        }
        let count = tags.length;
        do {
            if (count == 0) {
                return res;
            }
            let _query_1 = _query + " GROUP BY t.post_id HAVING COUNT(DISTINCT t.post_tag) = " + count;
            res = await this.query(_query_1);
            count--;
            process.stdout.write(".");
        } while (res.length == 0);
        return res;
    }
    /**
     * TODO: This works but it is stupidly slow. Write better Code...somehow or create View in Database and
     * correct other functions
     * @param message string
     */
    async getMostSimiliar(message) {
        let res = await this.texttools.extractHashtags(message);
        if (res == undefined) {
            res = [];
        }
        let res_array = Object.values(res);
        //Speeding up ---- Maybe remove this when better database exists
        while (res_array.length > 3) {
            res_array.pop();
        }
        let resDBHash = this.getPostsFromTags(res_array);
        let res_keywords = await this.texttools.extractKeywords(message);
        let res_keywords_array = [];
        for (let key in res_keywords) {
            res_keywords_array.push(res_keywords[key].name);
        }
        //Speeding up that crap ---- Maybe remove this when better database exists
        while (res_keywords_array.length > 3) {
            res_keywords_array.pop();
        }
        if (res_keywords_array.length == 0) {
            return new Promise((resolve) => {
                resolve("");
            });
        }
        let resDBKeyword = await this.getPostsFromKeywords(res_keywords_array);
        return new Promise((resolve, reject) => {
            let equal_key = [];
            for (let key in resDBKeyword) {
                for (let key2 in resDBHash) {
                    if (resDBKeyword[key].post_id == resDBHash[key].post_id) {
                        equal_key.push(resDBKeyword[key].post_id);
                    }
                }
            }
            resolve(equal_key.length == 0 ? resDBKeyword : equal_key);
        });
    }
    //TODO: SLOW - Write better SQL?
    /**
     *
     * This will retrieve how many times a specific keyword was used in a city
     * @param keyword the keyword which will be searched for
     */
    async getCityKeywordAmount(keyword) {
        let _query = "SELECT cities.id_cities, cities.name, result.amount "
            + "FROM cities as cities"
            + " INNER JOIN "
            + "(SELECT "
            + "COUNT(g1.loc_name) AS amount, "
            + "g1.post_keyword,"
            + " g1.loc_name"
            + " FROM                                         "
            + " (SELECT                                      "
            + "    t1.post_id, t1.loc_name, t2.post_keyword "
            + " FROM                                         "
            + "    location t1                              "
            + " INNER JOIN                                   "
            + "    keywords t2 ON t1.post_id = t2.post_id   "
            + " WHERE                                        "
            + "    post_keyword = " + "\"" + keyword + "\"" + ") g1"
            + " GROUP BY                                     "
            + "    g1.post_keyword, g1.loc_name) result     "
            + " ON                                           "
            + "    cities.name = result.loc_name            ";
        return await this.query(_query);
    }
    //TODO: SLOW - Write better SQL?
    /**
     *
     * This will retrieve how many times a specific hashtag was used in a city
     * @param hashtag the hashtag which will be searched for
     */
    async getCityHashtagAmount(hashtag) {
        let _query = "SELECT cities.id_cities, cities.name, result.amount "
            + "  FROM cities as cities                               "
            + "  INNER JOIN                                          "
            + "  (SELECT                                             "
            + "  COUNT(g1.loc_name) AS amount,                       "
            + "  g1.post_tag,                                        "
            + "  g1.loc_name                                         "
            + "  FROM                                                "
            + "  (SELECT                                             "
            + "  t1.post_id, t1.loc_name, t2.post_tag                "
            + "  FROM                                                "
            + "  location t1                                         "
            + "  INNER JOIN tags t2 ON t1.post_id = t2.post_id       "
            + "  WHERE                                               "
            + "  post_tag = " + "\"" + hashtag + "\"" + ") g1        "
            + "  GROUP BY g1.post_tag, g1.loc_name) result           "
            + "  ON cities.name = result.loc_name                    ";
        return await this.query(_query);
    }
    async getHashtagAmount(hashtag) {
        let _query = "SELECT COUNT(post_tag) as amount, post_tag from tags WHERE post_tag =  " + "\"" + hashtag + "\"";
        return await this.query(_query);
    }
    async getHashtagsById(id) {
        let _query = "Select post_tag FROM tags WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }
    async getMessageById(id) {
        let _query = "SELECT post_message from messages WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }
    async getTagsById(id) {
        let _query = "Select post_tag from tags WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }
    async getKeywordsById(id) {
        let _query = "Select post_keyword from keywords WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }
    async getLocationById(id) {
        let _query = "Select loc_name from location WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }
    async getLocationByIdChild(id) {
        let _query = "Select post_id from children WHERE child_id = " + "\"" + id + "\"";
        let tmp = await this.query(_query);
        _query = "Select loc_name from location WHERE post_id = " + "\"" + tmp[0].post_id + "\"";
        return await this.query(_query);
    }
    async getCreatedByIdChild(id) {
        let _query = "Select post_id from children WHERE child_id = " + "\"" + id + "\"";
        let tmp = await this.query(_query);
        _query = "Select created_at from posts WHERE post_id = " + "\"" + tmp[0].post_id + "\"";
        return await this.query(_query);
    }
    async getChildById(id) {
        let _query = "Select * from children WHERE child_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }
    /**
     * This function will return a dataset from posts
     * @param id the id which should be searched for in the table Posts
     */
    async getPostById(id) {
        let _query = "SELECT * from posts WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }
    async getChildrenById(id) {
        let _query = "SELECT * from children WHERE post_id = " + "\"" + id + "\"";
        return await this.query(_query);
    }
    /**
     *
     * @param {string} qry
     * @returns {Promise<any>}
     */
    async query(qry) {
        try {
            return await this.pool.query(qry);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.Db = Db;
//# sourceMappingURL=db.js.map