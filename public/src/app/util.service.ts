import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  async wait(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms))
  }


  mod (n, m) {
    let remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
  };

  download (data, filename){

    if(!data) {
      console.error('Console.save: No data')
      return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
      data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
      e    = document.createEvent('MouseEvents'),
      a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
  }

  randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  leftPad (s, c, n) {
    s = s.toString(); c = c.toString();
    return s.length > n ? s : c.repeat(n - s.length) + s;
  }

}
