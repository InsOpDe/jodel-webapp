import {CONTENTTYPE} from "../global/contenttype";

/**
 * content page model
 *
 * @author  Maya
 * @since   23.03.2018
 */
export class Contentpage {

    id: number;
    type: number;
    title: string;

    constructor(data = Contentpage.getStartPage()) {

        this.id = data.id;
        this.type = data.type;
        this.title = data.title;
    }

    static getStartPage() {
        return {
            id: 0,
            type: CONTENTTYPE.YOUR_RESULT,
            title: 'Dein Ergebnis'
        }
    }
}