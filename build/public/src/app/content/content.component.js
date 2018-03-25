"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const contenttype_1 = require("../global/contenttype");
/**
 * content component
 *  - Requests data from the service and forwards
 *  them to the content components
 *
 * @author  Maya
 * @since   23.03.2018
 */
let ContentComponent = class ContentComponent {
    constructor(contentService) {
        this.contentService = contentService;
        this.CONTENTTYPE = contenttype_1.CONTENTTYPE;
    }
    /**
     * on init
     *
     * @author  Maya
     * @since   23.03.2018
     */
    ngOnInit() {
        // get content data
        this.getData();
    }
    /**
     * get data from service
     *
     * @author  Maya
     * @since   23.03.2018
     */
    getData() {
        this.contentService.getResultData()
            .subscribe(response => {
            this.data = response;
        });
    }
};
ContentComponent = __decorate([
    core_1.Component({
        selector: 'app-content',
        templateUrl: './content.component.html'
    })
], ContentComponent);
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wdWJsaWMvc3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0NBQWdEO0FBRWhELHVEQUFrRDtBQUdsRDs7Ozs7OztHQU9HO0FBTUgsSUFBYSxnQkFBZ0IsR0FBN0I7SUFNSSxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKbEQsZ0JBQVcsR0FBRyx5QkFBVyxDQUFDO0lBSTRCLENBQUM7SUFFdkQ7Ozs7O09BS0c7SUFDSCxRQUFRO1FBRUosbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBR0Q7Ozs7O09BS0c7SUFDSCxPQUFPO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUU7YUFDOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBRWxCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUVKLENBQUE7QUFuQ1ksZ0JBQWdCO0lBTDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7R0FFVyxnQkFBZ0IsQ0FtQzVCO0FBbkNZLDRDQUFnQiJ9