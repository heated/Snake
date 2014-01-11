(function (root) {
  var Game = root.Game = (root.Game || {});

  var Board = Game.Board = function () {
    this.walls = new Game.Walls([
      //horizontal edges
      [-6, -1, 12, 2],

      //verticle edges
      [-1, -6, 2, 12],

      //middle walls
      [4, 9, 12, 2],
      [9, 4, 2, 12]
    ]);

    this.snake = new Game.Snake(6, 6);
    this.resetApple();
    var blocks = this.blocks = $('.block');
    this.score = 0;

    blocks.width(500 / SIZE);
    blocks.height(500 / SIZE);
  };

  var SIZE = Game.SIZE = 20;

  Board.prototype = {
    resetApple: function() {
      do {
        this.apple = Game.Coord.random();
      } while(this.walls.contains(this.apple) ||
              this.snake.contains(this.apple));
    },

    render: function() {
      var blocks = this.blocks;

      this.apple.render(blocks, 'red');

      var segments = this.snake.segments;

      segments.forEach(function(flesh, i) {
        var a = .2 + .8 * (1 - i / segments.length);
        var color = [173, 216, 230].map(function(el){ return (el * a) | 0; });

        flesh.render(blocks, 'rgb(' + color.join(',') + ')');
      });

      this.walls.sections.forEach(function(wall) {
        wall.render(blocks, 'grey');
      });
    }
  }
})(this);