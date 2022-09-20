//tipos básicos

const firsname: string = 'Wilhiam';
const isvalid: boolean = true;
let  etc:any = 5;
etc = "5";
etc = true;
let age:number = 5;

//listas
const ids:number[] = [1,2,3];
const boolean: boolean[] = [true,false,true,false];

const names:string[] = ['felipe','jane'];

//tupla

const person: [number,string] = [1,'jaine'];

//lista de tuplas

const personList: [number,string][] = [
    [1,"Um"],
    [2,"Dois"],
    [3,"Três"]
]

//Intersections onde uma variável pode ser um ou outro tipo

const productID: string | number = "1";

//Enum

enum Direction {
    Up = 1,
    Down = 2,
}
const direction = Direction.Down;

console.log(direction);

//type assertions mudar o tipo da variável para trabalhar com ela

const productName:any = 'Boné';

//exemplo 1
let itemId = productName as string;

// exemplo 2
let itemId2 = <string> productName;
