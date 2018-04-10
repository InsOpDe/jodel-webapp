import {Component, Input, OnInit, NgStyle} from '@angular/core';
import {ContentService} from "../../../content.service";
import {CITIES} from "../../../global/cities";
import {MAP} from "./map";
import {MapModel} from "./map.model";
import {MapCitiesDummy} from "./map_cities_dummy";


@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  // styleUrls: ['./map-content.component.css']
})
export class MapContentComponent implements OnInit {

  @Input() map: MapModel;
  mapArr: object = MAP;
  citiesCoords : object = {};
  city: string = "";
  votes: string = "";
  inhabitants: string = "";

  threshHigh: number = 500;
  threshMid: number = 50;
  threshLow: number = 0;

  constructor() {
  }

  updateInfoBox (e) {
    let id = e.target.id;
    let city = this.citiesCoords[id];
    if(city) {
      this.city = city.city;
      this.votes = city.votes;
      this.inhabitants = city.inhabitants;
    }
  }

  ngOnInit() {

    let mapCitiesDummyObj = {};
    for(let i in MapCitiesDummy){
      mapCitiesDummyObj[MapCitiesDummy[i].loc_name] = MapCitiesDummy[i];
    }


    for(let i in CITIES) {
      let city = CITIES[i];
      let x = city.coordinates.x;
      let y = city.coordinates.y;

      if(MapCitiesDummy[i]) {
        city.votes = MapCitiesDummy[i].votes;

      }
      this.citiesCoords[y + "-" + x] = city;
    }
  }

}
