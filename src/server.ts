import { Api } from './api'
import * as bodyParser from "body-parser";
import * as express from "express";


/**
 * The server.
 *
 * @class Server
 */
export class Server {

    private app: express.Application;

    private port : number;


    /**
     * Constructor.
     *
     * @class Server
     * @param port
     * @constructor
     */
    constructor(port:number) {

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
    public listen() {

        this.app.listen(this.port, () => {
            console.log(`Example app listening on port: ${this.port}!`)
        });

    }



    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    public api() {

        new Api(this.app);

    }



    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
        //add static paths
        this.app.use('/', express.static('public/dist'));

        //mount json form parser
        this.app.use(bodyParser.json());

        // catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

    }

}