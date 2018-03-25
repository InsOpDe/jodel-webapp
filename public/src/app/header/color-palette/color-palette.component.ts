import {Component, OnInit} from '@angular/core';
import {COLORS_ARRAY} from "../../global/colors";
import {ContentService} from "../../content.service";

/**
 * color palette component
 *
 * @author  Maya
 * @since   25.03.2018
 */
@Component({
    selector: 'app-color-palette',
    templateUrl: './color-palette.component.html',
    styleUrls: ['./color-palette.component.less']
})
export class ColorPaletteComponent implements OnInit {

    COLORS = COLORS_ARRAY;

    constructor(private contentService: ContentService) {
    }

    ngOnInit() {
    }


    /**
     * change the global color of content service
     *
     * @author  Maya
     * @since   25.03.2018
     */
    onColorSelect(color) {
        this.contentService.color = color;
    }
}
