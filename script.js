// let cel = document.getElementById('cel')
// let fah = document.getElementById('fah')

// cel.addEventListener('input', function(){
//     let cel = this.value;
//     let fah = (C * 9/5) + 32;
//     console.log('cel change');
// });
// fah.value = F;

// cel.addEventListener('input', function(){
//     // console.log('this is');
//     let C = this.value;
//     let F = (C * 9/5) + 32;
//     if(!Number.isInteger(F)){
//         F = F.toFixed(1);
//     }
//     fah.value = F;
// });

let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

cel.addEventListener("input", function () {
  let C = this.value;
  let F = (C * 9) / 5 + 32;
  fah.value = F;
  if (!Number.isInteger(F)) {
    C = C.toFixed(1);
  }
});

fah.addEventListener("input", function () {
  let F = this.value;
  let C = ((F - 32) * 5) / 9;
  cel.value = C;

  if (!Number.isInteger(F)) {
    F = F.toFixed(4);
  }
});
// fah.addEventListener('input', function(){

//     let F = this.value
//     let C = (F - 32) * 5/9;
//     if(!Number.isInteger(C)){
//         C = C.toFixed(4);
//     }
//     cel.value = C;

// let C = this.value
// let F = (C - 32) * 5/9;
// cel.value = F;
// if(!Number.isInteger(C)){
//     F = F.toFixed(4);
// }
// console.log('why is')

// fah.addEventListener('input', function(){
//      let cel = this.value;
//      let fah =  (F - 5/9) * 32;
//     console.log('cel change')
// });
// // cel.value = C;s

// let sidenav = document.getElementById('sidenav')
// let mainbtn = document.getElementById('mainbtn')
// let btn = document.getElementById('btn')

// sidenav.onclick() = function(){
//     if(sidenav.style.right == "-250px"){
//         sidenav.style.right = "0"
//     }
//     else{
//         sidenav.style.right = "0"
//     }
// }

// mainbtn.onclick = function{
//     if(sidenav.style.right == "-250px"){
//         sidenav.style.right = "0"
//     }
// }

// let navbar = document.getElementById('navbar')
// let mainbtn = document.getElementById('mainbtn')
// let btn = document.getElementById('btn')

// btn.onclick = function(){
//     if(navbar.style.right == '-250px'){
//         navbar.style.right = "0";
//     }
// }

// let one = document.getElementById('navbar')
// let two = document.getElementById('mainbtn')
// let three = document.getElementById('btn')

// btn.onclick = function(){
//     if(navbar.style.right == "-250px"){
//         navbar.style.right = "0"
//     }

let navbar = document.getElementById("navbar");
let btn = document.getElementById("btn");
let mainbtn = document.getElementById("mainbtn");

btn.onclick = function () {
  if (navbar.style.right == "-250px") {
    navbar.style.right = "0";
  } else {
    navbar.style.right = "-250px";
  }
};

// arrry functions in js

const cheracter = [
  {
    name: "faizan",
    height: 6,
    hair_color: "black",
    eye_color: "brown",
    gen: "male",
  },
  {
    name: "aman",
    height: 5,
    hair_color: "brown",
    eye_color: "black",
    gen: "male",
  },
  {
    name: "zishan",
    height: 7,
    hair_color: "black",
    eye_color: "green",
    gen: "male",
  },
  {
    name: "sana",
    height: 9,
    hair_color: "brown",
    eye_color: "brown",
    gen: "f_male",
  },
  {
    name: "alina",
    height: 5,
    hair_color: "black",
    eye_color: "green",
    gen: "f_male",
  },
];

// get select all names on array

const name1 = cheracter.map((ch) => ch.name);
console.log(name1);

const name = cheracter.map((ch) => ch.eye_color);
console.log(name);

// map function using

const array1 = [2, 3, 4, 5];

const map1 = array1.map((x) => x * 5);
console.log(map1);

// map.() another function

const hello = ["f", "a", "i", "z", "a", "n"];
const hi = hello.map((i) => i * i);
console.log(hi);

// select name and height only

// const array2 = cheracter.map(ch => {
//     return{
//         name: ch.name,
//         height: ch.height,
//     }
// })
// console.log(array2);

let array2 = cheracter.map((ch) => {
  return {
    name: ch.name,
    height: ch.height,
  };
});
console.log(array2);

// get all height count using reduse() mathod

const array3 = cheracter.map((ch) => {
  return {
    height: ch.height,
  };
});
console.log(array3);

// get count all mathod of height

let countH = cheracter.reduce((previousValue, cheracter) => {
  return previousValue + cheracter.height;
}, 0);
console.log(countH);

// get all height > then 5

let total = cheracter.filter((cheracter) => {
  return cheracter.height > 5;
});

console.log(total);

