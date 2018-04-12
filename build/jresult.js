"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const texttools_1 = require("./texttools");
const POSTWEIGHT = 1.5;
/**
 * At last this Class will generate the Result for the Front-End
 * @author Tim Mend
 */
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
     * This function will create the Result for the Frontend for a given Message.
     * @author Tim Mend
     */
    async getResult() {
        process.stdout.write("Getting similiar post");
        let res = await this.db.getMostSimiliar(this.Jodel);
        if (res == "") {
            //TODO: Yeah... shitty solution for the problem if there is no similiar Jodel.
            this.affJodel = new Jodel("5980aae96e902100171a0ba8", this.db);
        }
        else {
            this.affJodel = new Jodel(res[0].post_id, this.db);
        }
        await this.affJodel.fill();
        let res2 = await this.texttools.extractHashtags(this.Jodel);
        let res3 = await this.texttools.extractKeywords(this.Jodel);
        process.stdout.write("Getting Hashtags and Keywords");
        for (let key1 in res3) {
            let _tmp = [];
            process.stdout.write(".");
            let keynum = await this.db.getCityKeywordAmount(res3[key1].name);
            let simKeyword = await this.db.getSimiliarKeywords(res3[key1].name);
            let simKeywords = [];
            //console.log(simKeyword);
            for (let simKey in simKeyword) {
                simKeywords.push(simKeyword[simKey].post_keyword);
            }
            for (let key2 in keynum) {
                _tmp.push({
                    name: keynum[key2].name,
                    votes: keynum[key2].amount,
                    id_cities: keynum[key2].id_cities
                });
            }
            //console.log(_tmp);
            this.keywords.push({
                name: res3[key1].name,
                amount: res3[key1].amount,
                citydata: _tmp,
                maxValue: 0,
                similiar: simKeywords
            });
        }
        ///////Get max Keyword
        let maxVAL = 0;
        for (let key in this.keywords) {
            if (maxVAL < this.keywords[key].amount)
                maxVAL = this.keywords[key].amount;
        }
        for (let key in this.keywords) {
            this.keywords[key].maxValue = maxVAL;
        }
        let _null = [];
        for (let hashi in res2) {
            let _tmp = [];
            let tmp = await this.db.getHashtagAmount(res2[hashi]);
            let hashnum = await this.db.getCityHashtagAmount(res2[hashi]);
            process.stdout.write(".");
            for (let key3 in hashnum) {
                _tmp.push({
                    name: hashnum[key3].loc_name,
                    votes: hashnum[key3].amount,
                    id_cities: hashnum[key3].id_cities
                });
            }
            this.hashtags.push({
                name: res2[hashi],
                amount: tmp[0].amount,
                citydata: _tmp,
                maxValue: 0,
                similiar: _null
            });
        }
        // Get Max hashtag Value
        maxVAL = 0;
        for (let key in this.hashtags) {
            if (maxVAL < this.hashtags[key].amount)
                maxVAL = this.hashtags[key].amount;
        }
        for (let key in this.hashtags) {
            this.hashtags[key].maxValue = maxVAL;
        }
        process.stdout.write("Generating Votes");
        await this.interPolateResult(res);
        process.stdout.write("Generating City Importance");
        let _cityimportance = await this.generateCityImportance();
        this.cityimportance = Object.values(_cityimportance);
        return new Promise((resolve) => {
            resolve(true);
        });
    }
    /**
     * This will create create the Votes, Pins, Comments and similiar Keywords for a Post based on the similiar Post
     * @param keys the keys from the similiar Posts
     * @author Tim Mend
     */
    async interPolateResult(keys) {
        let maxVotes = 0;
        let sum = 0;
        let sum_comments = 0;
        let maxKommis = 0;
        let jresult_keywords = [];
        let jresult_hashtags = [];
        let keywords_similiar = [];
        let hashtags_similiar = [];
        //TODO: YEAH.... ^^
        //Get Keywords out of keywords array from JRESULT 
        for (let key in this.keywords) {
            let _tmp = {
                name: this.keywords[key].name,
                value: Math.floor(Math.random() * 100)
            };
            jresult_keywords.push(_tmp);
        }
        //Get Hashtags out of hashtags array from JRESULT
        for (let hash in this.hashtags) {
            let _tmp = {
                name: this.hashtags[hash].name,
                value: Math.floor(Math.random() * 100)
            };
            jresult_hashtags.push(_tmp);
        }
        let i = keys.length > 2 ? 2 : keys.length;
        for (let k = 0; k < i; k++) {
            let keywords_similiar_post = await this.db.getKeywordsById(keys[k].post_id);
            let _tmpJresult = jresult_keywords.map(a => a.name);
            //Get relational Keywords out of the similiar Jodel
            for (let key in keywords_similiar_post) {
                process.stdout.write(".");
                if (!(keywords_similiar.includes(keywords_similiar_post[key].post_keyword) || _tmpJresult.includes(keywords_similiar_post[key].post_keyword))) {
                    keywords_similiar.push(keywords_similiar_post[key].post_keyword);
                }
            }
            //Same as keywords
            let hashtags_similiar_post = await this.db.getHashtagsById(keys[k].post_id);
            for (let hash in hashtags_similiar_post) {
                process.stdout.write(".");
                if (!(jresult_hashtags.includes(hashtags_similiar_post[hash].post_tag) || hashtags_similiar.map(a => a.name).includes(hashtags_similiar_post[hash].post_tag))) {
                    hashtags_similiar.push(hashtags_similiar_post[hash].post_tag);
                }
            }
            let tmp = await this.db.getPostById(keys[k].post_id);
            if (tmp.length == 0) {
                let tmp = await this.db.getChildById(keys[k].post_id);
                //console.log(tmp);
                sum += parseInt(tmp[0].vote_count);
                process.stdout.write(".");
            }
            else {
                if (tmp[0].votes > maxVotes)
                    maxVotes = tmp[0].votes;
                if (tmp[0].child_count > maxKommis)
                    maxKommis = tmp[0].child_count;
                sum_comments += parseInt(tmp[0].child_count);
                sum += parseInt(tmp[0].votes) * POSTWEIGHT;
                process.stdout.write(".");
            }
            //console.log(tmp[0].votes);    
        }
        return new Promise((resolve) => {
            let _res = {
                Votes: Math.ceil((sum / keys.length)),
                Comments: Math.ceil((sum_comments / keys.length)),
                Pins: Math.ceil((sum / keys.length) * 0.15),
                maxValue: maxVotes,
                maxKommentare: maxKommis,
                Keywords_similiar: keywords_similiar,
                Hashtag_similiar: hashtags_similiar
            };
            this.interPolatedResult = _res;
            return resolve(_res);
        });
    }
    /**
     * This will create a Array of the succes of a post in the cities based on the keywords and hashtags used in the post
     * @author Tim Mend
     */
    async generateCityImportance() {
        return new Promise((resolve) => {
            let sum = this.keywords[0]['citydata'];
            for (let b = 1; b < this.keywords.length; b++) {
                let key_tmp = this.keywords[b]['citydata'];
                for (let n = 0; n < sum.length; n++) {
                    for (let m = 0; m < key_tmp.length; m++) {
                        if (sum[n].name == key_tmp[m].city) {
                            sum[n].votes += key_tmp[m].amount;
                        }
                        //if (m == key_tmp.length && sum[n].city != key_tmp[m].city)
                        //{
                        //    sum.push(key_tmp[m]);
                        //}
                    }
                }
            }
            for (let i = 0; i < this.hashtags.length; i++) {
                let hash_tmp = this.hashtags[i]['citydata'];
                for (let j = 0; j < sum.length; j++) {
                    for (let k = 0; k < hash_tmp.length; k++) {
                        if (sum[j].name == hash_tmp[k].name) {
                            sum[j].votes += hash_tmp[k].votes;
                        }
                        //if (k == hash_tmp.length && sum[j].city != hash_tmp[k].city)
                        //{
                        //    sum.push(hash_tmp[k]);
                        //}
                    }
                }
            }
            //console.log(sum);
            resolve(sum);
        });
    }
    toJSON() {
        return {
            message: this.Jodel,
            interPolatedResult: this.interPolatedResult,
            hashtags: this.hashtags,
            keywords: this.keywords,
            jodel: this.affJodel.encodeJodel(),
            cityimportance: this.cityimportance
        };
    }
}
exports.JResult = JResult;
/** This class will collect Information about a whole Jodel - no Children.
 * @author Tim Mend
 */
