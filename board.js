(function (root) {
  var Game = root.Game = (root.Game || {});

  var Board = Game.Board = function () {
    this.snake = new Game.Snake();
    this.resetApple();
    this.blocks = $('.block');
  };

  Board.DIMS = [50, 50];

  Board.prototype = {
    resetApple: function() {
      this.apple = Game.Coord.random();
    },

    render: function() {
      var blocks = this.blocks;

      this.apple.render(blocks, 'red');

      var segments = this.snake.segments;
      segments.forEach(function(flesh, i) {
        var a = 56 + (200 * (segments.length - i) / segments.length) | 0;
        flesh.render(blocks, 'rgb('+a+','+a+','+a+')');
      });
    }
  }
})(this);