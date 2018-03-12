import {Application, Router, Request, Response} from "express";
import { Db } from './db'
import config from "./config";


export class Api{

    private app: Application;
    private prefix:string = "/api";

    private db:Db;

    constructor(app: Application) {
        this.app = app;

        this.db = new Db(config.db.host, config.db.user, config.db.password, config.db.database, config.db.port);

        this.api();
    }


    private api() {
        let router = Router();

        router.use('/user', this.foo);

        this.app.use(this.prefix, router);

    }

    // private foo(req:Request, res:Response) {
    private foo = (req:Request, res:Response) => {
        let test = this.db.testQuery()[0].FirstName;
        res.send(`Hello ${test}!`);
    }


}