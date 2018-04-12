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
    commentsMaxValue: number;
    votesMaxValue: number;
    pins: number;
    shared: number;

    constructor (data) {
        this.karma = data.karma;
        this.votes = data.votes;
        this.votesMaxValue = data.votesMaxValue;
        this.comments = data.comments;
        this.commentsMaxValue = data.commentsMaxValue;
        this.pins = data.pins;
        this.shared = data.shared;
    }
}
