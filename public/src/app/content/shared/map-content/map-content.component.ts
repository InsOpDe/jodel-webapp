import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ContentService} from "../../../content.service";
import {CITIES} from "../../../global/cities";
import {MAP} from "./map";
import {MapModel} from "./map.model";
import {MapCitiesDummy} from "./map_cities_dummy";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {COLORS} from "../../../global/colors";


@Component({
    selector: 'app-map-content',
    templateUrl: './map-content.component.html',
    animations: [
        trigger('mapState', [
            transition('* => *', [
                query(".test", [
                    style({
                        backgroundColor: COLORS.lightGrey
                    }),
                    stagger(120, animate('50ms ease-in', style({
                        // opacity: 1
                    })))
                ], {optional: true})
            ]),
        ])
    ]
    // styleUrls: ['./map-content.component.css']
})
export class MapContentComponent implements OnInit {

    @Input() map: MapModel;
    mapArr: object = MAP;
    citiesCoords: object = {};
    city: string = "";
    votes: string = "";
    inhabitants: string = "";
    color: string;
    maxvote: number = 0;
    maxsteps: number = 3;
    voteindex: object = [];
    classesMap: object = {};
    triggerValue = 'a';

    //hm-color-0 bis  9


    constructor(private contentService: ContentService) {
        this.color = contentService.color;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.map) {
            this.triggerValue = this.triggerValue == 'a' ? 'b' : 'a';
        }
    }

    updateInfoBox(e) {
        let id = e.target.id;
        let city = this.citiesCoords[id];
        if (city) {
            this.city = city.city;
            this.votes = city.votes;
            this.inhabitants = city.inhabitants;
        }
    }

    ngOnInit() {

        // map cities
        let mapCitiesDummyObj = {};
        for (let i in MapCitiesDummy) {
            mapCitiesDummyObj[MapCitiesDummy[i].id_cities] = MapCitiesDummy[i];
        }

        for (let i in CITIES) {
            let city = CITIES[i];
            let x = city.coordinates.x;
            let y = city.coordinates.y;
            let id = i;

            if (MapCitiesDummy[id]) {
                city.votes = MapCitiesDummy[id].votes;
                this.maxvote = Math.max(this.maxvote, city.votes)
            } else {
                city.votes = 0;
            }

            let cityAlreadyThere = this.citiesCoords[y + "-" + x];
            if (cityAlreadyThere) {
                if (cityAlreadyThere.votes < this.citiesCoords[y + "-" + x].votes) {
                    this.citiesCoords[y + "-" + x] = city;
                    this.citiesCoords[y + "-" + x].votes += cityAlreadyThere.votes;
                } else {
                    this.citiesCoords[y + "-" + x].votes += city.votes;
                }
            } else {
                this.citiesCoords[y + "-" + x] = city;
                // console.log(this.citiesCoords[y + "-" + x].city);
            }
        }

        // calculate steps for heatmap
        let maxLogValue = Math.log(this.maxvote - 10);
        let step = maxLogValue / this.maxsteps;

        for (let i = 0; i <= this.maxsteps; i++) {
            this.voteindex[i] = Math.pow(Math.E, step * i)
        }


        // calculate heatmap
        for (let y = 0; y < this.map.squaresY; y++) {
            for (let x = 0; x < this.map.squaresX; x++) {
                this.classesMap[y + "-" + x] = this.calcClass(x, y)
            }
        }

    }


    calcClass(x, y) {
        let elClass = "hm-" + this.color + "-";
        let maxindex = 0;
        let city = this.citiesCoords[y + '-' + x] || {votes: 0}

        // if(!city) return elClass + maxindex
        let value = city.votes;

        value += this.getNeighbourVotes(x, y);
        for (let i in this.voteindex) {
            if (value >= this.voteindex[i]) {
                maxindex = Number(i);
            } else {
                break;
            }
        }
        if (maxindex == 0) {
            return "square-fill"
        }

        return elClass + maxindex * 3 + ' test';
    }


    getNeighbourVotes(x, y) {
        let d_xy = [
            [-1, -1], [0, -1], [1, -1],
            [-1, 0], [1, 0],
            [-1, 1], [0, 1], [1, 1],
        ];

        let innerVotes = this.calcVotes(d_xy, x, y) / 4;
        // return innerVotes;

        let d_xy2 = [
            [-2, -2], [-1, -2], [0, -2], [1, -2], [2, -2],
            [-2, -1], [2, -1],
            [-2, 0], [2, 0],
            [-2, 1], [2, 1],
            [-2, 2], [-1, 2], [0, 2], [1, 2], [2, 2],
        ];

        let outerVotes = this.calcVotes(d_xy2, x, y) / 25;


        // console.log( innerVotes, outerVotes)

        return innerVotes + outerVotes;

    }

    calcVotes(d, x, y) {

        let votes = 0;
        for (let i in d) {
            let dx = x - d[i][0];
            let dy = y - d[i][1];

            let city = this.citiesCoords[dy + "-" + dx];
            if (city) {
                votes += city.votes;
            }
        }
        return votes / d.length;
    }

}
