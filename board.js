(function (root) {
  var Game = root.Game = (root.Game || {});

  var Board = Game.Board = function () {
    this.snake = new Game.Snake(MID, MID);
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
      } while(this.snake.contains(this.apple))
    },

    render: function() {
      var blocks = this.blocks;

      this.apple.render(blocks, 'red');

      var segments = this.snake.segments;
      segments.forEach(function(flesh, i) {
        // gradient
        //var a = 56 + (200 * (segments.length - i) / segments.length) | 0;
        //flesh.render(blocks, 'rgb('+a+','+a+','+a+')');
        flesh.render(blocks, 'white');
      });
    }
  }
})(this);