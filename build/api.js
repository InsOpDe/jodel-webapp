"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const config_1 = require("./config");
// const testResult = {
//     "foo" : "bar"
// };
class Api {
    /**
     * Constructor für die Api klasse
     *
     * @param {e.Application} app
     */
    constructor(app) {
        this.prefix = "/api";
        this.getRandomPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield this.db.getRandomPost();
            res.send("<pre>" + JSON.stringify(result, null, 2));
        });
        /**
         *
         * @param {e.Request} req
         * @param {e.Response} res
         * @returns {Promise<void>}
         */
        this.foo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let test = yield this.db.testQuery();
            res.send(`Hello ${JSON.stringify(test[0])}!`);
            // res.send(testResult);
        });
        this.app = app;
        this.db = new db_1.Db(config_1.default.db.host, config_1.default.db.user, config_1.default.db.password, config_1.default.db.database, config_1.default.db.port);
        this.api();
    }
    /**
     * Router für Api.
     * Routed alle /api/* requests weiter
     */
    api() {
        return __awaiter(this, void 0, void 0, function* () {
            let router = express_1.Router();
            router.use('/user', this.foo);
            router.use('/random', this.getRandomPost);
            this.app.use(this.prefix, router);
        });
    }
}
exports.Api = Api;
//# sourceMappingURL=api.js.map