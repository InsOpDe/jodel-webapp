import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  jodelText: String = 'Wasser löst irgendwie alle Probleme. ' +
      'Du willst abnehmen? Trink Wasser. \n' +
      'Du hast unreine Haut? Trink Wasser. \n' +
      'Dein Ex nervt? Ertränk ihn im Wasser.';

  constructor() { }

  ngOnInit() {
  }

}
