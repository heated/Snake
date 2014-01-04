(function (root) {
  var Game = root.Game = (root.Game || {});

  var View = Game.View = function(el) {
    this.$el = el;
    this.start();
  };


  View.prototype = {
    start: function() {
      $(window).keydown(this.handleKeyEvent.bind(this))
      // this.$el.on('keydown', );
      DIMS = Game.Board.DIMS;
      for(var i = 0; i < DIMS[0] * DIMS[1]; i++) {
        var newBlock = $('<div class="block">');
        this.$el.append(newBlock);
      }
      this.board = new Game.Board();
      this.gameLoop = setInterval(this.step.bind(this), 1000 / 15);
    },

    handleKeyEvent: function(event) {
      this.board.snake.turn(event.keyCode);
    },

    step: function() {
      this.board.snake.move(this.board);
      this.board.render(this.$el);
    }
  }
})(this);

$(function(){
  renderField = $($('.wrapper')[0]);
  var game = new Game.View(renderField);
})
