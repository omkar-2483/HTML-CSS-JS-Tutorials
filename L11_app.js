// console.log("one")
// console.log("two")

// setTimeout(()=>{
//     console.log("hello")
// }, 4000) //executed after 2000ms=2s

// console.log("three")
// console.log("four")

// function getData(dataId){
//     //2s
//     setTimeout(()=>{
//         console.log('data',dataId)
//     },2000);
// }

// getData(1)
// getData(2)
// getData(3)

//all three are prited at same time ie after 2s

//if you want delay of 2s after every data fetch
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })

//promises

// let promise=new Promise((resolve,reject)=>{
//     console.log('I\'m a promise');
//     resolve('123');
//     reject('error');
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve('successful');
//             if(getNextData){
//                 getNextData();
//             }
//         },5000)
//     })
// }

/*promise handling*/
// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('I am a promise');
//         // resolve("success")
//         // reject('network error');
//     })
// }

// let promise=getPromise();
// promise.then((res)=>{
//     console.log('promise successful,result:',res);
// })
// promise.catch((err)=>{
//     console.log('promise failed, error:',err);
// })

/*promise chain*/

const asyncFun1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 2000);
  });
};
const asyncFun2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 2000);
  });
};

// console.log("fetching data1....");
// let p1 = asyncFun1();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("fetching data2....");
// let p2 = asyncFun2();
// p2.then((res) => {
//   console.log(res);
// });

// console.log("fetching data1....");
// let p1 = asyncFun1();
// p1.then((res) => {
//   console.log(res);
//   console.log("fetching data2....");
//   let p2 = asyncFun2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });


/* Async and Await */
// async function hello(){
//     console.log("hello")
// }

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('weather data');
            resolve(2000);
        },2000)
    })
}

console.log("automatically invoked getData()");
(async function (){
    console.log("fetching data1...");
    await api();  //1st call
    console.log("fetching data2...");
    await api();  //2nd call
})();