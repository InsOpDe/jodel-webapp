import {Component, Input, OnInit} from '@angular/core';
import {YourResultModel} from "./your-result.model";

@Component({
    selector: 'app-your-result-content',
    templateUrl: './your-result-content.component.html'
})
export class YourResultContentComponent implements OnInit {

    @Input() yourResultContent: YourResultModel;

    timeChartHeadline = {
        'headline': 'Erfolgschancen deines Jodels über den Tag hinweg',
        // 'tooltip': 'Der Erfolg deines Jodels ist abhängig von der Uhrzeit zu der du ihn postest.',
        'tooltip': 'Durchschnittlicher Erfolg ähnlicher Jodel, abhängig von ihrer geposteten Uhrzeit.',
        'class': 'timeResult'
    };

    constructor() {}


    /**
     * on init
     *
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnInit() {
    }

}
