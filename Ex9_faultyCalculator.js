/* create a faulty calculator which perform
+-->-
--->/
/-->**
*-->+

it perform wrong operation only 10% of Times */

let num1=prompt("Enter first number: ");
let num2=prompt("Enter second number: ");
let wrong=Math.random();
if(wrong<=0.1){
    console.log("Addition:",num1-num2);
    console.log("Substraction:",num1/num2);
    console.log("Division:",num1**num2);
    console.log("Multiplication:",num1+num2);
}else{
    console.log("Addition:",num1+num2);
    console.log("Substraction:",num1-num2);
    console.log("Division:",num1/num2);
    console.log("Multiplication:",num1*num2);
}