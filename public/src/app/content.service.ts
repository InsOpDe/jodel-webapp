import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RESULT} from './content/mock-results';
import {ContentModel} from "./content/content.model";
import { Contentpage } from "./content/content-page.model";
import { ResultModel } from "./content/your-result-content/result-content/result.model";
import {CONTENTTYPE} from "./global/contenttype";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeywordBarchartModel } from "./content/shared/keywords-barchar/keyword-barchart.model";
import { MapModel } from './content/shared/map-content/map.model';
import { TIME_RESULT1, TIME_RESULT2 } from "./content/shared/time-content/mock-time-result";

interface JRESULT
{
  message: string;
  interPolatedResult: interpolatedResult;
  hashtags: HashandKeyResult[],
  keywords: HashandKeyResult[],
  jodel: JodelJSON;
  cityimportance: any;

}

interface Citydata
{
  city: string,
  amount: number,
  id: number
}

interface HashandKeyResult
{
  name: string,
  amount: number,
  citydata: Citydata[];
}


interface keyorhash
{
  name: string,
  value: number
}

interface interpolatedResult
{
  Votes: number,
  Comments: number,
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

interface coreJodelJSON
{
  post_id: string;
  vote_count: Number;
  post_color: string;
  post_message: string;
  keywords: string[];
  tags: string[];
  location: string;
  created_at: string;

}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
    constructor(private http: HttpClient) {
        this.color = 'green';
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

      let result = this.setResult();

        this.setContentpages(result.keywordContent);

        return of(result);

        // return this.http
        //   .get<ContentModel>('/api/user', httpOptions);
    }
    getResultData2(jodelData): Observable<JRESULT>
    {
      return this.http.post<JRESULT>('/api/dummy', jodelData);
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

    setResult()
    {
      let contentModel: ContentModel = {
        yourResultContent: {
          result: new ResultModel({
            'karma': this.true_result.interPolatedResult.Votes * 0.75,
            'votes': this.true_result.interPolatedResult.Votes,
            'pins': this.true_result.interPolatedResult.Pins,
            'shared': 50,
            'comments': this.true_result.interPolatedResult.Comments

          }),
          keywordEffectArray: this.createKeyWordBarchartArray(),

          map: new MapModel({
            foo: '312',
            bar: 123
          }),
          time: TIME_RESULT1


        },

        keywordContent: this.createKeyWordContent()
      }

      return contentModel;

  }

  createKeyWordBarchartArray()
  {
    let keyWortBarChart: KeywordBarchartModel[] = [];
    for(let key in this.true_result.keywords)
    {
      keyWortBarChart.push(new KeywordBarchartModel({
        color: 'orange',
        value: this.true_result.keywords[key].amount,
        keyword: this.true_result.keywords[key].name
      }))
    }

    return keyWortBarChart;

  }

  createKeyWordContent()
  {
    let _res:any[] = [];;
    for (let key in this.true_result.keywords)
    {
      _res.push({
        title: this.true_result.keywords[key].name,
        color: 'orange',
        similiarKeywords: this.createKeyWordBarChartArraySim(this.true_result.interPolatedResult.Keywords_similiar),
        relatedHashtags: this.createKeyWordBarChartArraySim(this.true_result.interPolatedResult.Hashtag_similiar),
        map: new MapModel({
          foo: "312",
          bar: 123
        }),
        time: TIME_RESULT2
      })
    }
    return _res;

  }

  createKeyWordBarChartArraySim(arr: keyorhash[])
  {
    let _res: KeywordBarchartModel[] = [];

    for (let i = 0; i < arr.length; i++)
    {
      _res.push(new KeywordBarchartModel({
        color: 'orange',
        value: arr[i].value,
        name: arr[i].name

      }))
    }

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

        console.log(this.contentpages);
    }
}
