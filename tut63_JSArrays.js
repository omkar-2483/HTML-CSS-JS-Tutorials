let arr = [1, 2, 5, 7, 2, 8];
console.log(arr);
console.log(arr.length);

console.log(arr[4]);
console.log(arr[6]);

//arrays are mutable
arr[5] = 10;
console.log(arr);

console.log(typeof arr);

//array methods
console.log("array to string", arr.toString());
console.log("join", arr.join(" and "));
console.log(arr.pop()); //pop and return last element;
console.log(arr);
console.log(arr.push(7)); //push item and return length of array
console.log(arr);
console.log(arr.push("Omkar"));
console.log(arr);
console.log(arr.shift()); //pop and return first element
console.log(arr);
console.log(arr.unshift("kasture"));
console.log(arr);
delete arr[6]; //delete element but memory is still reserved
console.log(arr.length);
console.log(arr[6]);
console.log(arr);

let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];
console.log(a1.concat(a2));
console.log(a1);
console.log(a2);

console.log([2, 9, 3].sort());

numbers = [2, 1, 5, 6, 7, 3];
numbers.splice(2, 3);
console.log(numbers); // removes 3 elements from index 2
numbers.splice(1, 1, 222, 343); //from index 1 delete 1 element and add new elements from index 1
console.log(numbers);

numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.slice(1));
console.log(numbers.slice(1, 4));
console.log(numbers);

//loops and array
let a = [1, 2, 3, 4];

//for loop
console.log("array elements: ");
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

//for each
console.log("array elements: ");
a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

//for in
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element);
  }
}

//for of
for (const it of a) {
  console.log(it);
}

//map function: create a new array by performing some operation on each array element
a = [1, 2, 3, 4, 5];
let b = a.map((e) => {
  return e ** 2;
});
console.log(a);
console.log(b);

//filter function
const greaterThanfour = (e) => {
  return e > 4;
};

console.log(a);
console.log(a.filter(greaterThanfour));
console.log(a);

//reduce function:reduce an array to a single value
const sum = (a, b) => {
  return a + b;
};
b = a.reduce(sum);
console.log(b);
console.log(a);

//create array from any other object

console.log(Array.from("Omkar"));
