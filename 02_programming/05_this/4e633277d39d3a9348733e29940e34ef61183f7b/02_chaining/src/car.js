// Complete and add needed car properties:
const car = {
  speed: 0,
  distance:0,
  start: function () {
    this.speed=0;
    this.distance=0;
    return this;
  },
  changeSpeed: function(speed){
    this.speed =speed;
    return this;
  },
  drive: function(minutes){
    this.distance += (this.speed * minutes)/60;
    return this;
  },
  showDistance: function(){
    console.log(`${this.distance} Km`);
    return this;
  }
};

module.exports = car;
