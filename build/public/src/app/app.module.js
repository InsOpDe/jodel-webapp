"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const app_component_1 = require("./app.component");
const bar_chart_component_1 = require("./content/shared/chart/bar-chart/bar-chart.component");
const header_component_1 = require("./header/header.component");
const forms_1 = require("@angular/forms");
const content_component_1 = require("./content/content.component");
const result_content_component_1 = require("./content/your-result-content/result-content/result-content.component");
const content_service_1 = require("./content.service");
const map_content_component_1 = require("./content/shared/map-content/map-content.component");
const your_result_content_component_1 = require("./content/your-result-content/your-result-content.component");
const keyword_barchart_content_component_1 = require("./content/shared/keywords-barchar/keyword-barchart-content.component");
const time_content_component_1 = require("./content/shared/time-content/time-content.component");
const keyword_content_component_1 = require("./content/keyword-content/keyword-content.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            bar_chart_component_1.BarChartComponent,
            header_component_1.HeaderComponent,
            content_component_1.ContentComponent,
            result_content_component_1.ResultContentComponent,
            map_content_component_1.MapContentComponent,
            your_result_content_component_1.YourResultContentComponent,
            keyword_barchart_content_component_1.KeywordBarchartContentComponent,
            time_content_component_1.TimeContentComponent,
            keyword_content_component_1.KeywordContentComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        providers: [
            content_service_1.ContentService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxnRUFBMEQ7QUFDMUQsd0NBQXlDO0FBR3pDLG1EQUErQztBQUMvQyw4RkFBeUY7QUFDekYsZ0VBQTREO0FBQzVELDBDQUEyQztBQUMzQyxtRUFBK0Q7QUFDL0Qsb0hBQStHO0FBQy9HLHVEQUFpRDtBQUNqRCw4RkFBeUY7QUFDekYsK0dBQXlHO0FBQ3pHLDZIQUF1SDtBQUN2SCxpR0FBNEY7QUFDNUYsbUdBQThGO0FBeUI5RixJQUFhLFNBQVMsR0FBdEI7Q0FBMEIsQ0FBQTtBQUFiLFNBQVM7SUF0QnJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osdUNBQWlCO1lBQ2pCLGtDQUFlO1lBQ2Ysb0NBQWdCO1lBQ2hCLGlEQUFzQjtZQUN0QiwyQ0FBbUI7WUFDbkIsMERBQTBCO1lBQzFCLG9FQUErQjtZQUMvQiw2Q0FBb0I7WUFDcEIsbURBQXVCO1NBQ3hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsZ0NBQWE7WUFDYixtQkFBVztTQUNkO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsZ0NBQWM7U0FDakI7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyJ9