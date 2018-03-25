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
 * Bar Char Component
 *
 * @author  Maya
 * @since   23.03.2018
 */
let BarChartComponent = class BarChartComponent {
    constructor(contentService) {
        this.contentService = contentService;
        this.maxBarAmount = 45;
        this.maxBarAmountArray = new Array(this.maxBarAmount);
    }
    /**
     * default color is the color of the selected jodel from contentService
     *
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnInit() {
        this.color = this.color || this.contentService.color;
    }
    /**
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnChanges(changes) {
        if (typeof changes.value != 'undefined') {
            this.updateBarValues();
        }
    }
    /**
     * update rounded value
     *
     * @author  Maya
     * @since   23.03.2018
     */
    updateBarValues() {
        this.valueRound = this.round();
    }
    /**
     * round percentage number [0,100] to [0, maxBarAmount]
     *
     * @author  Maya
     * @since   23.03.2018
     *
     * @returns {number}
     */
    round() {
        let factor = 100 / this.maxBarAmount;
        return Math.round(this.value / factor);
    }
};
__decorate([
    core_1.Input()
], BarChartComponent.prototype, "value", void 0);
__decorate([
    core_1.Input()
], BarChartComponent.prototype, "title", void 0);
__decorate([
    core_1.Input()
], BarChartComponent.prototype, "color", void 0);
BarChartComponent = __decorate([
    core_1.Component({
        selector: 'app-bar-chart',
        templateUrl: './bar-chart.component.html'
    })
], BarChartComponent);
exports.BarChartComponent = BarChartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvYXBwL2NvbnRlbnQvc2hhcmVkL2NoYXJ0L2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQXNFO0FBRXRFOzs7OztHQUtHO0FBTUgsSUFBYSxpQkFBaUIsR0FBOUI7SUFVSSxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKbEQsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBR0ssQ0FBQztJQUd2RDs7Ozs7T0FLRztJQUNILFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDekQsQ0FBQztJQUdEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxPQUFzQjtRQUU5QixFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7SUFHRDs7Ozs7T0FLRztJQUNILGVBQWU7UUFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBR0Q7Ozs7Ozs7T0FPRztJQUNILEtBQUs7UUFDRCxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDSixDQUFBO0FBMURZO0lBQVIsWUFBSyxFQUFFO2dEQUFlO0FBQ2Q7SUFBUixZQUFLLEVBQUU7Z0RBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTtnREFBZTtBQUpkLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDRCQUE0QjtLQUM1QyxDQUFDO0dBRVcsaUJBQWlCLENBNEQ3QjtBQTVEWSw4Q0FBaUIifQ==