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
    /**
     * Constructor für die DB Klasse
     *
     * @param {string} host
     * @param {string} user
     * @param {string} password
     * @param {string} database
     * @param {number} port
     */
    constructor(host, user, password, database, port) {
        this.pool = mysql.createPool({
            host: host,
            user: user,
            password: password,
            database: database,
            port: port,
        });
    }
    /**
     *
     * @returns {Promise<any>}
     */
    testQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.query("SELECT * from Persons");
        });
    }
    /**
     *
     * @param {string} qry
     * @returns {Promise<any>}
     */
    query(qry) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.pool.query(qry);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.Db = Db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUV2QztJQUlJOzs7Ozs7OztPQVFHO0lBQ0gsWUFBWSxJQUFXLEVBQUUsSUFBVyxFQUFDLFFBQWUsRUFBRSxRQUFlLEVBQUUsSUFBVztRQUU5RSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDekIsSUFBSSxFQUFHLElBQUk7WUFDWCxJQUFJLEVBQUcsSUFBSTtZQUNYLFFBQVEsRUFBRyxRQUFRO1lBQ25CLFFBQVEsRUFBRyxRQUFRO1lBQ25CLElBQUksRUFBRyxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUlEOzs7T0FHRztJQUNVLFNBQVM7O1lBQ2xCLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyRCxDQUFDO0tBQUE7SUFJRDs7OztPQUlHO0lBQ1csS0FBSyxDQUFFLEdBQVU7O1lBQzNCLElBQUksQ0FBQztnQkFDRCxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQUMsS0FBSyxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7UUFFTCxDQUFDO0tBQUE7Q0FJSjtBQXBERCxnQkFvREMifQ==