class Jodel {
    constructor(post_id, db) {
        this.children = [];
        this.core = new coreJodel(post_id, db);
    }
    async fill() {
        await this.core.fill();
        if (this.core.post.length != 0) {
            this.children = [];
            let children = await this.core.db.getChildrenById(this.core.post_id);
            for (let key in children) {
                let tmp = new coreJodel(children[key].child_id, this.core.db);
                await tmp.fill();
                this.children.push(tmp);
            }
            return new Promise((resolve) => {
                //this.created_at = this.core.post[0].created_at;
                this.image_approved = this.core.post[0].image_approved;
                this.image_url = this.core.post[0].image_url;
                this.child_count = this.core.post[0].child_count;
                this.post_color = this.core.post[0].post_color;
                this.oj_replied = this.core.post[0].oj_replied;
                this.voute_count_timestamp = this.core.post[0].vote_count_timestamp;
                return resolve(true);
            });
        }
    }
    encodeJodel() {
        return {
            core: this.core.encodeCoreJodel(),
            image_approved: this.image_approved == undefined ? false : this.image_approved,
            image_url: this.image_url == undefined ? "" : this.image_url,
            child_count: this.child_count == undefined ? 0 : this.child_count,
            oj_replied: this.oj_replied == undefined ? false : true,
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
/**
 * This is the Class for collecting the coreJodel Info - here can any Jodel be safed
 * Children too.
 * @author Tim Mend
 */
class coreJodel {
    constructor(post_id, db) {
        this.keywords = [];
        this.tags = [];
        this.post_id = post_id;
        this.db = db;
    }
    async fill() {
        this.post = await this.db.getPostById(this.post_id);
        let res = await this.db.getMessageById(this.post_id);
        this.post_message = res[0].post_message;
        if (this.post.length == 0) {
            res = await this.db.getChildById(this.post_id);
            this.post_color = res[0].post_color;
            this.vote_count = res[0].vote_count;
            res = await this.db.getLocationByIdChild(this.post_id);
            this.location = res[0].loc_name;
            this.created_at = await this.db.getLocationByIdChild(this.post_id);
        }
        else {
            this.post_color = this.post[0].post_color;
            this.vote_count = this.post[0].votes;
            res = await this.db.getLocationById(this.post_id);
            this.location = res[0].loc_name;
        }
        res = await this.db.getKeywordsById(this.post_id);
        res.forEach((item, index) => {
            this.keywords.push(item.post_keyword);
        });
        res = await this.db.getTagsById(this.post_id);
        res.forEach((item, index) => {
            this.tags.push(item.post_tag);
        });
        return new Promise((resolve) => {
            resolve(true);
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
            location: this.location,
            created_at: this.created_at
        };
    }
}
exports.coreJodel = coreJodel;
//# sourceMappingURL=jresult.js.map