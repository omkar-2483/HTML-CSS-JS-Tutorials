let a="omkar";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

console.log(a.length)
let b='nil'
console.log("may name is"+a+"and my firend is"+b);
console.log("may name is",a,"and my firend is",b);

// template literal
console.log(`my name is ${a} and my friend is ${b}`);

// console.log("omk"ar");
console.log(`omk"ar`)
console.log("\nomk\"ar")

//properties
let c="shubham";
console.log(c.toUpperCase());
console.log(c);
console.log(c.toLowerCase());
console.log(c.length);

//string slicing
console.log(c.slice(1,4)) //index 1 to 3
console.log(c.slice(1)) //index 1 to all next
c='shubhamsh'
console.log(c.replace('sh',23)) //only once

//concate
console.log(c.concat(a,b))

//remove white spaces
str='   omkar   '
console.log(str);
console.log(str.trim());

//strings are immutable
str='kasture';
console.log(str);