"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const content_service_1 = require("./content.service");
describe('ContentService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [content_service_1.ContentService]
        });
    });
    it('should be created', testing_1.inject([content_service_1.ContentService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wdWJsaWMvc3JjL2FwcC9jb250ZW50LnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF3RDtBQUV4RCx1REFBbUQ7QUFFbkQsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUM5QixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGdCQUFNLENBQUMsQ0FBQyxnQ0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUF1QixFQUFFLEVBQUU7UUFDM0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyJ9