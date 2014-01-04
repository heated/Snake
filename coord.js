(function (root) {
  var Game = root.Game = (root.Game || {});

  var Coord = Game.Coord = function(x, y) {
    this.x = x;
    this.y = y;
  };

  Coord.prototype = {
    plus: function(pos) {
      DIMS = Game.Board.DIMS;
      return new Coord((DIMS[0] + this.x + pos[0]) % DIMS[0],
                       (DIMS[1] + this.y + pos[1]) % DIMS[1]);
    },

    isCoord: function(coord) {
      return this.x == coord.x &&
             this.y == coord.y;
    },

    render: function(blocks, color) {
      var block = blocks[this.x * Game.Board.DIMS[0] + this.y];
      $(block).css('background', color)
    }
  }

  Coord.random = function() {
    var x = (Math.random() * Game.Board.DIMS[0]) | 0;
    var y = (Math.random() * Game.Board.DIMS[1]) | 0;
    return new Game.Coord(x, y);
  }
})(this);