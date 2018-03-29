import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {TimeModel} from "../../time-content/time.model";
import {ContentService} from "../../../../content.service";
/**
 * time chart component
 *
 * @author  Maya
 * @since   28.03.2018
 */
@Component({
    selector: 'app-time-chart',
    templateUrl: './time-chart.component.html'
})
export class TimeChartComponent implements OnInit {

    hours = new Array(24);

    maxValue = new Array(12);

    convertedValues: TimeModel["value"];

    @Input() color: string;

    @Input() timeModel: TimeModel;


    constructor(private contentService: ContentService) {}


    /**
     * @author  Maya
     * @since   28.03.2018
     */
    ngOnInit() {
        this.color = this.color || this.contentService.color;
    }


    /**
     * @author  Maya
     * @since   28.03.2018
     */
    ngOnChanges(changes: SimpleChanges) {

        if (changes.timeModel) {
            this.updateConvertedValues();
        }
    }


    /**
     * @author  Maya
     * @since   28.03.2018
     */
    updateConvertedValues() {

        this.hours = new Array(this.timeModel.value.length);
        this.convertedValues = this.convertValuesForChart();
    }


    /**
     * round percentage number [0,100] to [0, maxValue]
     *
     * @author  Maya
     * @since   28.03.2018
     */
    convertValuesForChart() {

        let convertedValues = [];
        let factor = 100 / this.maxValue.length;

        for (let i = 0; i < this.hours.length; i++) {

            convertedValues[i] = this.maxValue.length - Math.round(this.timeModel.value[i] / factor);
        }

        return convertedValues;
    }

}
