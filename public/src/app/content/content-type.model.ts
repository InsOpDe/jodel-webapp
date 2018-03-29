export class ContentTypeModel {

    id: number;
    title: string;
    multiplePages: Boolean;

    constructor (data) {

        this.id = data.id;
        this.title = data.title;
        this.multiplePages = data.multiplePages;
    }
}