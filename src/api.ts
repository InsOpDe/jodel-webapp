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
    private loadJsonFile = require("load-json-file");
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
        router.use('/dummy', this.returnDummy);
        let tmp = new JResult("Alternative für Deutschland. Demokratische Partei und Bürgerbewegung gegen die undemokratische und rechtswidrige Willkür der etablierten Altparteien.", this.db);
        await tmp.getResult();
        console.log(JSON.stringify(tmp.toJSON()));
        //console.log(JSON.stringify(tmp.toJSON()))


        this.app.use(this.prefix, router);

    }


    private getRandomPost = async(req, res) => {
        let result = await this.db.getRandomPost();
        res.send("<pre>" + JSON.stringify(result, null, 2))
    }


    counter = 0
    private returnDummy = async(req, res) => 
    {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0)
        {
            console.log('Object missing');
            res.send("");
        }
        else
        {
           
           let _res = new JResult(req.body.text, this.db);
            await _res.getResult();
            res.send(_res.toJSON());
        }
        

        
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