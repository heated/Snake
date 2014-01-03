(function (root) {
  var Game = root.Game = (root.Game || {});

  var Board = Game.Board = function () {
    this.snake = new Game.Snake();
    this.apples = [];
    this.generateApples();
    this.grid = [];
  };

  Board.DIMS = [20, 20];

  Board.prototype = {
    generateApples: function() {
      for(var i = 0; i < 20; i++) {
        var appleX = Math.random() * Board.DIMS[0];
        var appleY = Math.random() * Board.DIMS[1];

        this.apples.push(new Game.Coord(appleX, appleY));
      }
    },

    render: function() {
      this.clear();

      this.apple.forEach(function(apple) {
        this.grid[apple.x][apple.y] = "a";
      });

      this.snake.segments.forEach(function(flesh) {
        this.grid[flesh.x][flesh.y] = "s";
      });

      for(var i = 0; i < Board.DIMS[0]; i++) {
        line = "";
        for(var j = 0; j < Board.DIMS[1]; j++) {
          line[j] = this.grid[i][j];
        }
        console.log(line);
      }
    },

    clear: function() {
      for(var i = 0; i < Board.DIMS[0]; i++) {
        this.grid[i] = [];
        for(var j = 0; j < Board.DIMS[1]; j++) {
          this.grid[i][j] = " ";
        }
      }
    }
  }
})(this);