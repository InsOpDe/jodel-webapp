"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const content_component_1 = require("./content.component");
describe('ContentComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [content_component_1.ContentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(content_component_1.ContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5RTtBQUV6RSwyREFBdUQ7QUFFdkQsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNoQyxJQUFJLFNBQTJCLENBQUM7SUFDaEMsSUFBSSxPQUEyQyxDQUFDO0lBRWhELFVBQVUsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFO1FBQ3BCLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsWUFBWSxFQUFFLENBQUUsb0NBQWdCLENBQUU7U0FDbkMsQ0FBQzthQUNELGlCQUFpQixFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsb0NBQWdCLENBQUMsQ0FBQztRQUNwRCxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=