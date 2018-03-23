import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  color: string;
  location = 'München';
  time = '22:06 Uhr';

  jodelText: String = 'Wasser löst irgendwie alle Probleme. ' +
      'Du willst abnehmen? Trink Wasser. \n' +
      'Du hast unreine Haut? Trink Wasser. \n' +
      'Dein Ex nervt? Ertränk ihn im Wasser.';

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.color = this.contentService.color;
  }

}
