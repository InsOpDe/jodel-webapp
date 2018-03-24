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

    constructor (data) {
        this.keyword = data.keyword;
        this.value = data.value;
        this.color = data.color;
    }
}