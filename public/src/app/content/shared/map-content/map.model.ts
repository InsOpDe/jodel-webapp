export class MapModel {

    topLeft = {
      lat : 55.003605, //y
      long : 5.409291 //x
    };
    bottomRight : {
      lat : 47.178319,
      long : 15.261301
    };
    quota = 1.2808671066;
    mapWidth = 450;
    squareSize = 8;
    pixelMargin = 4;
    pixelQuota = 1;
    mapHeight : number;
    squaresY : number;
    squaresX : number;
    cities: object;

    constructor (data) {

      // console.log("---------21232--");
      // console.log(data);
      // console.log("-----------");

        this.cities = data.cities;

        this.mapHeight = this.mapWidth * this.quota;

        this.squaresX = Math.floor(this.mapWidth / (this.squareSize + this.pixelMargin));
        this.squaresY = Math.floor(this.mapHeight / (this.squareSize + this.pixelMargin));

    }
}
