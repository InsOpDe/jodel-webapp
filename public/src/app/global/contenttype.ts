import {ContentTypeModel} from "../content/content-type.model";

export const CONTENTTYPE = {

    YOUR_RESULT: new ContentTypeModel({
        id: 1,
        title: 'Dein Ergebnis',
        multiplePages: false
    }),

    KEYWORD: new ContentTypeModel({
        id: 2,
        title: 'Schlagwörter',
        multiplePages: true
    })
};