import * as mysql from 'promise-mysql';

export class Db{
    private pool:any;

    constructor(host:string, user:string,password:string, database:string, port:number) {

        this.pool = mysql.createPool({
            host : host,
            user : user,
            password : password,
            database : database,
            port : port,
        });
    }

    public async testQuery(){
        return await this.query("SELECT * from Persons");
    }

    private async query (qry:string) {
        try {
            let res = await this.pool.query(qry);
            return res;
        } catch(err) {
            console.log(err);

        }

    }



}