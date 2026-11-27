

//  PART 1: Synchronous vs Asynchronous (setTimeout)

// console.log("one")
// console.log("two")

// setTimeout(()=>{
//   console.log("welcome to javascript series")
// },3000)
// console.log("three")
// console.log("four")


// 
//  PART 2: Callback
// 

// function sum (a,b){
//   console.log(a+b)
// }

// function calculater(a,b, sumcallback){
// sumcallback(a,b)

// }
// calculater(3,5 ,sum)


// calculater (2,2,(a,b)=>{
//   console.log( a*b);

// })


// 
//  PART 3: Callback Hell
// 

// getdata(1, () => {
//   console.log("getting data 2......")
//   getdata(2, () => {
//     console.log("getting data 3.....")
//     getdata(3, () => {
//       console.log("getting data 4......")
//       getdata(4)
//     })
//   })
// })


// 
//  PART 4: Promise (basic)
// 

// let promise =new Promise((resolve, reject)=>{
// console.log("hello i am promise")
// }) 


// 
//  PART 5: Promise with resolve / reject + .then() (nested)
// 

// ---------- Way 1: 2 functions (aysnfunction1, aysnfunction2) ----------

// function aysnfunction1 (){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     console.log("data1");
//     resolve("success")
//   },3000)
// })
// }

// function aysnfunction2 (){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     console.log("data2");
//     resolve("success")
//   },3000)
// })
// }

// console.log("fetching data 1  ....")
// let p1= aysnfunction1()
// p1.then((res)=>{
//   console.log(res)

// console.log("fetching data 2  ....")
// let p2= aysnfunction1()
// p2.then((res)=>{
//   console.log(res)
// })
// })


// ---------- Way 2: 3 functions (aysnfun1, aysnfun2, aysnfun3) ----------

// function aysnfun1(){
//   return new Promise((resolve ,reject)=>{
// setTimeout(()=>{
//   console.log("data 1 ")
//   resolve("success")
// },3000)
//   })
// }


// function aysnfun2(){
//   return new Promise((resolve ,reject)=>{
// setTimeout(()=>{
//   console.log("data 2 ")
//   resolve("success")
// },3000)
//   })
// }
// function aysnfun3(){
//   return new Promise((resolve ,reject)=>{
// setTimeout(()=>{
//   console.log("data 3 ")
//   resolve("success")
// },3000)
//   })
// }

// console.log("fetching data 1 wait ,,,,,,,,,,,,")
// aysnfun1().then((res)=>{
//   console.log(res)
//   console.log("fetching data 2 wait ,,,,,,,,,,,,")
//    aysnfun2().then((res)=>{
//     console.log(res);

// console.log("fetching data 3 wait ,,,,,,,,,,,,")
//  aysnfun2().then((res)=>{
//     console.log(res);
//   })
//   })

// })


// ---------- Way 3: getdata(dataid) function ----------

// function getdata(dataid) {
//  return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//     console.log("data :", dataid)
//     resolve("success");
//     reject("errror sorry for delay")

//   }, 2000)
//  })

// }

// getdata(1).then(()=>{
//   console.log("promise fulliled")
//   getdata(2).then(()=>{
//     console.log("second")
//   })
// });


// 
//  PART 6: Promise Chaining
//  (getdata function upar Part 5, Way 3 wala use hoga)
// 

//  getdata(1).then(()=>{

//    return getdata(2);
// }).then(()=>{
//     console.log("second")
//   })


// 
//  PART 7: Promise .catch()
// 

// promise.catch(()=>{
//   console.log("sorry we are unable to load this page")
// })


// 
//  PART 8: Async / Await
// 

// function aysnfunction1 (){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     console.log("data1");
//     resolve("success")
//   },2000)
// })
// }
//  async function getweathe(){
//   await aysnfunction1();
// }



// ---------- Nested if else 

// let age = 19
// if(age>=18){
//   if (age>=60){
//     console.log("senior")
//   }else{
//     console.log("middle")
//   }
// }
// else{
//   console.log("teen")
// }


// ---------- Nested for loop ----------

// for(var i=0 ; i<5; i++){ 
//   let str="";
//   for(var j=0;j<5;j++){
//   str=str+j
//   }
//   console.log(i,str)
// }


// Ek function banao orderPizza() jo Promise return kare. Ab 3 steps ek ke baad ek chalne chahiye, promise chaining se:

// Order place karo (2 sec baad): "Order placed" print karo
// Pizza banao (3 sec baad): "Pizza is ready" print karo
// Delivery karo (2 sec baad): "Pizza delivered" print karo

// Rules:

// Har step ke liye alag function ho jo Promise return kare.
// Har step setTimeout use kare.
// Sab ko .then() se chain karo (nested nahi, return use karna mat bhoolna).
// Last me ek .catch() ho jo error handle kare.

// Bonus (agar pehla ho jaye):

// Step 2 me reject("Oven kharab hai") karwao aur dekho .catch() chalta hai ya nahi. Step 3 chalega ya nahi?
// Ye sab same task phir async/await se karo.

// Expected output:

// Order placed
// Pizza is ready
// Pizza delivered


// function orderpizza() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("order placed ")
//             resolve()
//             reject("oven kharab hai");
//         }, 2000);
//     })
// }
// function pizzaready() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("pizza ready hai ")
//             resolve()
//             reject("oven kharab hai");
//         }, 3000);
//     })
// }

// function pizzadeliverd() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("pizza deliverd")
//             resolve()
//             reject("oven kharab hai");
//         }, 2000);
//     })
// }

// orderpizza().then(() => {
//     return pizzaready()
// }).then(() => {
//     return pizzadeliverd();
// }).catch((err) => {
//     console.log(err)
// })


// async function helo() {
//  console.log("hello")   
// }
// function api() {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             console.log("weather data")
//             reslove("success")

//         }, 2000)
//     })
// }

// async function getweatherdata() {
//     await api();
//     await api();
//     await api();

// }
// =================================comparing all =============================

function orderpizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("order placed ")
            resolve()
            reject("oven kharab hai");
        }, 2000);
    })
}
function pizzaready() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("pizza ready hai ")
            resolve()
            reject("oven kharab hai");
        }, 3000);
    })
}

function pizzadeliverd() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("pizza deliverd")
            resolve()
            reject("oven kharab hai");
        }, 2000);
    })
}
// aysn awiat =============================
(async function() {
    try {
        await orderpizza()
        await pizzaready()
        await pizzadeliverd()
    } catch (err) {
        console.log(err)
    }
})();

// promise====================================
orderpizza().then(() => {
    return pizzaready()
}).then(() => {
    return pizzadeliverd();
}).catch((err) => {
    console.log(err)
})

// call back hell===============================

orderpizza(() => {
    console.log("order placed")
    pizzaready(() => {
        console.log("pizza ready")
        pizzadeliverd(() => {
            console.log("pizza delivred")
        })
    })
})
