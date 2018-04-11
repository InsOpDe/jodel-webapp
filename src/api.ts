import {Application, Router, Request, Response} from "express";
import { Db } from './db'
import config from "./config";
import { Jodel, JResult } from "./jresult";

// const testResult = {
//     "foo" : "bar"
// };


export class Api{

    private app: Application;

    private prefix:string = "/api";

    private db:Db;


    /**
     * Constructor für die Api klasse
     *
     * @param {e.Application} app
     */
    constructor(app: Application) {
        this.app = app;

        this.db = new Db(config.db.host, config.db.user, config.db.password, config.db.database, config.db.port);

        this.api();
    }



    /**
     * Router für Api.
     * Routed alle /api/* requests weiter
     */
    private async api() {
        let router = Router();

        router.use('/user', this.foo);
        router.use('/random', this.getRandomPost);
        let _res = new JResult("Jodel ist eine coole Plattform! #jhj #letfetz", this.db);
        await _res.getResult();
        console.log(JSON.stringify(_res.toJSON()));
        //let _res = await this.db.getCreatedByIdChild("59a04066b938680016c917c5");
        //console.log(_res);
        this.app.use(this.prefix, router);

    }


    private getRandomPost = async(req, res) => {
        let result = await this.db.getRandomPost();
        res.send("<pre>" + JSON.stringify(result, null, 2))
    }


    /**
     *
     * @param {e.Request} req
     * @param {e.Response} res
     * @returns {Promise<void>}
     */
    private foo = async (req:Request, res:Response) => {
        let test = await this.db.testQuery();
        res.send(`Hello ${JSON.stringify(test[0])}!`);
        // res.send(testResult);
    }


}