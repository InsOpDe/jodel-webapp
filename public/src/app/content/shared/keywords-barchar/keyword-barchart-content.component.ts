import {Component, Input, OnInit} from '@angular/core';
import {KeywordBarchartModel} from "./keyword-barchart.model";

@Component({
  selector: 'app-keyword-barchar-content',
  templateUrl: './keyword-barchart-content.component.html'
})
export class KeywordBarchartContentComponent implements OnInit {

  @Input() keywordBarchartArray: KeywordBarchartModel[];

  constructor() { }

  ngOnInit() {
  }

}
