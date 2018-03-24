import {KeywordEffectModel} from "./your-result-content/keyword-effect-content/keyword-effect.model";
import {ResultModel} from "./your-result-content/result-content/result.model";
import {MapModel} from "./your-result-content/map-content/map.model";
import {ContentModel} from "./content.model";
import {TimeModel} from "./your-result-content/time-content/time.model";


export const RESULT: ContentModel = {

    yourResultContent : {
        result: new ResultModel({
            'karma': 11,
            'votes': 56,
            'pins': 95,
            'shared': 23,
            'comments': 53,
        }),

        keywordEffectArray: [
            new KeywordEffectModel({
                color: 'orange',
                value: '32',
                keyword: 'Schlüsselwort1'
            }),
            new KeywordEffectModel({
                color: 'turquoise',
                value: '56',
                keyword: 'Schlüsselwort2'
            }),
            new KeywordEffectModel({
                color: 'red',
                value: '75',
                keyword: 'Schlüsselwort3'
            }),
            new KeywordEffectModel({
                color: 'blue',
                value: '12',
                keyword: 'Schlüsselwort4'
            })
        ],

        map: new MapModel({
            foo: '312',
            bar: 123
        })
    },

    keywordContent : [
        {
            title: 'Schlagwort1',
            color: 'orange',
            similiarKeywords: [],
            relatedHashtags: [],
            map: new MapModel({
                foo: '312',
                bar: 123
            }),
            time: new TimeModel({
                foo: '312',
                bar: 123
            })
        },
        {
            title: 'Schlagwort2',
            color: 'turquoise',
            similiarKeywords: [],
            relatedHashtags: [],
            map: new MapModel({
                foo: '312',
                bar: 123
            }),
            time: new TimeModel({
                foo: '312',
                bar: 123
            })
        }
    ]
};
