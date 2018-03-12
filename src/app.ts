import { Server } from './server'
import { Db } from './db'
import config from "./config";


let dbCon = new Db(config.db.host, config.db.user, config.db.password, config.db.database, config.db.port);
dbCon.testQuery();

/**
 * Create a new Server
 *
 * @type {Server}
 */
let server = new Server(config.port);

// then listen to it
server.listen();