// conditional statements
// note: semicolon is optional in JS

// If-else
if(true){
    console.log('IF Statement');
}else{
    console.log('else statement');
}

if(false){
    console.log("IF statement");
}else if(true){
    console.log("else if statement");
}else{
    console.log("else statement");
}

// operators
/* == equal to
 != not equal to 
 === equal value and type
 !== not equal value or not equal type 
*/

console.log(3==3);
console.log("3"==3);
console.log(3===3)
console.log("3"===3)

//in terminal type node and perform any java operations like compare ,add,etc

// ternary operator
a=4;
b=19;
c=a>b?(a-b):(b-a);
console.log(c);