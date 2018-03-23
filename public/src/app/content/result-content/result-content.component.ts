import {Component, Input, OnInit} from '@angular/core';
import {ResultModel} from './result.model';

@Component({
    selector: 'app-result-content',
    templateUrl: './result-content.component.html'
})

export class ResultContentComponent implements OnInit {

    @Input() resultData;

    result: ResultModel;

    constructor() {

    }

    ngOnInit() {
        this.result = new ResultModel(this.resultData);
    }
}
