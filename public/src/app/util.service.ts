import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }


  mod (n, m) {
    let remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
  };

}
