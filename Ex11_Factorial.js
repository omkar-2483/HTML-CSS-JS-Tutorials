// find facrorial of any Number

let num=prompt("Enter a number: ");
let fact=1;
for(var i=1;i<=num;i++){
    fact*=i;
}
alert(`Factorial of ${num} is ${fact}`);