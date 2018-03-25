import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from '../content.service';
import {CONTENTTYPE} from "../global/contenttype";
import {Contentpage} from "./content-page.model";
import {ContentModel} from "./content.model";
/**
 * content component
 *  -  receives data from the header and forwards
 *  it to the content components
 *
 * @author  Maya
 * @since   23.03.2018
 */
@Component({
    selector: 'app-content',
    templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {

    CONTENTTYPE = CONTENTTYPE;

    @Input() data: ContentModel;

    constructor(private contentService: ContentService) { }

    /**
     * on init
     *
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnInit() {

    }
}
