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
                throw "INVALID:::KEYWORDS:::EXCEPTION";
            }
            let _query_1 = _query + " GROUP BY t.post_id HAVING COUNT(DISTINCT t.post_keyword) = " + count;
            res = await this.query(_query_1);
            count--;
        } while (res.length == 0);
        return res;
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
        } while (res.length == 0);
        return res;
    }
    /**
     * TODO: This works but it is stupidly slow. Write better Code...somehow or create View in Database and
     * correct other functions
     * @param message string
     */
    async getMostSimiliar(message) {
        this.texttools.extractHashtags(message).then((value) => {
            let res = Object.values(value);
            this.getPostsFromTags(res);
        });
        let res = await this.texttools.extractHashtags(message);
        let res_array = Object.values(res);
        let resDBHash = this.getPostsFromTags(res_array);
        let res_keywords = await this.texttools.extractKeywords(message);
        let res_keywords_array = [];
        for (let key in res_keywords) {
            res_keywords_array.push(res_keywords[key].name);
        }
        //console.log(res_keywords);
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
    async getMessageById(id) {
        let _query = "SELECT message from messages WHERE post_id = " + id;
        return await this.query(_query);
    }
    /**
     * This function will return a dataset from posts
     * @param id the id which should be searched for in the table Posts
     */
    async getPostById(id) {
        let _query = "SELECT * from posts WHERE post_id = " + id;
        return await this.query(_query);
    }
    async getChildrenById(id) {
        let _query = "SELECT * from children WHERE post_id = " + id;
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