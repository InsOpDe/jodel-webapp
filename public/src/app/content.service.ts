import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RESULT} from './content/mock-results';
import {RANDOMJODEL} from './content/random-jodel';
import {ContentModel} from "./content/content.model";
import { Contentpage } from "./content/content-page.model";
import { ResultModel } from "./content/your-result-content/result-content/result.model";
import {CONTENTTYPE} from "./global/contenttype";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeywordBarchartModel } from "./content/shared/keywords-barchar/keyword-barchart.model";
import { MapModel } from './content/shared/map-content/map.model';
import { TIME_RESULT1, TIME_RESULT2 } from "./content/shared/time-content/mock-time-result";
import {MapCitiesDummy} from "./content/shared/map-content/map_cities_dummy";


interface Citydata
{
  city: string,
  amount: number,
  id: number
}

interface HashandKeyResult
{
  name: string,
  color: string,
  amount: number,
  maxValue: number,
  timetable: number[];
  citydata: Citydata[];
  similiar:keyorhash[];
  similiarHashtags:keyorhash[];
}

interface keyorhash
{
  hashtag: string,
  name: string,
  votes: number,
  maxVal: number,
  color: string
}

interface interpolatedResult
{
  Votes: number,
  Comments: number,
  maxKommentare: number,
  maxValue: number,
  Pins: number,
  Keywords_similiar: keyorhash[],
  Hashtag_similiar: keyorhash[]
}

interface JodelJSON
{
  core: coreJodelJSON;
  image_approved: Boolean;
  image_url: string;
  child_count: Number;
  oj_replied: Boolean;
  children: coreJodelJSON[];
}
import {HeaderModel} from "./header/header.model";
import { RelatedJodelModel } from './content/your-result-content/related-jodel/related-jodel.model';
import {UtilService} from "./util.service";
import {TimeModel} from "./content/shared/time-content/time.model";

interface coreJodelJSON
{
  post_id: string;
  vote_count: number;
  child_count: number;
  post_color: string;
  post_message: string;
  keywords: string[];
  tags: string[];
  location: string;
  created_at: string;

}
export interface JRESULT
{
  message: string;
  time: number[];
  interPolatedResult: interpolatedResult;
  hashtags: HashandKeyResult[],
  keywords: HashandKeyResult[],
  jodel: JodelJSON;
  cityimportance: Citydata[];

}





const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' } )
};

/**
 * content service - (Bisher einzige geplante) Verbindung zum Server
 *
 * Verwaltet/Speichert globale Informationen, die von anderen Components
 * benoetigt werden (aktuelle color, page, ..)
 *
 * @author  Maya
 * @since   24.03.2018
 */
@Injectable()
export class ContentService {

    color: string;
    contentpages: Contentpage[] = [];
    currentContentpage: Contentpage;
    true_result: JRESULT;
    jodelData:HeaderModel;
    randomJodelId:number = -1;

    constructor(private http: HttpClient, private util: UtilService) {
        this.color = 'green';
    }


    /**
     * get random jodel data
     * TODO AJAX CALL
     *
     * @author  Maya
     * @since   23.03.2018
     */
    getRandomJodel(): Observable<HeaderModel> {

        let result = this.getRandomHeaderModel();

        return of(result);

        // return this.http
        //   .get<ContentModel>('/api/user', httpOptions);
    }

    getRandomHeaderModel() {
      let randomJodelKeys = Object.keys(RANDOMJODEL);
      let randomJodelId = randomJodelKeys[this.util.randomIntFromInterval(0, randomJodelKeys.length - 1)];
      let randomjodel = RANDOMJODEL[randomJodelId];
      this.randomJodelId = Number(randomJodelId);

      let allColors = ['yellow',
        'orange',
        'green',
        'blue',
        'red',
        'turquoise'];
      let color = allColors[this.util.randomIntFromInterval(0, allColors.length - 1)];

      console.log(randomjodel);

      let result = new HeaderModel({
        location: 'Ulm',
        cityId: 61,
        time: '13:48',
        text: randomjodel.message
      });
      this.color = color;

      return result;
    }


    /**
     * send jodel data to server and
     * get data from mock result to fake http request
     * TODO AJAX CALL
     *
     * @author  Maya
     * @since   23.03.2018
     */
    getResultData(jodelData): Observable<ContentModel> {

        this.jodelData = jodelData;

        for (let i = 0; i < 3000; i++) {

            console.log('a');
        }

        let result = RESULT;

        this.setContentpages(result.keywordContent);

        // aktivieren wenn man in der schlagwort ansicht landen will
        // this.changeContentpageType(CONTENTTYPE.KEYWORD);

        return of(result);
    }



    async getResultData2(jodelData) {

      this.jodelData = jodelData;
      let result;
      if(this.randomJodelId >= 0 && RANDOMJODEL[this.randomJodelId]) {
        console.log("randomjodel")
        result = RANDOMJODEL[this.randomJodelId];
        await this.util.wait(3000);

      } else {
        console.log(httpOptions)
        result = await this.http.post<JRESULT>('http://localhost:8080/api/dummy', jodelData, httpOptions).toPromise();
      }

      // this.util.download(result, "dummy.json");

      this.true_result = result;

      let trueresult2 = this.setResult();

      this.setContentpages(trueresult2.keywordContent);

      return trueresult2
    }

    /**
     * refresh contentpages for new jodel
     *
     * @author  Maya
     * @since   25.03.2018
     */
    refresh() {
        this.currentContentpage = null;
        this.contentpages = [];
    }

    getTimeModel(timeObj) {
      let arr = [];
      for(let i in timeObj) {
        arr.push(timeObj[i])
      };
      arr = arr.sort((a,b)=>a.hour - b.hour);
      arr = arr.map((a)=>Math.round(a.votes));
      return new TimeModel({value:arr})
    }

