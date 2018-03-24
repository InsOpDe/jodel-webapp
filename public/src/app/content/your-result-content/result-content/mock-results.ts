import {YourResultModel} from "../your-result.model";
import {KeywordEffectModel} from "../keyword-effect-content/keyword-effect.model";
import {ResultModel} from "./result.model";
import {MapModel} from "../map-content/map.model";


export const RESULT: YourResultModel = {

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

};
