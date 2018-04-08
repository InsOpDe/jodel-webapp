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
        return await this.query("SELECT * from children Limit 1");
    }


    /**
     * get random top 1000 post
     *
     * @returns {Promise<any>}
     */
    public async getRandomPost(){
        return await this.query("SELECT top.*, messages.post_message FROM (SELECT * FROM jodeldb.posts order by votes desc LIMIT 1000) as top \n" +
            "inner join messages on (messages.post_id = top.post_id)\n" +
            "order by RAND() LIMIT 1\n");
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