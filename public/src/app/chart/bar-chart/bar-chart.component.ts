import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
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

    maxBarAmount = 45;

    bars = {
      'true': new Array(0),
      'false': new Array(0)
    };

    constructor() {
    }


    /**
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnInit() {
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
     * update bar chart values
     *
     * @author  Maya
     * @since   23.03.2018
     */
    updateBarValues() {
        this.bars = {
            'true': new Array(this.round(true) || 0),
            'false': new Array(this.round(false) || 0)
        };
    }


    /**
     * round percentage number [0,100] to [0, maxBarAmount]
     *
     * @author  Maya
     * @since   23.03.2018
     *
     * @param isTrue
     *
     * @returns {number}
     */
    round(isTrue) {
        let factor = 100 / this.maxBarAmount;

        return isTrue ?
            Math.round(this.value / factor) :
            this.maxBarAmount - Math.round(this.value / factor);
    }
}
