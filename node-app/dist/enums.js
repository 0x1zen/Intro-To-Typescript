"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
    Direction["Down"] = "down";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed === Direction.Up) {
        console.log("Move Up");
    }
    if (keyPressed === Direction.Left) {
        console.log("Move Left");
    }
    if (keyPressed === Direction.Right) {
        console.log(Direction.Right);
    }
    if (keyPressed === Direction.Down) {
        console.log(Direction.Down);
    }
}
doSomething(Direction.Down);
