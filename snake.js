(function (root) {
  var Game = root.Game = (root.Game || {});

  var Snake = Game.Snake = function () {
    this.segments = [];
    this.dir = "n";
    this.movement = [0, 1];
    this.hatch();
    this.size = 3;
  };

  Snake.prototype = {
    move: function(board) {
      newCoord = this.segments[0].plus(this.movement);
      this.segments.unshift(newCoord);

      if(this.segments.length > this.size) {
        this.segments.pop().render(board.blocks, 'black');
      }

      if(this.eat(board.apple)) {
        board.resetApple();
      }
    },

    turn: function(dir) {
      switch(dir) {
      case 87: this.attempt("n", [-1, 0]); break; //w
      case 65: this.attempt("w", [0, -1]); break; //a
      case 83: this.attempt("s", [1, 0]); break; //s
      case 68: this.attempt("e", [0, 1]); break; //d
      }
    },

    attempt: function(dir, movement) {
      var newCoord = this.segments[0].plus(movement);
      if(!this.contains(newCoord)) {
        this.dir = dir;
        this.movement = movement;
      }
    },

    hatch: function(mommy, daddy) {
      this.segments.push(new Game.Coord(0, 0));
    },

    grow: function() {
      this.size += 3;
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