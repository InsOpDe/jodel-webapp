/**
 * Model for Result Object
 *
 * @author  Maya
 * @since   23.03.2018
 */
import {ResultModel} from "./result-content/result.model";
import {KeywordEffectModel} from "./keyword-effect-content/keyword-effect.model";
import {MapModel} from "./map-content/map.model";

export class YourResultModel {

    result: ResultModel;

    keywordEffectArray: KeywordEffectModel[];

    map: MapModel;

    constructor (data) {

        this.result = new ResultModel(data.result);
        this.keywordEffectArray = data.keywordEffectArray;
        this.map = new MapModel(data.map)
    }
}
