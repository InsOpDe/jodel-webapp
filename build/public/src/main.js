"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app/app.module");
const environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.log(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUErQztBQUMvQyxnRkFBMkU7QUFFM0UsaURBQTZDO0FBQzdDLDREQUF5RDtBQUV6RCxFQUFFLENBQUMsQ0FBQyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDM0IscUJBQWMsRUFBRSxDQUFDO0FBQ25CLENBQUM7QUFFRCxpREFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDO0tBQ2hELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyJ9