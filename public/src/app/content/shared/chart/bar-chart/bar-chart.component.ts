import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ContentService} from "../../../../content.service";
import {
    trigger,
    state,
    style,
    animate,
    transition, stagger, query, animateChild
} from '@angular/animations';
import {COLORS} from "../../../../global/colors";
/**
 * Bar Char Component
 *
 * @author  Maya
 * @since   23.03.2018
 */
@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    animations: [
        trigger('barChartState', [
            transition('void => set', [
                query(":enter", [
                    style({
                        backgroundColor: COLORS.lightGrey
                    }),
                    stagger(70, [
                        animate(1, style({
                            backgroundColor: '{{bar_color}}'
                        }))
                    ])
                ], {optional: true})
            ]),
        ])
    ]
})

export class BarChartComponent implements OnInit, OnChanges {

    @Input() value: number;
    @Input() title: string;
    @Input() color: string;
    @Input() maxValue: number;


    colors = COLORS;

    maxBarAmount = 37;
    maxBarAmountArray = new Array(this.maxBarAmount);

    valueRoundArray = [];
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
        this.maxValue = this.maxValue || 1000;
    }


    /**
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnChanges(changes: SimpleChanges) {
      console.log("this.maxValue", this.maxValue);

        this.maxValue = this.maxValue || 1000;

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
        this.valueRoundArray = new Array(this.valueRound);
        this.maxBarAmountArray = new Array(this.maxBarAmount - this.valueRound);
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

        let factor = this.maxValue / this.maxBarAmount;

        return Math.round(this.value / factor);
    }
}
