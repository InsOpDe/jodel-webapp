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
 * header component
 *  - handles the currentContentpage of the contentService
 *
 * @author  Maya
 * @since   24.03.2018
 */
let HeaderComponent = class HeaderComponent {
    constructor(contentService) {
        this.contentService = contentService;
        this.location = 'München';
        this.time = '22:06 Uhr';
        this.jodelText = 'Wasser löst irgendwie alle Probleme. ' +
            'Du willst abnehmen? Trink Wasser. \n' +
            'Du hast unreine Haut? Trink Wasser. \n' +
            'Dein Ex nervt? Ertränk ihn im Wasser.';
    }
    ngOnInit() {
    }
};
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './header.component.html'
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQWdEO0FBSWhEOzs7Ozs7R0FNRztBQUtILElBQWEsZUFBZSxHQUE1QjtJQVNJLFlBQW1CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVBqRCxhQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLFNBQUksR0FBRyxXQUFXLENBQUM7UUFDbkIsY0FBUyxHQUFXLHVDQUF1QztZQUN2RCxzQ0FBc0M7WUFDdEMsd0NBQXdDO1lBQ3hDLHVDQUF1QyxDQUFDO0lBRVMsQ0FBQztJQUV0RCxRQUFRO0lBQ1IsQ0FBQztDQUNKLENBQUE7QUFiWSxlQUFlO0lBSjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUseUJBQXlCO0tBQ3pDLENBQUM7R0FDVyxlQUFlLENBYTNCO0FBYlksMENBQWUifQ==