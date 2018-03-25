import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RESULT} from './content/mock-results';
import {ContentModel} from "./content/content.model";
import {Contentpage} from "./content/content-page.model";
import {CONTENTTYPE} from "./global/contenttype";
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
 * content service
 * (Bisher einzige geplante) Verbindung zum Server
 *
 * Verwaltet/Speichert globale Informationen, die von anderen Components
 * benoetigt werden (aktuelle color, page, ..)
 */
@Injectable()
export class ContentService {

    color: string;
    contentpages: Contentpage[] = [new Contentpage()];
    currentContentpage: Contentpage;

    constructor(private http: HttpClient) {
        this.color = 'green';
        this.currentContentpage = this.contentpages[0];
    }


    /**
     * get data from mock result to fake http request
     * TODO AJAX CALL
     *
     * @author  Maya
     * @since   23.03.2018
     */
    getResultData(): Observable<ContentModel> {

        let result = RESULT;

        this.createContentpages(result.keywordContent);

        return of(result);

        // return this.http
        //   .get<ContentModel>('/api/user', httpOptions);
    }


    /**
     * create all existing content pages (your result + all keyword pages)
     *
     * @author  Maya
     * @since   24.03.2018
     */
    createContentpages(keywordContent): void {

        for (let i = 0; i < keywordContent.length; i++) {

            this.contentpages.push(new Contentpage({
                id: i+1,
                type: CONTENTTYPE.KEYWORD,
                title: keywordContent[i].title
            }));
        }
    }
}
