import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../content.service";
import {YourResultModel} from "./your-result.model";

@Component({
    selector: 'app-your-result-content',
    templateUrl: './your-result-content.component.html',
    styleUrls: ['./your-result-content.component.less']
})
export class YourResultContentComponent implements OnInit {

    content: YourResultModel;

    constructor(private contentService: ContentService) {
    }


    /**
     * get data from service
     *
     * @author  Maya
     * @since   23.03.2018
     */
    getData(): void {
        this.contentService.getResultData()
            .subscribe(response => {

                this.content = response;
            });
    }


    /**
     * on init
     *
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnInit() {
        this.getData();
    }

}
