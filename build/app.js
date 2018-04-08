"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
process.on('unhandledRejection', console.log);
const server_1 = require("./server");
const config_1 = require("./config");
/**
 * Create a new Server
 *
 * @type {Server}
 */
let server = new server_1.Server(config_1.default.port);
// then listen to it
server.listen();
//# sourceMappingURL=app.js.map