"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contenttype_1 = require("../global/contenttype");
/**
 * content page model
 *
 * @author  Maya
 * @since   23.03.2018
 */
class Contentpage {
    constructor(data = Contentpage.getStartPage()) {
        this.id = data.id;
        this.type = data.type;
        this.title = data.title;
    }
    static getStartPage() {
        return {
            id: 0,
            type: contenttype_1.CONTENTTYPE.YOUR_RESULT,
            title: 'Dein Ergebnis'
        };
    }
}
exports.Contentpage = Contentpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHVibGljL3NyYy9hcHAvY29udGVudC9jb250ZW50LXBhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBa0Q7QUFFbEQ7Ozs7O0dBS0c7QUFDSDtJQU1JLFlBQVksSUFBSSxHQUFHLFdBQVcsQ0FBQyxZQUFZLEVBQUU7UUFFekMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZO1FBQ2YsTUFBTSxDQUFDO1lBQ0gsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUseUJBQVcsQ0FBQyxXQUFXO1lBQzdCLEtBQUssRUFBRSxlQUFlO1NBQ3pCLENBQUE7SUFDTCxDQUFDO0NBQ0o7QUFwQkQsa0NBb0JDIn0=