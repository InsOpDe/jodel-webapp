"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const time_content_component_1 = require("./time-content.component");
describe('TimeContentComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [time_content_component_1.TimeContentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(time_content_component_1.TimeContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1jb250ZW50LmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHVibGljL3NyYy9hcHAvY29udGVudC9zaGFyZWQvdGltZS1jb250ZW50L3RpbWUtY29udGVudC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5RTtBQUV6RSxxRUFBZ0U7QUFFaEUsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtJQUNwQyxJQUFJLFNBQStCLENBQUM7SUFDcEMsSUFBSSxPQUErQyxDQUFDO0lBRXBELFVBQVUsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFO1FBQ3BCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsWUFBWSxFQUFFLENBQUUsNkNBQW9CLENBQUU7U0FDdkMsQ0FBQzthQUNELGlCQUFpQixFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsNkNBQW9CLENBQUMsQ0FBQztRQUN4RCxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=