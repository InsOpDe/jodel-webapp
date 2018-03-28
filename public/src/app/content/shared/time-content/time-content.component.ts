import {Component, Input, OnInit} from '@angular/core';
import {TimeModel} from "./time.model";

@Component({
  selector: 'app-time-content',
  templateUrl: './time-content.component.html'
})
export class TimeContentComponent implements OnInit {

  @Input() time: TimeModel;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
