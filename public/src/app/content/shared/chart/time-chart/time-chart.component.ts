import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {TimeModel} from "../../time-content/time.model";
import {ContentService} from "../../../../content.service";
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";
import {COLORS} from "../../../../global/colors";
/**
 * time chart component
 *
 * @author  Maya
 * @since   28.03.2018
 */
@Component({
    selector: 'app-time-chart',
    templateUrl: './time-chart.component.html',
    animations: [

        trigger('timeChartState', [
            state("a", style({})),
            state("b", style({})),
            transition("* => *", [
                query(":enter .animation", [
                    style({
                        backgroundColor: COLORS.lightGrey,
                        width: '8px',
                        height: '8px',
                        marginTop: '4px'
                    }),
                    stagger(8, [
                        animate(1)
                    ]),
                ], {optional: true})
            ]),
        ])
    ]
})
export class TimeChartComponent implements OnInit {

    hours = new Array(24);
    maxValue = new Array(15);
    maxValueArray = [];

    infoText: string;

    convertedValues: TimeModel["value"];
    convertedValuesArrays = [];

    colors = COLORS;

    @Input() color: string;

    @Input() timeModel: TimeModel;

    triggerValue = 'a';
    currentHour: number;

    constructor(private contentService: ContentService) {}


    /**
     * @author  Maya
     * @since   28.03.2018
     */
    ngOnInit() {
        this.color = this.color || this.contentService.color;
        this.currentHour = Number(this.contentService.jodelData.time.split(':')[0]) || 12;
        this.triggerValue = this.triggerValue == 'a' ? 'b' : 'a';
    }


    /**
     * @author  Maya
     * @since   28.03.2018
     */
    ngOnChanges(changes: SimpleChanges) {

        if (changes.timeModel) {
            this.updateConvertedValues();
            this.currentHour = Number(this.contentService.jodelData.time.split(':')[0]) || 12;
            this.triggerValue = this.triggerValue == 'a' ? 'b' : 'a';
            this.updateInfoBox(this.currentHour);
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


    updateInfoBox(hour) {

        this.infoText = hour + ' - ' + (hour+1) + ' Uhr (' + this.timeModel.value[hour] + ' Votes)';
    }


    /**
     * calc and return logarithmic vote index
     *
     * @author  Maya
     * @since   28.03.2018
     */
    calcLogVoteIndex() {

        let max = Math.max(...this.timeModel.value);
        let maxLogValue = Math.log(max - 10);
        let step = maxLogValue / this.maxValue.length;
        let voteIndex = [];

        for (let i = 0; i < this.maxValue.length; i++) {
            voteIndex[i] = Math.pow(Math.E, step * i);
        }

        return voteIndex;
    }


    /**
     * round percentage number [0,100] to [0, maxValue]
     *
     * @author  Maya
     * @since   28.03.2018
     */
    convertValuesForChart() {

        let convertedValues = [];
        let voteIndex = this.calcLogVoteIndex();

        for (let hour = 0; hour <= this.hours.length; hour++) {

            let convertedValue = 0;

            for (let i in voteIndex) {
                if (this.timeModel.value[hour] >= voteIndex[i]) {
                    convertedValue = Number(i)+1;
                }
            }

            convertedValues[hour] = convertedValue;
            this.convertedValuesArrays[hour] = new Array(this.maxValue.length - convertedValues[hour]);
            this.maxValueArray[hour] = new Array(convertedValues[hour]);
        }

        return convertedValues;
    }

}
