import {Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';
/**
 * content component
 *
 * @author  Maya
 * @since   23.03.2018
 */
@Component({
    selector: 'app-content',
    templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {

    data = {
        'result': {}
    };

    constructor(private contentService: ContentService) {
    }


    /**
     * get data from service
     *
     * @author  Maya
     * @since   23.03.2018
     */
    getData(): void {
        ContentService.getResultData()
            .subscribe(result => {
                this.data.result = result;
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
