(function (root) {
  var Game = root.Game = (root.Game || {});

  var Coord = Game.Coord = function(x, y) {
    this.x = x;
    this.y = y;
  };

  Coord.prototype = {
    plus: function(pos) {
      var SIZE = Game.SIZE;
      return new Coord((SIZE + this.x + pos[0]) % SIZE,
                       (SIZE + this.y + pos[1]) % SIZE);
    },

    isCoord: function(coord) {
      return this.x == coord.x &&
             this.y == coord.y;
    },

    render: function(blocks, color) {
      var block = blocks[this.x * SIZE + this.y];
      $(block).css('background', color)
    }
  }

  Coord.random = function() {
    var x = (Math.random() * SIZE) | 0;
    var y = (Math.random() * SIZE) | 0;
    return new Game.Coord(x, y);
  }
})(this);