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
  city: string = "";
  votes: string = "";
  inhabitants: string = "";
  color: string;
  maxvote: number = 0;
  maxsteps: number =  9;
  voteindex: object = [];

  //hm-color-0 bis  9


  constructor(private contentService:ContentService) {
    this.color = contentService.color;
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
        this.maxvote = Math.max(this.maxvote, city.votes)
      }
      this.citiesCoords[y + "-" + x] = city;
    }

    let maxLogValue = Math.log(this.maxvote - 10);
    let step = maxLogValue / this.maxsteps;

    for(let i = 0; i <= this.maxsteps; i++) {
      this.voteindex[i] = Math.pow(Math.E, step * i)
    }
    console.log(this.voteindex)

  }


  calcClass (value) {
    let elClass = "hm-" + this.color + "-";
    let maxindex = 0;
    for(let i in this.voteindex) {
      if(value >= this.voteindex[i]) {
        maxindex = Number(i);
      } else {
        break;
      }
    }
    return elClass + maxindex;
  }

}
