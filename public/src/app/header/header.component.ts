import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {ContentService, JRESULT} from "../content.service";
import {ContentModel} from "../content/content.model";
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
import {CITIES} from "../global/cities";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {COLORS} from "../global/colors";
import {HeaderModel} from "./header.model";
import {renderComponentOrTemplate} from "@angular/core/src/render3/instructions";

/**
 * header component
 *  - handles the current Contentpage of the contentService
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

    // @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

    jodel: HeaderModel;
    jodelIsWriteable: boolean = true;

    loading: boolean;

    resultData: JRESULT;
    contentData: ContentModel;

    public group;

    /**
     *
     * @param item
     * @constructor
     */
    Selected(item: SelectedAutocompleteItem) {
        let original = item.item.original;
        this.jodel.location = original.city;
        this.jodel.cityId = original.id;
    }

    constructor(public contentService: ContentService,
                public completer: NgAutocompleteComponent,
                private _ngZone: NgZone) {
        this.loading = false;
    }

    ngOnChanges () {
        this.loading = false;
    }

    disableRandomMode() {
        this.contentService.randomJodelId = -1;
    }

    ngOnInit() {

        // this.jodel = this.contentService.getRandomHeaderModel();
        this.jodel = new HeaderModel({
        // location: 'Ulm',
        // cityId: 61,
        time: '13:48',
        // text: randomjodel.message
      })

        let cityArr = [];
        for (let i in CITIES) {
            cityArr.push(CITIES[i]);
        }

        this.group = [
            CreateNewAutocompleteGroup(
                this.jodel.location || "Wähle deine Stadt ... ",
                // this.jodel.location,
                'completer',
                cityArr,
                {titleKey: 'city', childrenKey: null}
            )
        ];


        // this.completer.SetValues('completer', cityArr);
        // this.completer.SelectItem('completer', this.jodel.cityId);
        // console.log(this.completer);

        // debug
        // this.sendJodel();
    }


    /**
     * get random jodel from content service
     *
     * @author  Maya
     * @since   12.04.2018
     */
    getRandomJodel() {

        this.loading = true;

        this.contentService.getRandomJodel()
            .subscribe(response => {


                this.jodel = response;
                this.loading = false;
            })
    }


    /**
     * send jodel data to the service
     * - after the response, the data is forwarded to the content component
     *
     * @author  Maya
     * @since   24.03.2018
     */
    sendJodel() {
        this.loading = true;


        this.jodelIsWriteable = false;


        setTimeout(() => {
            this.contentService.getResultData(this.jodel)
                .subscribe(response => {

                    this.contentData = response;
                    this.loading = false;
                });
        }, 1000)
    }



    async sendJodel2 () {

        this.loading = true;


        this.jodelIsWriteable = false;

        this.contentData = await this.contentService.getResultData2(this.jodel)
        this.loading = false;
    }

    /**
     * back to landingpage, refresh data of the service,
     * keep jodel data ??
     *
     * @author  Maya
     * @since   24.03.2018
     */
    editJodel() {

        this.jodelIsWriteable = true;
        this.contentService.refresh();
    }
}
