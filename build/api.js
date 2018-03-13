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
class Api {
    /**
     * Constructor für die Api klasse
     *
     * @param {e.Application} app
     */
    constructor(app) {
        this.prefix = "/api";
        /**
         *
         * @param {e.Request} req
         * @param {e.Response} res
         * @returns {Promise<void>}
         */
        this.foo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let test = yield this.db.testQuery();
            res.send(`Hello ${test[0].FirstName}!`);
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
        let router = express_1.Router();
        router.use('/user', this.foo);
        this.app.use(this.prefix, router);
    }
}
exports.Api = Api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStEO0FBQy9ELDZCQUF5QjtBQUN6QixxQ0FBOEI7QUFHOUI7SUFTSTs7OztPQUlHO0lBQ0gsWUFBWSxHQUFnQjtRQVZwQixXQUFNLEdBQVUsTUFBTSxDQUFDO1FBbUMvQjs7Ozs7V0FLRztRQUNLLFFBQUcsR0FBRyxDQUFPLEdBQVcsRUFBRSxHQUFZLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQSxDQUFBO1FBakNHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWYsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLE9BQUUsQ0FBQyxnQkFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLGdCQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxnQkFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUlEOzs7T0FHRztJQUNLLEdBQUc7UUFDUCxJQUFJLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7UUFFdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFdEMsQ0FBQztDQWdCSjtBQW5ERCxrQkFtREMifQ==