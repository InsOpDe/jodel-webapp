"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const config_1 = require("./config");
class Api {
    constructor(app) {
        this.prefix = "/api";
        // private foo(req:Request, res:Response) {
        this.foo = (req, res) => {
            let test = this.db.testQuery()[0].FirstName;
            res.send(`Hello ${test}!`);
        };
        this.app = app;
        this.db = new db_1.Db(config_1.default.db.host, config_1.default.db.user, config_1.default.db.password, config_1.default.db.database, config_1.default.db.port);
        this.api();
    }
    api() {
        let router = express_1.Router();
        router.use('/user', this.foo);
        this.app.use(this.prefix, router);
    }
}
exports.Api = Api;
//# sourceMappingURL=api.js.map