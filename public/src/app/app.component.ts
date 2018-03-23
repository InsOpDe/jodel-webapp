import { Component } from '@angular/core';

/**
 * Main Component
 *
 * @author  Maya
 * @since   22.03.2018
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

    title: String = 'Jodel Projekt';

    barCharValue1 = 10;

    constructor () {
    }

    onClick () {
        this.barCharValue1 += 5;
    }
}
