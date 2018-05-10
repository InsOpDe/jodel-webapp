import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {TimeModel} from "./time.model";
import {ContentService} from "../../../content.service";

@Component({
    selector: 'app-time-content',
    templateUrl: './time-content.component.html'
})
export class TimeContentComponent implements OnInit {

    @Input() time: TimeModel;
    @Input() color: string;
    @Input() h3: {
        'headline': string,
        'tooltip': string,
        'class': string,
    };

    timeModels: TimeModel[];

    constructor() {
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {

        if (typeof changes.time != 'undefined') {

            this.timeModels = [];
            this.timeModels.push(this.time);
        }
    }

}
