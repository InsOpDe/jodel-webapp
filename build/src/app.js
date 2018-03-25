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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLHFDQUFpQztBQUNqQyxxQ0FBOEI7QUFFOUI7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFckMsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyJ9