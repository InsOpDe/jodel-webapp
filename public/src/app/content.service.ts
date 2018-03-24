import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RESULT} from './content/your-result-content/result-content/mock-results';
import {YourResultModel} from "./content/your-result-content/your-result.model";

@Injectable()
export class ContentService {

    color: string;

    constructor() {
        this.color = 'green'
    }


    /**
     * get data from mock result to fake http request
     *
     * @author  Maya
     * @since   23.03.2018
     */
    getResultData(): Observable<YourResultModel> {

        return of(RESULT);
    }
}
