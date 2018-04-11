import {Component, OnInit, ViewChild} from '@angular/core';
import {ContentService} from "../content.service";
import {ContentModel} from "../content/content.model";
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";
import {CITIES} from "../global/cities";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {COLORS} from "../global/colors";
import {HeaderModel} from "./header.model";

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
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

  jodel:HeaderModel;
  jodelIsWriteable:boolean = true;

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

  contentData: ContentModel;

  constructor(public contentService: ContentService) {
  }

  ngOnInit() {

    this.jodel = new HeaderModel({
      location: 'München',
      cityId: 3,
      time: '22:06',
      text: 'Wasser löst irgendwie alle Probleme. ' +
      'Du willst abnehmen? Trink Wasser. \n' +
      'Du hast unreine Haut? Trink Wasser. ' +
      'Dein Ex nervt? Ertränk ihn im Wasser.\n\n' +
      '#darferdas'
    });
    let cityArr = [];
    for(let i in CITIES){
      cityArr.push(CITIES[i]);
    }

    let cityGroup = CreateNewAutocompleteGroup(
      "Deine Stadt",
      // this.jodel.location,
      'completer',
      cityArr,
      {titleKey: 'city', childrenKey: null}
    );
    this.group = [
      cityGroup
    ]



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

    this.jodelIsWriteable = false;

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

    this.jodelIsWriteable = true;
    this.contentService.refresh();
  }
}
