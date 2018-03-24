import {Component, Input, OnInit} from '@angular/core';
import {KeywordBarchartModel} from "./keyword-barchart.model";

/**
 * keyword barchart component
 * - generates barchart components for all keywords
 *
 * @author  Maya
 * @since   24.03.2018
 */
@Component({
    selector: 'app-keyword-barchar-content',
    templateUrl: './keyword-barchart-content.component.html'
})
export class KeywordBarchartContentComponent implements OnInit {

    @Input() keywordBarchartArray: KeywordBarchartModel[];
    @Input() headline: string;

    constructor() {
    }

    ngOnInit() {
    }

}
