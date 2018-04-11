import {Component, OnInit} from '@angular/core';
import {ContentService} from "../content.service";
import {ContentModel} from "../content/content.model";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {COLORS} from "../global/colors";

/**
 * header component
 *  - handles the currentContentpage of the contentService
 *  and sends the entered data to the contentService
 *
 * @author  Maya
 * @since   24.03.2018
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    jodel: {
        location: string,
        time: string,
        text: string;
    };

    contentData: ContentModel;

    constructor(public contentService: ContentService) { }

    ngOnInit() {

        this.jodel = {
            location: 'München',
            time: '22:06',
            text: 'Wasser löst irgendwie alle Probleme. ' +
            'Du willst abnehmen? Trink Wasser. \n' +
            'Du hast unreine Haut? Trink Wasser. ' +
            'Dein Ex nervt? Ertränk ihn im Wasser.\n\n' +
            '#darferdas'
        };


        // debug
        // this.sendJodel();
    }

    /**
     * send jodel data to the service
     * - after the response, the data is forwarded to the content component
     *
     * @author  Maya
     * @since   24.03.2018
     */
    sendJodel() {

        this.contentService.getResultData(this.jodel)
            .subscribe(response => {

                this.contentData = response;
        });
    }


    /**
     * back to landingpage, refresh data of the service,
     * keep jodel data ??
     *
     * @author  Maya
     * @since   24.03.2018
     */
    editJodel() {
        this.contentService.refresh();
    }
}
