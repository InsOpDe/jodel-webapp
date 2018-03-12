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
const mysql = require("promise-mysql");
class Db {
    constructor(host, user, password, database, port) {
        this.pool = mysql.createPool({
            host: host,
            user: user,
            password: password,
            database: database,
            port: port,
        });
    }
    testQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.query("SELECT * from Persons");
        });
    }
    query(qry) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.pool.query(qry);
                return res;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.Db = Db;
//# sourceMappingURL=db.js.map