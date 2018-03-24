/**
 * Model for Result Object
 *
 * @author  Maya
 * @since   23.03.2018
 */
import {ResultModel} from "./result-content/result.model";
import {KeywordBarchartModel} from "../shared/keywords-barchar/keyword-barchart.model";
import {MapModel} from "../shared/map-content/map.model";
import {TimeModel} from "../shared/time-content/time.model";

export class YourResultModel {

    result: ResultModel;

    keywordEffectArray: KeywordBarchartModel[];

    map: MapModel;

    time: TimeModel;

    constructor (data) {

        this.result = new ResultModel(data.result);
        this.keywordEffectArray = data.keywordBarchartArray;
        this.map = new MapModel(data.map);
        this.time = new TimeModel(data.time);
    }
}
