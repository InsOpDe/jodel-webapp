import { Db } from "./db";
import { Texttools } from './texttools';

export class JResult
{
    Jodel: string;
    affJodel: Jodel;
    db: Db;
    texttools: Texttools;
    keywords: {
        name: string;
        amount: Number;
        citydata: {
            city: string;
            amount: Number;
        }[]
    }[] = [];

    hashtags: {
        name: string;
        amount: Number;
        citydata: {
            city: string;
            amount: Number;
        }[]
    }[] = [];

    constructor(jodel: string, db: Db)
    {
        this.Jodel = jodel;
        this.db = db;
        this.texttools = new Texttools();
    }
    //TODO: Maybe not the best way to handle this.. get Most Similiar returns many values I just take the first
    /**
     * Just take the first result.
     */
    public async getResult()
    {
        let res = await this.db.getMostSimiliar(this.Jodel);

        this.affJodel = new Jodel(res[0].post_id, this.db);
        this.affJodel.fill();
        let res2 = await this.texttools.extractHashtags(this.Jodel);
        let res3 = await this.texttools.extractKeywords(this.Jodel);
        
        for (let key1 in res3)
        {
            let _tmp: {
                city: string;
                amount: number;
            }[] = [];

            let keynum = await this.db.getCityKeywordAmount(res3[key1].name);
            for (let key2 in keynum)
            {
                _tmp.push({
                    city: keynum[key2].loc_name,
                    amount: keynum[key2].amount
                })

            }
            this.keywords.push({
                name: res3[key1].name,
                amount: res3[key1].amount,
                citydata: _tmp
            })
        }
        for (let hashi in res2)
        {
            let _tmp: {
                city: string;
                amount: Number;
            }[] = [];
            let tmp = await this.db.getHashtagAmount(res2[hashi]);
            let hashnum = await this.db.getCityHashtagAmount(res2[hashi]);
            for (let key3 in hashnum)
            {
                _tmp.push({
                    city: hashnum[key3].loc_name,
                    amount: hashnum[key3].amount
                })
            }

            this.hashtags.push({
                name: res2[hashi],
                amount: tmp[0].amount,
                citydata: _tmp
            })
        }
        return new Promise((resolve) =>
        {
            resolve(true);
        })

    }

    public toJSON(): JRESULT
    {

        return {
            message: this.Jodel,
            jodel: this.affJodel.encodeJodel(),
            keywords: this.keywords,
            hashtags: this.hashtags
        };
    }
}

interface JRESULT
{
    message: string;
    jodel: JodelJSON;
    keywords: {
        name: string;
        amount: Number;
        citydata: {
            city: string;
            amount: Number;
        }[]
    }[];
    hashtags: {
        name: string;
        amount: Number;
        citydata: {
            city: string;
            amount: Number;
        }[]
    }[];

}
 


export class Jodel
{
    core: coreJodel;
    children: coreJodel[] = [];
    created_at: string;
    image_approved: Boolean;
    image_url: string;
    child_count: Number;
    post_color: string;
    oj_replied: Boolean;
    voute_count_timestamp: string;

    constructor(post_id: string, db: Db)
    {
        this.core = new coreJodel(post_id, db);
    }


    public async fill()
    {
        await this.core.fill();
        if (this.core.post.length != 0)
        {
            this.children = [];

            let children = await this.core.db.getChildrenById(this.core.post_id);
            for (let key in children)
            {
                let tmp = new coreJodel(children[key].child_id, this.core.db);
                await tmp.fill();
                this.children.push(tmp);
            }
            return new Promise((resolve) =>
            {
                this.created_at = this.core.post[0].created_at;
                this.image_approved = this.core.post[0].image_approved;
                this.image_url = this.core.post[0].image_url;
                this.child_count = this.core.post[0].child_count;
                this.post_color = this.core.post[0].post_color;
                this.oj_replied = this.core.post[0].oj_replied;
                this.voute_count_timestamp = this.core.post[0].vote_count_timestamp;
                return resolve(true);
            })
        }

    }
    

    public encodeJodel(): JodelJSON
    {
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

    private createChildrenArray(core: coreJodel[])
    {
        let tmp: coreJodelJSON[] = [];

        core.forEach((item, index) =>
        {
            tmp.push(item.encodeCoreJodel());
        })


        return tmp;
    }

}



interface JodelJSON
{
    core: coreJodelJSON;
    image_approved: Boolean;
    image_url: string;
    child_count: Number;
    oj_replied: Boolean;
    vote_count_timestamp: string;
    children: coreJodelJSON[];
}

interface coreJodelJSON
{
    post_id: string;
    vote_count: Number;
    post_color: string;
    post_message: string;
    keywords: string[];
    tags: string[];
    location: string;

}
export class coreJodel
{
    post_id: string;
    vote_count: Number;
    post_color: string;
    post_message: string;
    keywords: string[] = [];
    tags: string[] = [];
    location: string;
    db: Db;
    post: any;
    constructor(post_id: string,  db: Db)
    {
        this.post_id = post_id;
        this.db = db;
    }

    public async fill()
    {
        this.post = await this.db.getPostById(this.post_id);
        let res = await this.db.getMessageById(this.post_id);
        this.post_message = res[0].post_message;
        if (this.post.length == 0)
        {
            res = await this.db.getChildById(this.post_id);
            this.post_color = res[0].post_color;
            this.vote_count = res[0].vote_count;
            res = await this.db.getLocationByIdChild(this.post_id);
            this.location = res[0].loc_name;
        }
        else
        {
            this.post_color = this.post[0].post_color;
            this.vote_count = this.post[0].votes;
            res = await this.db.getLocationById(this.post_id);
            this.location = res[0].loc_name;
        }
        res = await this.db.getKeywordsById(this.post_id);
        res.forEach((item, index) =>
        {
            this.keywords.push(item.post_keyword);
        })

        res = await this.db.getTagsById(this.post_id);
        res.forEach((item, index) =>
        {
            this.tags.push(item.post_tag)
        })
        return new Promise((resolve) =>
        {
            resolve(true);
        })
    }
    public encodeCoreJodel(): coreJodelJSON
    {
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