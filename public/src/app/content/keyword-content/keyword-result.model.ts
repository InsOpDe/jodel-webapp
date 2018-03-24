import {MapModel} from "../shared/map-content/map.model";
import {KeywordBarchartModel} from "../shared/keywords-barchar/keyword-barchart.model";
import {TimeModel} from "../shared/time-content/time.model";

/**
 * Beispielaufbau fuer ein keyword result model
 *
 * @author  Maya
 * @since   24.03.2018
 */
export class KeywordResultModel {

    title: string;
    relatedHashtags: Array<KeywordBarchartModel>;
    similiarKeywords: Array<KeywordBarchartModel>;
    color: string;
    time: TimeModel;
    map: MapModel;
}