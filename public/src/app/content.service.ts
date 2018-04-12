import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RESULT} from './content/mock-results';
import {ContentModel} from "./content/content.model";
import {Contentpage} from "./content/content-page.model";
import {CONTENTTYPE} from "./global/contenttype";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HeaderModel} from "./header/header.model";


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
    jodelData:HeaderModel;

    constructor(private http: HttpClient) {
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

        let result = new HeaderModel({
            location: 'Hamburg',
            cityId: 2,
            time: '13:48',
            text: 'Ein Professor kommt in die VL: Der Rest is trivial und ' +
            'kann sich hergeleitet werden. \n\n' +
            '#darferdas'
        });
        this.color = 'turquoise';

        return of(result);

        // return this.http
        //   .get<ContentModel>('/api/user', httpOptions);
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

        return of(result);
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
