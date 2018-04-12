import {KeywordBarchartModel} from "./shared/keywords-barchar/keyword-barchart.model";
import {ResultModel} from "./your-result-content/result-content/result.model";
import {MapModel} from "./shared/map-content/map.model";
import {ContentModel} from "./content.model";
import {TimeModel} from "./shared/time-content/time.model";
import {
    hashtagBarchartArray2, keywordBarchartArray1,
    keywordBarchartArray2
} from "./shared/keywords-barchar/mock-keyword-barchart-Array";
import {TIME_RESULT1, TIME_RESULT2} from "./shared/time-content/mock-time-result";
import {relatedJodel} from "./your-result-content/related-jodel/mock-related-jodel";
import {RelatedJodelModel} from "./your-result-content/related-jodel/related-jodel.model";


export const RESULT: ContentModel = {

    yourResultContent : {
        result: new ResultModel({
            'karma': 11,
            'votes': 56,
            'pins': 95,
            'shared': 23,
            'comments': 53,
        }),

        keywordEffectArray: keywordBarchartArray1,

        map: new MapModel({
            foo: '312',
            bar: 123
        }),
        time: TIME_RESULT1,

        relatedJodel: new RelatedJodelModel(relatedJodel)

    },

    keywordContent : [
        {
            title: 'Schlagwort1',
            color: 'orange',
            similiarKeywords: keywordBarchartArray2,
            relatedHashtags: hashtagBarchartArray2,
            map: new MapModel({
                foo: '312',
                bar: 123
            }),
            time: TIME_RESULT2
        },
        {
            title: 'Schlagwort2',
            color: 'turquoise',
            similiarKeywords: keywordBarchartArray1,
            relatedHashtags: hashtagBarchartArray2,
            map: new MapModel({
                foo: '312',
                bar: 123
            }),
            time: TIME_RESULT1
        }
    ]
};
