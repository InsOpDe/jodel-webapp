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
 * Main Component
 *
 * @author  Maya
 * @since   22.03.2018
 */
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Jodel Projekt';
        this.barCharValue1 = 10;
    }
    onClick() {
        this.barCharValue1 += 5;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBMEM7QUFFMUM7Ozs7O0dBS0c7QUFNSCxJQUFhLFlBQVksR0FBekI7SUFNSTtRQUpBLFVBQUssR0FBVyxlQUFlLENBQUM7UUFFaEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7SUFHbkIsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQTtBQVpZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7S0FDcEMsQ0FBQztHQUVXLFlBQVksQ0FZeEI7QUFaWSxvQ0FBWSJ9