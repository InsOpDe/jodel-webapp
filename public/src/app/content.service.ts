import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RESULT} from './content/mock-results';
import {ContentModel} from "./content/content.model";
import {Contentpage} from "./content/content-page.model";
import {CONTENTTYPE} from "./global/contenttype";

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

    constructor() {
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
