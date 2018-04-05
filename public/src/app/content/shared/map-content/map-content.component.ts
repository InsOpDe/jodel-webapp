import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from "../../../content.service";
import {CITIES} from "../../../global/cities";
import {MAP} from "./map";
import {MapModel} from "./map.model";


@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  // styleUrls: ['./map-content.component.css']
})
export class MapContentComponent implements OnInit {

  @Input() map: MapModel;
  mapArr: object = MAP;
  citiesCoords : object = {};

  constructor() {
  }

  ngOnInit() {
    for(let i in CITIES) {
      let city = CITIES[i];
      let x = city.coordinates.x;
      let y = city.coordinates.y;
      this.citiesCoords[y + "-" + x] = city;
    }
  }

}
