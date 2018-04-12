import {KeywordBarchartModel} from "../../shared/keywords-barchar/keyword-barchart.model";

export class RelatedJodelModel {

    location: string;
    time: string;
    text: string;
    color: string;
    barchartArray: KeywordBarchartModel[];

    constructor (data){
        this.location = data.location;
        this.time = data.time;
        this.text = data.text;
        this.barchartArray = data.barchartArray;
        this.color = data.color;
    }
}