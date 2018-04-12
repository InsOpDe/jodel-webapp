import {Component, OnInit, SimpleChanges} from '@angular/core';
import {ContentService} from "../../content.service";
import {CONTENTTYPE} from "../../global/contenttype";
import {ContentTypeModel} from "../../content/content-type.model";
import {Contentpage} from "../../content/content-page.model";
import {UtilService} from "../../util.service";

@Component({
    selector: 'app-content-page-selection',
    templateUrl: './content-page-selection.component.html',
})
export class ContentPageSelectionComponent implements OnInit {

    CONTENTTYPE = CONTENTTYPE;

    contenttypes = Object.keys(CONTENTTYPE);

    currentContentpageType: ContentTypeModel;

    currentContentpages: Contentpage[] = [];

    constructor(private contentService: ContentService, private utilService: UtilService) {
    }

    ngOnInit() {

        this.currentContentpageType =
            this.contentService.currentContentpage.type;

      //TODO: WIEDER LÖSCHEN!!!!))!"!"!""
      this.handleContenttypeChange();
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

    nextContentpage(next) {
        let current = this.contentService.currentContentpage;
        let all = this.currentContentpages;
        let index = all.indexOf(current);
        index = this.utilService.mod(index + (next ? 1 : -1), all.length);
        this.contentService.currentContentpage = all[index];
    }

}
