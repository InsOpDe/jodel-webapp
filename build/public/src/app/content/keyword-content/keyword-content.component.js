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
 * keyword content component
 * - content page for a keyword
 *
 * @author  Maya
 * @since   23.03.2018
 */
let KeywordContentComponent = class KeywordContentComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        // console.log(changes);
    }
};
__decorate([
    core_1.Input()
], KeywordContentComponent.prototype, "keywordContent", void 0);
KeywordContentComponent = __decorate([
    core_1.Component({
        selector: 'app-keyword-content',
        templateUrl: './keyword-content.component.html'
    })
], KeywordContentComponent);
exports.KeywordContentComponent = KeywordContentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvYXBwL2NvbnRlbnQva2V5d29yZC1jb250ZW50L2tleXdvcmQtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBdUQ7QUFHdkQ7Ozs7OztHQU1HO0FBS0gsSUFBYSx1QkFBdUIsR0FBcEM7SUFJSTtJQUNBLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFPO1FBQ2Ysd0JBQXdCO0lBQzVCLENBQUM7Q0FDSixDQUFBO0FBWFk7SUFBUixZQUFLLEVBQUU7K0RBQW9DO0FBRm5DLHVCQUF1QjtJQUpuQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixXQUFXLEVBQUUsa0NBQWtDO0tBQ2xELENBQUM7R0FDVyx1QkFBdUIsQ0FhbkM7QUFiWSwwREFBdUIifQ==