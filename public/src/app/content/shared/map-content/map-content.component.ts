import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from "../../../content.service";
import {MapModel} from "./map.model";


@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html'
})
export class MapContentComponent implements OnInit {

  @Input() map: MapModel;

  constructor() { }

  ngOnInit() {
  }

}
