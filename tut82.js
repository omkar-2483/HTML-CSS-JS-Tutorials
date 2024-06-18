// let x,y=[1,2];
// console.log(x,y);

// let [x,y]=[1,2];
// console.log(x,y);

// let [x,y, ...rets]=[1,2,3,4,5,6];
// console.log(x,y,rest);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// let {a,b,...rest} = obj;
// console.log(a,b,rest);

let sum=(a,b,c)=>{
    return a+b+c;
}

let arr=[1,2,3]
console.log('sum=', sum(arr[0],arr[1],arr[2]));
console.log('sum=', sum(...arr));

let obj={...arr};
