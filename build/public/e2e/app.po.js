"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AppPage {
    navigateTo() {
        return protractor_1.browser.get('/');
    }
    getParagraphText() {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    }
}
exports.AppPage = AppPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHVibGljL2UyZS9hcHAucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0Q7QUFFbEQ7SUFDRSxVQUFVO1FBQ1IsTUFBTSxDQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEQsQ0FBQztDQUNGO0FBUkQsMEJBUUMifQ==