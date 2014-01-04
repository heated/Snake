(function (root) {
  var Game = root.Game = (root.Game || {});

  var Board = Game.Board = function () {
    this.walls = new Game.Walls([
      //horizontal edges
      [0, 0, 5, 1],
      [15, 0, 5, 1],
      [0, 19, 5, 1],
      [15, 19, 5, 1],

      //verticle edges
      [0, 0, 1, 5],
      [0, 15, 1, 5],
      [19, 0, 1, 5],
      [19, 15, 1, 5],

      //middle walls
      [3, 9, 14, 2],
      [9, 3, 2, 14]
    ]);

    this.snake = new Game.Snake(5, 5);
    this.resetApple();
    this.blocks = $('.block');
    this.score = 0;
  };

  var SIZE = Game.SIZE = 20;
  var MID = (SIZE / 2) | 0;

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

      this.snake.segments.forEach(function(flesh) {
        flesh.render(blocks, 'white');
      });

      this.walls.sections.forEach(function(wall) {
        wall.render(blocks, 'grey');
      });
    }
  }
})(this);