import {Component, OnInit} from '@angular/core';
import {ContentService} from "../content.service";
import {Contentpage} from "../content/content-page.model";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    location = 'München';
    time = '22:06 Uhr';
    jodelText: String = 'Wasser löst irgendwie alle Probleme. ' +
        'Du willst abnehmen? Trink Wasser. \n' +
        'Du hast unreine Haut? Trink Wasser. \n' +
        'Dein Ex nervt? Ertränk ihn im Wasser.';

    constructor(public contentService: ContentService) { }

    ngOnInit() {
    }
}
