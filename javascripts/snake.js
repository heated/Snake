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

        if(this.contains(newCoord) ||
           board.walls.contains(newCoord)) {
          this.alive = false;
        }

        this.segments.unshift(newCoord);

        if(this.eat(board.apple)) {
          board.score++;
          $('#score').text(board.score + " Apples");
          board.resetApple();
        }
      }
    },

    turn: function(dir) {
      switch(dir) {
      case 38:
      case 87: this.attempt("n", [-1, 0]); break; //w
      case 37:
      case 65: this.attempt("w", [0, -1]); break; //a
      case 40:
      case 83: this.attempt("s", [1, 0]); break; //s
      case 39:
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
        result = result || coord.isCoord(segment);
      });
      return result;
    }
  }

  var Walls = Game.Walls = function(rects) {
    sections = this.sections = [];
    rects.forEach(function(rect) {
      for(var i = 0; i < rect[2]; i++) {
        for(var j = 0; j < rect[3]; j++) {
          sections.push(new Game.Coord(rect[0] + i, rect[1] + j));
        }
      }
    });
  }

  Walls.prototype.contains = function(coord) {
    var result = false;
    this.sections.forEach(function(section) {
      result = result || coord.isCoord(section);
    });
    return result;
  }
})(this);