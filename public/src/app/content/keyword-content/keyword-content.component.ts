import {Component, Input, OnInit} from '@angular/core';
import {KeywordResultModel} from "./keyword-result.model";

/**
 * keyword content component
 * - content page for a keyword
 *
 * @author  Maya
 * @since   23.03.2018
 */
@Component({
    selector: 'app-keyword-content',
    templateUrl: './keyword-content.component.html'
})
export class KeywordContentComponent implements OnInit {

    @Input() keywordContent: KeywordResultModel;

    timeChartHeadline = {
        'headline' : 'Popularität des Schlagwortes über den Tag hinweg',
        'tooltip' : 'Die Beliebtheit eines Schlagwortes ist abhängig von der Uhrzeit zu der es gepostet wird.',
        'class' : 'keywordResult'
    };

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        // console.log(changes);
    }
}
