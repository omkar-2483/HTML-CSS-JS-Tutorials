/* create a faulty calculator which perform
+-->-
--->/
/-->**
*-->+

it perform wrong operation only 10% of Times */

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter operation: ");

let obj = {
    "+": "-",
    "-": "/",
    "/": "**",
    "*": "+"
};

let random = Math.random();
if (random < 0.1) {
    c = obj[c];
    alert(`the result is ${eval(a + c + b)}`);
} else {
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
