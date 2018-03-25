"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const of_1 = require("rxjs/observable/of");
const mock_results_1 = require("./content/mock-results");
const content_page_model_1 = require("./content/content-page.model");
const contenttype_1 = require("./global/contenttype");
/**
 * content service
 * (Bisher einzige geplante) Verbindung zum Server
 *
 * Verwaltet/Speichert globale Informationen, die von anderen Components
 * benoetigt werden (aktuelle color, page, ..)
 */
let ContentService = class ContentService {
    constructor() {
        this.contentpages = [new content_page_model_1.Contentpage()];
        this.color = 'green';
        this.currentContentpage = this.contentpages[0];
    }
    /**
     * get data from mock result to fake http request
     * TODO AJAX CALL
     *
     * @author  Maya
     * @since   23.03.2018
     */
    getResultData() {
        let result = mock_results_1.RESULT;
        this.createContentpages(result.keywordContent);
        return of_1.of(result);
    }
    /**
     * create all existing content pages (your result + all keyword pages)
     *
     * @author  Maya
     * @since   24.03.2018
     */
    createContentpages(keywordContent) {
        for (let i = 0; i < keywordContent.length; i++) {
            this.contentpages.push(new content_page_model_1.Contentpage({
                id: i + 1,
                type: contenttype_1.CONTENTTYPE.KEYWORD,
                title: keywordContent[i].title
            }));
        }
    }
};
ContentService = __decorate([
    core_1.Injectable()
], ContentService);
exports.ContentService = ContentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHVibGljL3NyYy9hcHAvY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQXlDO0FBRXpDLDJDQUFzQztBQUN0Qyx5REFBOEM7QUFFOUMscUVBQXlEO0FBQ3pELHNEQUFpRDtBQUVqRDs7Ozs7O0dBTUc7QUFFSCxJQUFhLGNBQWMsR0FBM0I7SUFNSTtRQUhBLGlCQUFZLEdBQWtCLENBQUMsSUFBSSxnQ0FBVyxFQUFFLENBQUMsQ0FBQztRQUk5QyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR0Q7Ozs7OztPQU1HO0lBQ0gsYUFBYTtRQUVULElBQUksTUFBTSxHQUFHLHFCQUFNLENBQUM7UUFFcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUvQyxNQUFNLENBQUMsT0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFHRDs7Ozs7T0FLRztJQUNILGtCQUFrQixDQUFDLGNBQWM7UUFFN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQ0FBVyxDQUFDO2dCQUNuQyxFQUFFLEVBQUUsQ0FBQyxHQUFDLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLHlCQUFXLENBQUMsT0FBTztnQkFDekIsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO2FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQztJQUNMLENBQUM7Q0FDSixDQUFBO0FBOUNZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtHQUNBLGNBQWMsQ0E4QzFCO0FBOUNZLHdDQUFjIn0=