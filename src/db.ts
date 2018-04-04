import * as mysql from 'promise-mysql';

export class Db{

    private pool:mysql.Pool;

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
    public async getPostFromKeywords(keywords: string[])
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