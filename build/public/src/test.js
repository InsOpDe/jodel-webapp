"use strict";
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-testing");
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/platform-browser-dynamic/testing");
// First, initialize the Angular testing environment.
testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9zcmMvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUdBQWlHOztBQUVqRyxxQ0FBbUM7QUFDbkMsbURBQW1EO0FBQ25ELHVFQUdtRDtBQUluRCxxREFBcUQ7QUFDckQsb0JBQVUsRUFBRSxDQUFDLG1CQUFtQixDQUM5QixxQ0FBMkIsRUFDM0IsdUNBQTZCLEVBQUUsQ0FDaEMsQ0FBQztBQUNGLDhCQUE4QjtBQUM5QixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDM0Qsd0JBQXdCO0FBQ3hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMifQ==