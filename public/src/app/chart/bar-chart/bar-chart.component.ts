import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ContentService} from "../../content.service";
/**
 * Bar Char Component
 *
 * @author  Maya
 * @since   23.03.2018
 */
@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html'
})

export class BarChartComponent implements OnInit {

    @Input() value: number;
    @Input() title: string;
    @Input() color: string;

    maxBarAmount = 45;
    maxBarAmountArray = new Array(this.maxBarAmount);
    valueRound: number;

    constructor(private contentService: ContentService) { }


    /**
     * default color is the color of the selected jodel from contentService
     *
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnInit() {
        this.color = this.color || this.contentService.color;
    }


    /**
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnChanges(changes: SimpleChanges) {

        if (typeof changes.value != 'undefined') {
            this.updateBarValues();
        }
    }


    /**
     * update rounded value
     *
     * @author  Maya
     * @since   23.03.2018
     */
    updateBarValues() {
        this.valueRound = this.round();
    }


    /**
     * round percentage number [0,100] to [0, maxBarAmount]
     *
     * @author  Maya
     * @since   23.03.2018
     *
     * @returns {number}
     */
    round() {
        let factor = 100 / this.maxBarAmount;

        return Math.round(this.value / factor);
    }
}
