/**
 * Model for Result Object
 *
 * @author  Maya
 * @since   23.03.2018
 */
export class ResultModel {

    karma: number;
    votes: number;
    comments: number;
    pins: number;
    shared: number;

    constructor (data) {
        this.karma = data.karma;
        this.votes = data.votes;
        this.comments = data.comments;
        this.pins = data.pins;
        this.shared = data.shared;
    }
}
