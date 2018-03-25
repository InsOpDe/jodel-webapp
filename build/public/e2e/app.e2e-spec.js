"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_po_1 = require("./app.po");
describe('iid-project App', () => {
    let page;
    beforeEach(() => {
        page = new app_po_1.AppPage();
    });
    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmUyZS1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHVibGljL2UyZS9hcHAuZTJlLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBbUM7QUFFbkMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixJQUFJLElBQWEsQ0FBQztJQUVsQixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxHQUFHLElBQUksZ0JBQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtRQUN4QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9