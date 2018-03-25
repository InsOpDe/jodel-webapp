"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
 * keyword barchart component
 * - generates barchart components for all keywords
 *
 * @author  Maya
 * @since   24.03.2018
 */
let KeywordBarchartContentComponent = class KeywordBarchartContentComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
__decorate([
    core_1.Input()
], KeywordBarchartContentComponent.prototype, "keywordBarchartArray", void 0);
__decorate([
    core_1.Input()
], KeywordBarchartContentComponent.prototype, "headline", void 0);
KeywordBarchartContentComponent = __decorate([
    core_1.Component({
        selector: 'app-keyword-barchar-content',
        templateUrl: './keyword-barchart-content.component.html'
    })
], KeywordBarchartContentComponent);
exports.KeywordBarchartContentComponent = KeywordBarchartContentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZC1iYXJjaGFydC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvYXBwL2NvbnRlbnQvc2hhcmVkL2tleXdvcmRzLWJhcmNoYXIva2V5d29yZC1iYXJjaGFydC1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUF1RDtBQUd2RDs7Ozs7O0dBTUc7QUFLSCxJQUFhLCtCQUErQixHQUE1QztJQUtJO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0NBRUosQ0FBQTtBQVRZO0lBQVIsWUFBSyxFQUFFOzZFQUE4QztBQUM3QztJQUFSLFlBQUssRUFBRTtpRUFBa0I7QUFIakIsK0JBQStCO0lBSjNDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLFdBQVcsRUFBRSwyQ0FBMkM7S0FDM0QsQ0FBQztHQUNXLCtCQUErQixDQVczQztBQVhZLDBFQUErQiJ9