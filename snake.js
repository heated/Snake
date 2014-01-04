(function (root) {
  var Game = root.Game = (root.Game || {});

  var Snake = Game.Snake = function(x, y) {
    this.segments = [new Game.Coord(x, y)];
    this.dir = "n";
    this.movement = [-1, 0];
    this.size = 0;
    this.grow();
    this.alive = true;
    this.paused = false;
  };

  Snake.prototype = {
    move: function(board) {
      if(!this.paused) {
        newCoord = this.segments[0].plus(this.movement);

        if(this.segments.length >= this.size) {
          this.segments.pop().render(board.blocks, 'black');
        }

        if(this.contains(newCoord)) {
          this.alive = false;
        }

        this.segments.unshift(newCoord);

        if(this.eat(board.apple)) {
          board.score += 10;
          $('#score').text(board.score);
          board.resetApple();
        }
      }
    },

    turn: function(dir) {
      switch(dir) {
      case 87: this.attempt("n", [-1, 0]); break; //w
      case 65: this.attempt("w", [0, -1]); break; //a
      case 83: this.attempt("s", [1, 0]); break; //s
      case 68: this.attempt("e", [0, 1]); break; //d
      case 80: this.paused = !this.paused; break; //p
      }
    },

    attempt: function(dir, movement) {
      var newCoord = this.segments[0].plus(movement);
      if(!this.contains(newCoord)) {
        this.dir = dir;
        this.movement = movement;
      }
    },

    grow: function() {
      this.size += 5;
    },

    eat: function(apple) {
      if(this.segments[0].isCoord(apple)) {
        this.grow();
        return true;
      }
      return false;
    },

    contains: function(coord) {
      var result = false;
      this.segments.forEach(function(segment) {
        if(coord.isCoord(segment)) {
          result = true;
        }
      });
      return result;
    }
  }
})(this);