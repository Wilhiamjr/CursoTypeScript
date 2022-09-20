"use strict";
//tipos básicos
const firsname = 'Wilhiam';
const isvalid = true;
let etc = 5;
etc = "5";
etc = true;
let age = 5;
//listas
const ids = [1, 2, 3];
const boolean = [true, false, true, false];
const names = ['felipe', 'jane'];
//tupla
const person = [1, 'jaine'];
//lista de tuplas
const personList = [
    [1, "Um"],
    [2, "Dois"],
    [3, "Três"]
];
//Intersections onde uma variável pode ser um ou outro tipo
const productID = "1";
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Down;
console.log(direction);
