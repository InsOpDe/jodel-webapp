import {Component, Input, OnInit} from '@angular/core';
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

  constructor() {
  }

  ngOnInit() {

    let mapCitiesDummyObj = {};
    for(let i in MapCitiesDummy){
      mapCitiesDummyObj[MapCitiesDummy[i].loc_name] = MapCitiesDummy[i];
      console.log(MapCitiesDummy[i].loc_name);
      // console.log(MapCitiesDummy[i]);
      // console.log(i);
    }

    console.log("############");

    for(let i in CITIES) {
      let city = CITIES[i];
      let x = city.coordinates.x;
      let y = city.coordinates.y;
      console.log(i);

      if(MapCitiesDummy[i]) {
        city.votes = MapCitiesDummy[i].votes;
        // console.log(i);

      } else {
        // console.log(i);
      }
      this.citiesCoords[y + "-" + x] = city;
    }
  }

}
