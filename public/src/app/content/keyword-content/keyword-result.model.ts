import {MapModel} from "../your-result-content/map-content/map.model";
import {KeywordEffectModel} from "../your-result-content/keyword-effect-content/keyword-effect.model";
import {TimeModel} from "../your-result-content/time-content/time.model";

/**
 * Beispielaufbau fuer ein keyword result model
 *
 * @author  Maya
 * @since   24.03.2018
 */
export class KeywordResultModel {

    title: string;
    // TODO Keywordeffectmodell verallgemeinern zu barchar modell ??
    relatedHashtags: Array<KeywordEffectModel>;
    similiarKeywords: Array<KeywordEffectModel>;
    color: string;
    time: TimeModel;
    map: MapModel;
}