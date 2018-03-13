import {Application, Router, Request, Response} from "express";
import { Db } from './db'
import config from "./config";

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
    private api() {
        let router = Router();

        router.use('/user', this.foo);

        this.app.use(this.prefix, router);

    }



    /**
     *
     * @param {e.Request} req
     * @param {e.Response} res
     * @returns {Promise<void>}
     */
    private foo = async (req:Request, res:Response) => {
        let test = await this.db.testQuery();
        res.send(`Hello ${test[0].FirstName}!`);
    }


}