(function (root) {
  var Game = root.Game = (root.Game || {});

  var View = Game.View = function(el) {
    this.$el = el;
  };


  View.prototype = {
    start: function() {
      this.$el.on('keydown', this.handleKeys.bind(this));
      this.board = new Game.Board();
      this.gameLoop = setInterval(this.step, 500);
    },

    handleKeyEvent: function(event) {
      this.board.snake.turn(event.keyCode);
    },

    step: function() {
      this.board.snake.move();
      this.board.render();
    }
  }
})(this);