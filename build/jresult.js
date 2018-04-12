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
const texttools_1 = require("./texttools");
class JResult {
    constructor(jodel, db) {
        this.keywords = [];
        this.hashtags = [];
        this.Jodel = jodel;
        this.db = db;
        this.texttools = new texttools_1.Texttools();
    }
    //TODO: Maybe not the best way to handle this.. get Most Similiar returns many values I just take the first
    /**
     * Just take the first result.
     */
    getResult() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.db.getMostSimiliar(this.Jodel);
            this.affJodel = new Jodel(res[0].post_id, this.db);
            this.affJodel.fill();
            let res2 = yield this.texttools.extractHashtags(this.Jodel);
            let res3 = yield this.texttools.extractKeywords(this.Jodel);
            for (let key1 in res3) {
                let _tmp = [];
                let keynum = yield this.db.getCityKeywordAmount(res3[key1].name);
                for (let key2 in keynum) {
                    _tmp.push({
                        city: keynum[key2].loc_name,
                        amount: keynum[key2].amount
                    });
                }
                this.keywords.push({
                    name: res3[key1].name,
                    amount: res3[key1].amount,
                    citydata: _tmp
                });
            }
            for (let hashi in res2) {
                let _tmp = [];
                let tmp = yield this.db.getHashtagAmount(res2[hashi]);
                let hashnum = yield this.db.getCityHashtagAmount(res2[hashi]);
                for (let key3 in hashnum) {
                    _tmp.push({
                        city: hashnum[key3].loc_name,
                        amount: hashnum[key3].amount
                    });
                }
                this.hashtags.push({
                    name: res2[hashi],
                    amount: tmp[0].amount,
                    citydata: _tmp
                });
            }
            return new Promise((resolve) => {
                resolve(true);
            });
        });
    }
    toJSON() {
        return {
            message: this.Jodel,
            jodel: this.affJodel.encodeJodel(),
            keywords: this.keywords,
            hashtags: this.hashtags
        };
    }
}
exports.JResult = JResult;
class Jodel {
    constructor(post_id, db) {
        this.children = [];
        this.core = new coreJodel(post_id, db);
    }
    fill() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.core.fill();
            if (this.core.post.length != 0) {
                this.children = [];
                let children = yield this.core.db.getChildrenById(this.core.post_id);
                for (let key in children) {
                    let tmp = new coreJodel(children[key].child_id, this.core.db);
                    yield tmp.fill();
                    this.children.push(tmp);
                }
                return new Promise((resolve) => {
                    this.created_at = this.core.post[0].created_at;
                    this.image_approved = this.core.post[0].image_approved;
                    this.image_url = this.core.post[0].image_url;
                    this.child_count = this.core.post[0].child_count;
                    this.post_color = this.core.post[0].post_color;
                    this.oj_replied = this.core.post[0].oj_replied;
                    this.voute_count_timestamp = this.core.post[0].vote_count_timestamp;
                    return resolve(true);
                });
            }
        });
    }
    encodeJodel() {
        return {
            core: this.core.encodeCoreJodel(),
            image_approved: this.image_approved == undefined ? false : this.image_approved,
            image_url: this.image_url == undefined ? "" : this.image_url,
            child_count: this.child_count == undefined ? 0 : this.child_count,
            oj_replied: this.oj_replied == undefined ? false : true,
            vote_count_timestamp: this.voute_count_timestamp == undefined ? "" : this.voute_count_timestamp,
            children: this.createChildrenArray(this.children) == undefined ? [] : this.createChildrenArray(this.children)
        };
    }
    createChildrenArray(core) {
        let tmp = [];
        core.forEach((item, index) => {
            tmp.push(item.encodeCoreJodel());
        });
        return tmp;
    }
}
exports.Jodel = Jodel;
class coreJodel {
    constructor(post_id, db) {
        this.keywords = [];
        this.tags = [];
        this.post_id = post_id;
        this.db = db;
    }
    fill() {
        return __awaiter(this, void 0, void 0, function* () {
            this.post = yield this.db.getPostById(this.post_id);
            let res = yield this.db.getMessageById(this.post_id);
            this.post_message = res[0].post_message;
            if (this.post.length == 0) {
                res = yield this.db.getChildById(this.post_id);
                this.post_color = res[0].post_color;
                this.vote_count = res[0].vote_count;
                res = yield this.db.getLocationByIdChild(this.post_id);
                this.location = res[0].loc_name;
            }
            else {
                this.post_color = this.post[0].post_color;
                this.vote_count = this.post[0].votes;
                res = yield this.db.getLocationById(this.post_id);
                this.location = res[0].loc_name;
            }
            res = yield this.db.getKeywordsById(this.post_id);
            res.forEach((item, index) => {
                this.keywords.push(item.post_keyword);
            });
            res = yield this.db.getTagsById(this.post_id);
            res.forEach((item, index) => {
                this.tags.push(item.post_tag);
            });
            return new Promise((resolve) => {
                resolve(true);
            });
        });
    }
    encodeCoreJodel() {
        return {
            post_id: this.post_id,
            vote_count: this.vote_count,
            post_color: this.post_color,
            post_message: this.post_message,
            keywords: this.keywords,
            tags: this.tags,
            location: this.location
        };
    }
}
exports.coreJodel = coreJodel;
//# sourceMappingURL=jresult.js.map