// get all male cherecter

let check = cheracter.filter((cheracter) => {
  return cheracter.gen == "male";
});
console.log(check);

// short by gender
let short = cheracter.sort((cheracter) => {});

console.log(short);

// for constant method

//    const PI = 1.15236541
//    PI > 1.0

//    Object.defineProperty(typeof global === "object" ? global : window, "PI", {
//     value:        3.141593,
//     enumerable:   true,
//     writable:     false,
//     configurable: false
// })
// PI = 2.0
//    console.log(PI)

//    global scoop

let as = "Faizan mansuri";

faizu();
function faizu() {
  console.log(as);
}

// local scoop

one();
function one() {
  let one = "faiz mansuri";
  console.log(one);
}

// arrow function

function what(a) {
  return a + a;
}
console.log(what(20));

let b = [
  {
    a: 8,
  },
  {
    b: 8,
  },
];
console.log(b);

// default peramiter's

function greeting(msg = "hello") {
  console.log(msg);
}

greeting();

// rest peramiter's

function rest(..._hello) {
  let result = 0;
  for (i = 0; i < _hello.length; i++) {
    result += _hello[i];
  }
  console.log(result);
}

rest(2, 3, 5, 4, 2, 54, 54, 545, 454, 54);

// spread operator

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(1, 2, 3, ...arr2);

// tamplate litral

let ff = `faizan ${"lala"} mnaui`;
console.log(ff);

let y = 5;
let z = 5;

console.log(`y and z ${y + z}` + ` not 15` + `.`);

// let abc = "fai-zan";
// what();
// function what(){

//     console.log(abc);

// }

// let ab = "Faizan mansuri";

// faizu();
// function faizu(){

//     console.log(ab);
// }

// let naam = cheracter.map(ch => {
//     return{
//         name: ch.name,
//         gen: ch.gen
//     }
// });

// console.log(naam);

// function rest2(...hello2){
//     let rsult2 = 0;
//     for(A = 0; A < hello2.length; A++ ){
//         rsult2 += hello2[A]
//     }

//     console.log(rsult2);
// }
// rest2(2,5,4,4);

// call functions

// function greeting(name){
//     alert(" hello " + name);
// }

// function userInput(call){
//     let name = prompt(' what is your name ');
//     call(name);
// }
// userInput(greeting);

// Events

// bca.onclick = function(){
//     if(para.style == 'show'){
//         para.style = "hide"
//     }
//     else{
//         para.style = 'show'
//     }
// }

// function hide(){
//     let bca = document.getElementById('bca')
//     let para = document.getElementById('para')
//     para.style.display = 'none'
// }

// function hide(){
//     let bca = document.getElementById('bca')
//     let para = document.getElementById('para')
//     para.style.display = 'none';

function toggleHide() {
  let bca = document.getElementById("bca");
  let para = document.getElementById("para");
  para.style.display = "none";
  if (para.style.display != "none") {
    para.style.none = "none";
  }
}

// call back function

function ahmad(num1, num2) {
  console.log("hi");
}

function faraz(sum1, sum2, callback) {
  console.log(sum1 + sum2);
  callback();
}

faraz(5, 5, ahmad);



// function gg(as,sa){
//     console.log('hello guys')
// }

// function nn(da,ad,ds){
//     console.log(da + ad)
//     ds();
// }
// nn(55, 55, gg);


// let friends = {
//     name: "ahad", subject: "python",
//     name: "faizal", subject: "java",
// }

// function student(){
//     setTimeout(function(){
//         friends.push(friends)
//     },3000);
// }

// Promise

// function func1(){
//     return new Promise(function(resolve, reject){
//         setTimeout(() =>{
//             console.log('your the best')
//         }, 8000)
//     })
// }
// func1();



// function funct1() {
//   return new Promise(function (resolve, reduce) {
//     setTimeout(() => {
//       const error = true;
//       if (!error) {
//         console.log("thank you for resolving this");
//         resolve();
//       }
//       else{
//           console.log("thank you for reject this");
//           reduce();
//       }
//     },8000);
//   });
// }

// funct1().then(function(){
//     console.log("thank for everything")
// }).catch(function(){
//     console.log("why are you not fix")
// })


// funct1().then(function(){





// })

// function funct2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             const error = false
//             if(!error){
//                 console.log('why are you fix this')
//                 reject();
//             }
//             else{
//                 console.log("thank you for this")
//                 resolve();
//             }
//         })
//     })
// }

// funct2().then(function(){
//     console.log('your too good programer')
// }).catch(function(){
//     console.log('so your noob programer')
// })



function lala(lal1,lala2){
  console.log('hiiiii');
}
function lala2(lal4,lala3,aaja){
  console.log(lal4 + lala3);
  aaja();
}
lala2(55,55,lala);
