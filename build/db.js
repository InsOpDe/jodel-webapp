"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    testQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.query("SELECT * from Persons");
        });
    }
    /**
     * This Function will return a result if at least one keyword exists in the table keywords!
     * The table keywords is very big, so this function is very slow.
     *
     * @param keywords words from the jodelmessage which will be searched in the table keywords for
     */
    getPostsFromKeywords(keywords) {
        return __awaiter(this, void 0, void 0, function* () {
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
                res = yield this.query(_query_1);
                count--;
            } while (res.length == 0);
            return res;
        });
    }
    /**
     * Same Function as getPostsFromKeywords
     * @param tags the tags which will be searched in the table tags
     */
    getPostsFromTags(tags) {
        return __awaiter(this, void 0, void 0, function* () {
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
                res = yield this.query(_query_1);
                count--;
            } while (res.length == 0);
            return res;
        });
    }
    /**
     * TODO: This works but it is stupidly slow. Write better Code...somehow or create View in Database and
     * correct other functions
     * @param message string
     */
    getMostSimiliar(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this.texttools.extractHashtags(message).then((value) => {
                let res = Object.values(value);
                this.getPostsFromTags(res);
            });
            let res = yield this.texttools.extractHashtags(message);
            let res_array = Object.values(res);
            let resDBHash = this.getPostsFromTags(res_array);
            let res_keywords = yield this.texttools.extractKeywords(message);
            let res_keywords_array = [];
            for (let key in res_keywords) {
                res_keywords_array.push(res_keywords[key].name);
            }
            //console.log(res_keywords);
            let resDBKeyword = yield this.getPostsFromKeywords(res_keywords_array);
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
        });
    }
    //TODO: SLOW - Write better SQL?
    /**
     *
     * This will retrieve how many times a specific keyword was used in a city
     * @param keyword the keyword which will be searched for
     */
    getCityKeywordAmount(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "Select COUNT(g1.loc_name) as amount, g1.post_keyword, g1.loc_name FROM (SELECT t1.post_id, t1.loc_name, t2.post_keyword FROM location t1 "
                + "INNER JOIN keywords t2 ON t1.post_id = t2.post_id WHERE post_keyword = " + "\"" + keyword + "\"" + ") g1 GROUP BY g1.post_keyword, g1.loc_name";
            return yield this.query(_query);
        });
    }
    //TODO: SLOW - Write better SQL?
    /**
     *
     * This will retrieve how many times a specific hashtag was used in a city
     * @param hashtag the hashtag which will be searched for
     */
    getCityHashtagAmount(hashtag) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "Select COUNT(g1.loc_name) as amount, g1.post_tag, g1.loc_name FROM (SELECT t1.post_id, t1.loc_name, t2.post_tag FROM location t1 "
                + "INNER JOIN tags t2 ON t1.post_id = t2.post_id WHERE post_tag = " + "\"" + hashtag + "\"" + ") g1 GROUP BY g1.post_tag, g1.loc_name";
            return yield this.query(_query);
        });
    }
    getHashtagAmount(hashtag) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "SELECT COUNT(post_tag) as amount, post_tag from tags WHERE post_tag =  " + "\"" + hashtag + "\"";
            return yield this.query(_query);
        });
    }
    getMessageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "SELECT post_message from messages WHERE post_id = " + "\"" + id + "\"";
            return yield this.query(_query);
        });
    }
    getTagsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "Select post_tag from tags WHERE post_id = " + "\"" + id + "\"";
            return yield this.query(_query);
        });
    }
    getKeywordsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "Select post_keyword from keywords WHERE post_id = " + "\"" + id + "\"";
            return yield this.query(_query);
        });
    }
    getLocationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "Select loc_name from location WHERE post_id = " + "\"" + id + "\"";
            return yield this.query(_query);
        });
    }
    getLocationByIdChild(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "Select post_id from children WHERE child_id = " + "\"" + id + "\"";
            let tmp = yield this.query(_query);
            _query = "Select loc_name from location WHERE post_id = " + "\"" + tmp[0].post_id + "\"";
            return yield this.query(_query);
        });
    }
    getChildById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "Select * from children WHERE child_id = " + "\"" + id + "\"";
            return yield this.query(_query);
        });
    }
    /**
     * This function will return a dataset from posts
     * @param id the id which should be searched for in the table Posts
     */
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "SELECT * from posts WHERE post_id = " + "\"" + id + "\"";
            return yield this.query(_query);
        });
    }
    getChildrenById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let _query = "SELECT * from children WHERE post_id = " + "\"" + id + "\"";
            return yield this.query(_query);
        });
    }
    /**
     *
     * @param {string} qry
     * @returns {Promise<any>}
     */
    query(qry) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.pool.query(qry);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.Db = Db;
//# sourceMappingURL=db.js.map