    getColor(colorHex: string) {

        let color = '';

        switch (colorHex) {
            case 'FFBA00': {
                color = 'yellow';
                break;
            }
            case 'FF9908': {
                color = 'orange';
                break;
            }
            case '9EC41C': {
                color = 'green';
                break;
            }
            case '06A3CB': {
                color = 'blue';
                break;
            }
            case 'DD5F5F': {
                color = 'red';
                break;
            }
            case '8ABDB0': {
                color = 'turquoise';
                break;
            }
        }

        return color;
    }

    setResult() {

      let contentModel: ContentModel = {
        yourResultContent: {
          result: new ResultModel({
            'karma': this.true_result.interPolatedResult.Votes * 5 + this.true_result.interPolatedResult.Comments * 10,
            'karmaMaxValue': this.true_result.interPolatedResult.maxValue * 5 + this.true_result.interPolatedResult.maxKommentare * 10,
            'votes': this.true_result.interPolatedResult.Votes,
            'pins': this.true_result.interPolatedResult.Pins,
            'shared': 50,
            'comments': this.true_result.interPolatedResult.Comments,
            'votesMaxValue': this.true_result.interPolatedResult.maxValue,
            'commentsMaxValue': this.true_result.interPolatedResult.maxKommentare
          }),
          keywordEffectArray: this.createKeyWordBarchartArray(),

          map: new MapModel({cities: this.true_result.cityimportance}),
          time: this.getTimeModel(this.true_result.time),

          relatedJodel: this.createRelatedJodel()

        },
        keywordContent: this.createKeyWordContent()
      };
      return contentModel;

  }

  createKeyWordBarchartArray()
  {
    let keyWortBarChart: KeywordBarchartModel[] = [];
    for(let key in this.true_result.keywords)
    {
      keyWortBarChart.push(new KeywordBarchartModel({
        color: this.getColor(this.true_result.keywords[key].color),
        value: Math.round(Number(this.true_result.keywords[key].amount)),
        keyword: this.true_result.keywords[key].name,
        maxValue: this.true_result.keywords[key].maxValue,
      }))
    }

    console.log("keyWortBarChart", keyWortBarChart);


    return keyWortBarChart;

  }

  createRelatedJodel() {

    let barchartData: KeywordBarchartModel[] = [];

    barchartData.push(new KeywordBarchartModel({
        value: this.true_result.jodel.core.vote_count,
        color: this.getColor(this.true_result.jodel.core.post_color),
        keyword: 'Votes',
        maxValue: this.true_result.interPolatedResult.maxValue
    }));

    barchartData.push(new KeywordBarchartModel({
        value: this.true_result.jodel.child_count,
        color: this.getColor(this.true_result.jodel.core.post_color),
        keyword: 'Kommentare',
        maxValue: this.true_result.interPolatedResult.maxKommentare
    }));

    let data = {

      location: this.true_result.jodel.core.location,
      time: this.true_result.jodel.core.created_at,
      text: this.true_result.jodel.core.post_message,
      color: this.getColor(this.true_result.jodel.core.post_color),
      barchartArray: barchartData

    };

    let relatedJodelModel = new RelatedJodelModel(data);

    return relatedJodelModel
  }


  createKeyWordContent() {

    let _res:any[] = [];

    for (let key in this.true_result.keywords) {

      _res.push({
        title: this.true_result.keywords[key].name,
        color: 'orange',
        similiarKeywords: this.createKeyWordBarChartArraySim(this.true_result.keywords[key].similiar),
        relatedHashtags: this.createKeyWordBarChartArraySim(this.true_result.keywords[key].similiarHashtags),
        // similiarKeywords: this.createKeyWordBarChartArraySim(this.true_result.interPolatedResult.Keywords_similiar),
        // relatedHashtags: this.createKeyWordBarChartArraySim(this.true_result.interPolatedResult.Hashtag_similiar),
        map: new MapModel({cities: this.true_result.keywords[key].citydata}),
        time: this.getTimeModel(this.true_result.keywords[key].timetable),
      })
    }

    console.log(_res);
    return _res;

  }

  createKeyWordBarChartArraySim(arr: keyorhash[]) {

    let _res: KeywordBarchartModel[] = [];

    for (let i = 0; i < arr.length; i++) {
      _res.push(new KeywordBarchartModel({
        color: this.getColor(arr[i].color),
        value: Math.round(Number(arr[i].votes)),
        keyword: arr[i].name || arr[i].hashtag,
        maxValue: arr[i].maxVal

      }))
    }

    console.log("_res", _res)

    return _res;
  }

    /**
     * change Contentpage type
     *
     * @author  Maya
     * @since   29.03.2018
     */
    changeContentpageType(type) {

        if (type.id == this.currentContentpage.type.id) return;


        for(let i = 0; i < this.contentpages.length; i++) {

            if (this.contentpages[i].type.id == type.id) {

                this.currentContentpage = this.contentpages[i];
                break;
            }
        }

    }


    /**
     * create contentpages and set current contentpage
     *
     * @author  Maya
     * @since   24.03.2018
     */
    setContentpages(keywordContent): void {

        this.createContentpages(keywordContent);
        this.currentContentpage = this.contentpages[0];
    }


    /**
     * create all existing content pages (your result + all keyword pages)
     *
     * @author  Maya
     * @since   24.03.2018
     */
    createContentpages(keywordContent): void {

        this.contentpages.push(new Contentpage());
        for (let i = 0; i < keywordContent.length; i++) {

            this.contentpages.push(new Contentpage({
                id: i+1,
                type: CONTENTTYPE.KEYWORD,
                title: keywordContent[i].title
            }));
        }

    }
}
