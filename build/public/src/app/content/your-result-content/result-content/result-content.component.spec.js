"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const result_content_component_1 = require("./result-content.component");
describe('ResultContentComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [result_content_component_1.ResultContentComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(result_content_component_1.ResultContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWNvbnRlbnQuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wdWJsaWMvc3JjL2FwcC9jb250ZW50L3lvdXItcmVzdWx0LWNvbnRlbnQvcmVzdWx0LWNvbnRlbnQvcmVzdWx0LWNvbnRlbnQuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUU7QUFFekUseUVBQW9FO0FBRXBFLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7SUFDdEMsSUFBSSxTQUFpQyxDQUFDO0lBQ3RDLElBQUksT0FBaUQsQ0FBQztJQUV0RCxVQUFVLENBQUMsZUFBSyxDQUFDLEdBQUcsRUFBRTtRQUNwQixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLFlBQVksRUFBRSxDQUFFLGlEQUFzQixDQUFFO1NBQ3pDLENBQUM7YUFDRCxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLGlEQUFzQixDQUFDLENBQUM7UUFDMUQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9