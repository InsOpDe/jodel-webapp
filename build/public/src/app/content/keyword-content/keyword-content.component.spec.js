"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const keyword_content_component_1 = require("./keyword-content.component");
describe('KeywordContentComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [keyword_content_component_1.KeywordContentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(keyword_content_component_1.KeywordContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZC1jb250ZW50LmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHVibGljL3NyYy9hcHAvY29udGVudC9rZXl3b3JkLWNvbnRlbnQva2V5d29yZC1jb250ZW50LmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlFO0FBRXpFLDJFQUFzRTtBQUV0RSxRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLElBQUksU0FBa0MsQ0FBQztJQUN2QyxJQUFJLE9BQWtELENBQUM7SUFFdkQsVUFBVSxDQUFDLGVBQUssQ0FBQyxHQUFHLEVBQUU7UUFDcEIsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixZQUFZLEVBQUUsQ0FBRSxtREFBdUIsQ0FBRTtTQUMxQyxDQUFDO2FBQ0QsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxtREFBdUIsQ0FBQyxDQUFDO1FBQzNELFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdEMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDdkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==