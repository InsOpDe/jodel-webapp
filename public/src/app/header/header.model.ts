export class HeaderModel {

  cityId: number;
  location: string;
  time: string;
  text: string;

    constructor (data) {

        this.cityId = data.cityId;
        this.location = data.location;
        this.time = data.time;
        this.text = data.text;
    }
}
