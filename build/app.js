"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const db_1 = require("./db");
const config_1 = require("./config");
let dbCon = new db_1.Db(config_1.default.db.host, config_1.default.db.user, config_1.default.db.password, config_1.default.db.database, config_1.default.db.port);
dbCon.testQuery();
/**
 * Create a new Server
 *
 * @type {Server}
 */
let server = new server_1.Server(config_1.default.port);
// then listen to it
server.listen();
//# sourceMappingURL=app.js.map