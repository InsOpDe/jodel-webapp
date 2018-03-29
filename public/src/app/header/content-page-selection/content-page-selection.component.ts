import {Component, OnInit, SimpleChanges} from '@angular/core';
import {ContentService} from "../../content.service";
import {CONTENTTYPE} from "../../global/contenttype";
import {ContentTypeModel} from "../../content/content-type.model";
import {Contentpage} from "../../content/content-page.model";

@Component({
    selector: 'app-content-page-selection',
    templateUrl: './content-page-selection.component.html'
})
export class ContentPageSelectionComponent implements OnInit {

    CONTENTTYPE = CONTENTTYPE;

    contenttypes = Object.keys(CONTENTTYPE);

    currentContentpageType: ContentTypeModel;

    currentContentpages: Contentpage[] = [];

    constructor(private contentService: ContentService) {
    }

    ngOnInit() {

        this.currentContentpageType =
            this.contentService.currentContentpage.type;
    }


    handleContenttypeChange() {

        this.contentService.changeContentpageType(this.currentContentpageType);

        this.currentContentpages = [];

        for (let i = 0; i < this.contentService.contentpages.length; i++) {

            if (this.contentService.contentpages[i].type.id == this.currentContentpageType.id) {

                this.currentContentpages.push(this.contentService.contentpages[i]);
            }
        }
    }

}
