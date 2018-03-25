import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../content.service";

@Component({
  selector: 'app-content-page-selection',
  templateUrl: './content-page-selection.component.html'
})
export class ContentPageSelectionComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ngOnInit() {
  }

}
