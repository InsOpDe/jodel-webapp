import * as mysql from 'promise-mysql';
import { Texttools } from './texttools';
export class Db{

    private pool:mysql.Pool;
    private texttools: Texttools;
    /**
     * Constructor für die DB Klasse
     *
     * @param {string} host
     * @param {string} user
     * @param {string} password
     * @param {string} database
     * @param {number} port
     */
    constructor(host:string, user:string,password:string, database:string, port:number) {

        this.pool = mysql.createPool({
            host : host,
            user : user,
            password : password,
            database : database,
            port : port,
        });
        this.texttools = new Texttools();
    }



    /**
     *
     * @returns {Promise<any>}
     */
    public async testQuery(){
        return await this.query("SELECT * from Persons");
    }

   
    /**
     * This Function will return a result if at least one keyword exists in the table keywords!
     * The table keywords is very big, so this function is very slow.
     * 
     * @param keywords words from the jodelmessage which will be searched in the table keywords for
     */
    public async getPostsFromKeywords(keywords: string[])
    {
        let res: any;
        let _query = "SELECT t.post_id FROM keywords t WHERE post_keyword IN (";
        for (let i = 0; i < keywords.length; i++)
        {
            if (i == keywords.length - 1)
            {
                _query += "\"" + keywords[i] + "\"" + ")";
            }
            else
            {
                _query += "\"" + keywords[i] + "\"" + ",";
            }
        }

        let count = keywords.length;
        do
        {
            if (count == 0)
            {
                throw "INVALID:::KEYWORDS:::EXCEPTION";
            }
            let _query_1 = _query + " GROUP BY t.post_id HAVING COUNT(DISTINCT t.post_keyword) = " + count;
            res = await this.query(_query_1);
            count--;
        }
        while (res.length == 0)
        
        return res;
    }

    /**
     * Same Function as getPostsFromKeywords
     * @param tags the tags which will be searched in the table tags
     */
    public async getPostsFromTags(tags: string[])
    {
        let res: any;
        let _query = "SELECT t.post_id FROM tags t WHERE post_tag IN (";
        for (let i = 0; i < tags.length; i++)
        {
            if (i == tags.length - 1)
            {
                _query += "\"" + tags[i] + "\"" + ")";
            }
            else
            {
                _query += "\"" + tags[i] + "\"" + ",";
            }
        }

        let count = tags.length;
        do
        {
            if (count == 0)
            {
               
                return res;
            }
            let _query_1 = _query + " GROUP BY t.post_id HAVING COUNT(DISTINCT t.post_tag) = " + count;
            res = await this.query(_query_1);
            count--;
        }
        while (res.length == 0)

        return res;
    }

    /**
     * TODO: This works but it is stupidly slow. Write better Code...somehow or create View in Database and 
     * correct other functions
     * @param message string
     */
    public async getMostSimiliar(message: string)
    {
        this.texttools.extractHashtags(message).then((value) =>
        {
            let res = Object.values(value);
            this.getPostsFromTags(res);
        })

        let res = await this.texttools.extractHashtags(message);
        let res_array = Object.values(res);
        let resDBHash = this.getPostsFromTags(res_array);
        let res_keywords = await this.texttools.extractKeywords(message);
        let res_keywords_array: string[] = [];
        for (let key in res_keywords)
        {
            res_keywords_array.push(res_keywords[key].name);
        }
        //console.log(res_keywords);
        let resDBKeyword = await this.getPostsFromKeywords(res_keywords_array);
        return new Promise((resolve, reject) =>
        {

        let equal_key: string[] = [];
        for (let key in resDBKeyword)
        {
            for (let key2 in resDBHash)
            {
                if (resDBKeyword[key].post_id == resDBHash[key].post_id)
                {
                    equal_key.push(resDBKeyword[key].post_id);
                }
            }
        }

        resolve( equal_key.length == 0 ? resDBKeyword : equal_key);
        })

        }
    
    public async getMessageById(id: string)
    {
        let _query = "SELECT message from messages WHERE post_id = " + id;
        return await this.query(_query);
    }

    /**
     * This function will return a dataset from posts
     * @param id the id which should be searched for in the table Posts
     */
    public async getPostById(id: string)
    {
        let _query = "SELECT * from posts WHERE post_id = " + id;
        return await this.query(_query);
    }

    public async getChildrenById(id: string)
    {
        let _query = "SELECT * from children WHERE post_id = " + id;
    }

    /**
     *
     * @param {string} qry
     * @returns {Promise<any>}
     */
    private async query (qry:string) {
        try {
            return await this.pool.query(qry);
        } catch(err) {
            console.log(err);
        }

    }



}