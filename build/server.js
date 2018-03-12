"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const bodyParser = require("body-parser");
const express = require("express");
/**
 * The server.
 *
 * @class Server
 */
class Server {
    /**
     * Constructor.
     *
     * @class Server
     * @param port
     * @constructor
     */
    constructor(port) {
        //create expressjs application
        this.app = express();
        this.port = port;
        //configure application
        this.config();
        //add api
        this.api();
    }
    /**
     * Listen for incoming requests
     */
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port: ${this.port}!`);
        });
    }
    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    api() {
        new api_1.Api(this.app);
    }
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    config() {
        //add static paths
        this.app.use('/', express.static('public'));
        //mount json form parser
        this.app.use(bodyParser.json());
        // catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map