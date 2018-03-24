import {Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';
import {CONTENTTYPE} from "../global/contenttype";
/**
 * content component
 * Verwaltet welche Content seite angezeigt werden soll
 *
 * @author  Maya
 * @since   23.03.2018
 */
@Component({
    selector: 'app-content',
    templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {

    currentContenttype: number;
    CONTENTTYPE = CONTENTTYPE;

    constructor(private contentService: ContentService) { }

    /**
     * on init
     *
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnInit() {
        this.currentContenttype = this.contentService.currentContenttype;
    }

}
