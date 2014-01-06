(function (root) {
  var Game = root.Game = (root.Game || {});

  var View = Game.View = function(el) {
    this.$el = el;
    this.start();
  };


  View.prototype = {
    start: function() {
      $(window).keydown(this.handleKeyEvent.bind(this));

      this.$el.empty();

      SIZE = Game.SIZE;
      for(var i = 0; i < SIZE * SIZE; i++) {
        this.$el.append($('<div class="block">'));
      }

      this.board = new Game.Board();
      this.snake = this.board.snake;
      this.gameLoop = setInterval(this.step.bind(this), 1000 / 10);
    },

    handleKeyEvent: function(event) {
      if(event.keyCode == 82) { this.restart(); }
      this.board.snake.turn(event.keyCode);
    },

    step: function() {
      this.snake.move(this.board);
      this.board.render(this.$el);
      if(!this.snake.alive) {
        this.stop();
      }
    },

    stop: function() {
      alert("YOU DIED");
      clearInterval(this.gameLoop);
    },

    restart: function() {
      clearInterval(this.gameLoop);
      $(window).off('keydown');
      this.start();
    }
  }
})(this);

$(function(){
  var renderField = $($('.wrapper')[0]);
  var game = new Game.View(renderField);
})
