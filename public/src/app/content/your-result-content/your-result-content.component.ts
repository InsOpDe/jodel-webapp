import {Component, Input, OnInit} from '@angular/core';
import {YourResultModel} from "./your-result.model";

@Component({
    selector: 'app-your-result-content',
    templateUrl: './your-result-content.component.html',
    styleUrls: ['./your-result-content.component.less']
})
export class YourResultContentComponent implements OnInit {

    @Input() yourResultContent: YourResultModel;

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
