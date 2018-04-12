import {RelatedJodelModel} from "./related-jodel.model";

export const relatedJodel: RelatedJodelModel = {

    text: 'Wasser löst irgendwie alle Probleme. ' +
    'Du willst abnehmen? Trink Wasser. <br>' +
    'Du hast unreine Haut? Trink Wasser. ' +
    'Dein Ex nervt? Ertränk ihn im Wasser.<br><br>' +
    '#darferdas',

    time: '14:06',

    location: 'Hamburg',

    color: 'red',

    barchartArray: [{
        value: 13,
        color: 'red',
        keyword: 'Kommentare',
        maxValue: 100
    }, {
        value: 98,
        color: 'red',
        keyword: 'Votes',
        maxValue: 100
    }]
};