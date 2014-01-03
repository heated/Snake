(function (root) {
  var Game = root.Game = (root.Game || {});

  var Snake = Game.Snake = function () {
    this.segments = [];
    this.dir = "n";
  };

  Snake.DIRS = ["n", "e", "s", "w"];

  Snake.prototype = {
    move: function() {


      this.segments.push(new Coord(?));
    },

    turn: function(dir) {
      switch(dir) {
      case 87: dir = "n"; break; //w
      case 65: dir = "w"; break; //a
      case 83: dir = "s"; break; //s
      case 68: dir = "e"; break; //d
      }
      this.dir = dir;
    }
  }
})(this);