import {Component, OnInit} from '@angular/core';
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
                public completer: NgAutocompleteComponent) {
    }

    ngOnInit() {

        this.jodel = new HeaderModel({
            location: 'München',
            cityId: 3,
            time: '22:06',
            text: 'Wasser löst irgendwie alle Probleme. ' +
            'Du willst abnehmen? Trink Wasser. ' +
            'Du hast unreine Haut? Trink Wasser. ' +
            'Dein Ex nervt? Ertränk ihn im Wasser.\n\n' +
            '#darferdas'
        });

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

        this.contentService.getRandomJodel()
            .subscribe(response => {

                this.jodel = response;
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

        this.jodelIsWriteable = false;

        this.contentService.getResultData(this.jodel)
            .subscribe(response => {

                this.contentData = response;
            });
    }



    async sendJodel2 () {

      this.contentData = await this.contentService.getResultData2(this.jodel)
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
