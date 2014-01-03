(function (root) {
  var Game = root.Game = (root.Game || {});

  var Coord = Game.Coord = function(x, y) {
    this.x = x;
    this.y = y;
  };

  Coord.prototype = {
    plus: function(x, y) {
      return new Coord(this.x + x, this.y + y);
    }
  }
})(this);