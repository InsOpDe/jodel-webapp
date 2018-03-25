"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Model for Result Object
 *
 * @author  Maya
 * @since   23.03.2018
 */
const result_model_1 = require("./result-content/result.model");
const map_model_1 = require("../shared/map-content/map.model");
const time_model_1 = require("../shared/time-content/time.model");
class YourResultModel {
    constructor(data) {
        this.result = new result_model_1.ResultModel(data.result);
        this.keywordEffectArray = data.keywordBarchartArray;
        this.map = new map_model_1.MapModel(data.map);
        this.time = new time_model_1.TimeModel(data.time);
    }
}
exports.YourResultModel = YourResultModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91ci1yZXN1bHQubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wdWJsaWMvc3JjL2FwcC9jb250ZW50L3lvdXItcmVzdWx0LWNvbnRlbnQveW91ci1yZXN1bHQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7R0FLRztBQUNILGdFQUEwRDtBQUUxRCwrREFBeUQ7QUFDekQsa0VBQTREO0FBRTVEO0lBVUksWUFBYSxJQUFJO1FBRWIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLG9CQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxzQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFqQkQsMENBaUJDIn0=