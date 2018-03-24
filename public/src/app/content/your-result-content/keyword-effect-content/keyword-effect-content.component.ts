import {Component, Input, OnInit} from '@angular/core';
import {KeywordEffectModel} from "./keyword-effect.model";

@Component({
  selector: 'app-keyword-effect-content',
  templateUrl: './keyword-effect-content.component.html',
  styleUrls: ['./keyword-effect-content.component.less']
})
export class KeywordEffectContentComponent implements OnInit {

  @Input() keywordEffectArray: KeywordEffectModel[];

  constructor() { }

  ngOnInit() {
  }

}
