(function (root) {
  var Game = root.Game = (root.Game || {});

  var Board = Game.Board = function () {
    this.snake = new Game.Snake();
    this.resetApple();
  };

  Board.DIMS = [50, 50];

  Board.prototype = {
    resetApple: function() {
      this.apple = Game.Coord.random();
    },

    render: function() {
      var blocks = $('.block');
      blocks.each(function(i, block) {
        $(block).css('background', 'black');
      })

      var apple = blocks[this.apple.x * Board.DIMS[0] + this.apple.y];
      $(apple).css('background', 'red');


      this.snake.segments.forEach(function(flesh) {
        var segment = blocks[flesh.x * Board.DIMS[0] + flesh.y];
        $(segment).css('background', 'white');
      });
    }
  }
})(this);