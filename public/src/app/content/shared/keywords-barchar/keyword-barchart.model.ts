/**
 * Model for Keyword Barchart
 *
 * @author Maya
 * @since  24.03.2018
 */
export class KeywordBarchartModel {

    keyword: string;
    value: number;
    color: string;
    maxValue: number;

    constructor (data) {
        this.keyword = data.keyword;
        this.value = data.value;
        this.color = data.color;
        this.maxValue = data.maxValue;
    }
}