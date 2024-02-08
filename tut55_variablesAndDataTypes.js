//JS variables
var a=2;
var b=true;
var c="omkar";

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))

// rules:
// variable starts with _ , $, letter 
//letter,digit,underscore, $ are allowed
//case sensitive
//reserved words can't be used as variable name

let num=10;
{
    let num=11;
    console.log("inner/local:",num);
}
console.log("global:",num);

var num2=20;
{
    var num2=21;
    console.log("inner/local:",num2);
}
console.log("global:",num2);
//var VS let
// 1.var is globally scoped while let and const are block scoped
// 2./value of const can not be changed
// 3. let can also be globally scoped if declared outside 

//Data Types
// 1.premitive: null,number,string,symbole,undefined, boolen, Bigint
// 2. object

let x=20;
let y=20.24;
let z="Omkar Kasture";
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r);
console.log(typeof(x),typeof(y),typeof(z),typeof(p),typeof(q),typeof(r));

//alt=multiple cursor
//remember: null is premitive data type but its type is object

//object data type: key value pairs
let o={
    name:"Omkar",
    "Job Roll": "Student",
    id:22210269
}

console.log(o);
o.id=224031;
console.log(o);