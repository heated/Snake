(function (root) {
  var Game = root.Game = (root.Game || {});

  var Coord = Game.Coord = function(x, y) {
    var SIZE = Game.SIZE;
    this.x = (SIZE + x) % SIZE;
    this.y = (SIZE + y) % SIZE;
  };

  Coord.prototype = {
    plus: function(pos) {
      return new Coord(this.x + pos[0],
                       this.y + pos[1]);
    },

    isCoord: function(coord) {
      return this.x == coord.x &&
             this.y == coord.y;
    },

    render: function(blocks, color) {
      var block = blocks[this.x * Game.SIZE + this.y];
      $(block).css('background', color)
    }
  }

  Coord.random = function() {
    var x = (Math.random() * Game.SIZE) | 0;
    var y = (Math.random() * Game.SIZE) | 0;
    return new Game.Coord(x, y);
  }
})(this);