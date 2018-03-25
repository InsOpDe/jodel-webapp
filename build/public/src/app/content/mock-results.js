"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_model_1 = require("./your-result-content/result-content/result.model");
const map_model_1 = require("./shared/map-content/map.model");
const time_model_1 = require("./shared/time-content/time.model");
const mock_keyword_barchart_Array_1 = require("./shared/keywords-barchar/mock-keyword-barchart-Array");
exports.RESULT = {
    yourResultContent: {
        result: new result_model_1.ResultModel({
            'karma': 11,
            'votes': 56,
            'pins': 95,
            'shared': 23,
            'comments': 53,
        }),
        keywordEffectArray: mock_keyword_barchart_Array_1.keywordBarchartArray1,
        map: new map_model_1.MapModel({
            foo: '312',
            bar: 123
        }),
        time: new time_model_1.TimeModel({
            foo: '312',
            bar: 123
        })
    },
    keywordContent: [
        {
            title: 'Schlagwort1',
            color: 'orange',
            similiarKeywords: mock_keyword_barchart_Array_1.keywordBarchartArray2,
            relatedHashtags: mock_keyword_barchart_Array_1.hashtagBarchartArray2,
            map: new map_model_1.MapModel({
                foo: '312',
                bar: 123
            }),
            time: new time_model_1.TimeModel({
                foo: '312',
                bar: 123
            })
        },
        {
            title: 'Schlagwort2',
            color: 'turquoise',
            similiarKeywords: mock_keyword_barchart_Array_1.keywordBarchartArray1,
            relatedHashtags: mock_keyword_barchart_Array_1.hashtagBarchartArray2,
            map: new map_model_1.MapModel({
                foo: '312',
                bar: 123
            }),
            time: new time_model_1.TimeModel({
                foo: '312',
                bar: 123
            })
        }
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1yZXN1bHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHVibGljL3NyYy9hcHAvY29udGVudC9tb2NrLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvRkFBOEU7QUFDOUUsOERBQXdEO0FBRXhELGlFQUEyRDtBQUMzRCx1R0FHK0Q7QUFHbEQsUUFBQSxNQUFNLEdBQWlCO0lBRWhDLGlCQUFpQixFQUFHO1FBQ2hCLE1BQU0sRUFBRSxJQUFJLDBCQUFXLENBQUM7WUFDcEIsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFDO1FBRUYsa0JBQWtCLEVBQUUsbURBQXFCO1FBRXpDLEdBQUcsRUFBRSxJQUFJLG9CQUFRLENBQUM7WUFDZCxHQUFHLEVBQUUsS0FBSztZQUNWLEdBQUcsRUFBRSxHQUFHO1NBQ1gsQ0FBQztRQUNGLElBQUksRUFBRSxJQUFJLHNCQUFTLENBQUM7WUFDaEIsR0FBRyxFQUFFLEtBQUs7WUFDVixHQUFHLEVBQUUsR0FBRztTQUNYLENBQUM7S0FDTDtJQUVELGNBQWMsRUFBRztRQUNiO1lBQ0ksS0FBSyxFQUFFLGFBQWE7WUFDcEIsS0FBSyxFQUFFLFFBQVE7WUFDZixnQkFBZ0IsRUFBRSxtREFBcUI7WUFDdkMsZUFBZSxFQUFFLG1EQUFxQjtZQUN0QyxHQUFHLEVBQUUsSUFBSSxvQkFBUSxDQUFDO2dCQUNkLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEdBQUcsRUFBRSxHQUFHO2FBQ1gsQ0FBQztZQUNGLElBQUksRUFBRSxJQUFJLHNCQUFTLENBQUM7Z0JBQ2hCLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEdBQUcsRUFBRSxHQUFHO2FBQ1gsQ0FBQztTQUNMO1FBQ0Q7WUFDSSxLQUFLLEVBQUUsYUFBYTtZQUNwQixLQUFLLEVBQUUsV0FBVztZQUNsQixnQkFBZ0IsRUFBRSxtREFBcUI7WUFDdkMsZUFBZSxFQUFFLG1EQUFxQjtZQUN0QyxHQUFHLEVBQUUsSUFBSSxvQkFBUSxDQUFDO2dCQUNkLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEdBQUcsRUFBRSxHQUFHO2FBQ1gsQ0FBQztZQUNGLElBQUksRUFBRSxJQUFJLHNCQUFTLENBQUM7Z0JBQ2hCLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEdBQUcsRUFBRSxHQUFHO2FBQ1gsQ0FBQztTQUNMO0tBQ0o7Q0FDSixDQUFDIn0=