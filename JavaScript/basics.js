// // var a = 5;
// // console.log(a); function myFunction() {
// //     document.getElementById("demo").innerHTML = "after change";
// //  }


// // const person = {
// //     name: "John",
// //     age: 30,
// //     city: "New York"
// // }
// // document.getElementById("demo").innerHTML = person.name + " " + person.age + " " + person["city"];


// // function displayDate(){
// //     document.getElementById("demo").innerHTML = Date();
// // }


// // functions (declaration) is hoisted but not the function explainantion and arrow function

// function cat(){
//     console.log("meow");
// }

// cat();


// // functions are actually values, so we can store the values in an variable
// let dogSound = function dog(){    
//     console.log("bark")
// }  
// dogSound();


// // arrow function
// const coffee = () =>{
//     console.log("will make you anxious, try matcha")
// }

// coffee();

// // concept of functions accepting parameters
// const icedCoffee = (ice,coffee) => {
//    console.log(ice + coffee );
  
// }

// icedCoffee(10,1);


// const greet = (name,age) =>{
//     return `hello ${name}. your age is ${age}.`
// }

// const output = greet("amisha",20);

// console.log(output);


// // const spotify = (songName,singerName) => `Playing ${songName} from ${singerName}'s album`;

// // const playSong = spotify("Down bad", "Taylor Swift");
// //  console.log(playSong);



// const spotify = (songName,singerName) => `Playing ${songName} from ${singerName}'s album`;

// const playSong = spotify("Lover","Taylor swift");
// console.log(playSong);




// // const spotify = songName => `Playing ${songName}`;

// // const playSong = spotify("Down bad");
// //  console.log(playSong);






// // objects in javascript

// const car = {
//     name: "cairo",
//     model: "2023",
//     breed: "persian",
// };

// console.log(car.name);


// method object

const obj = {
    name: function(a){
        console.log(this);
    },

    age: "25",
    email: "xyz"

};
obj.name();

// const obj2 = {
//     sayName: function (){
//         console.log(this.age)
//         function childfnc(){
//             console.log(this.age);
//         }
//         childfnc();
//     },
//     age: "34"

// }  

// obj2.sayName();



// const obj3 = {
//     sayName: function (){
//         console.log(this.age)
//         const child = () =>{
//             console.log(this.age)
//         }
//     },
//     age: 34
// }

// obj3.sayName();


// constructor function

// function add() {
//     console.log(this)
// }

// const ans = new add();



// document.querySelector("button")
// .addEventListener("click", function(){
//     console.log(this);
// })




//call apply bind
//call


// const cat = {name:"cairo"};
// function kitty(){
//     console.log(this)
// }

// kitty.call(cat);


//apply  (same as call but takes values in an array)
// const cat = {name:"cairo"};
// function kitty(a,b,c){
//     console.log(this,a,b,c)
// }

// kitty.apply(cat,[1,2,3]);


//bind (same as call but badme chalaata hai us function ko)
// const cat = {name:"cairo"};
// function abcd(){
//     console.log(this)
// }

// const later = abcd.bind(cat);
// later();


//practice call apply bind

// const obj = {name:"ami"};
// function abcd(){
//     console.log(this)
// }
// abcd.call(obj);


// const obj2 = {name:"sha"};
// function abcd(a,b,c){
// console.log(this,a,b,c);
// }

// abcd.apply(obj2,[1,2,3]);


// const obj3 = {name:"amisha"};
// function abcd(){
//     console.log(this);
// }
// const later = abcd.bind(obj3);
// later();


// function ab(){
//     this.name= "amisha";
//     this.age= 34;
// }

// let who =  new ab();



//prototype inheritance
// function makeHuman(name,age){
//     this.name = name;
//     this.age = age;
// }

// makeHuman.prototype.printMyName = function() {
//     console.name(this.name);
// }

// const human1 = new makeHuman("ami",34);
// const human2 = new makeHuman("sha",45)


//clouser

// function abcd(){
//     var x = 20;
//     return function () {
//         console.log(x);
//     }
// }

// var ans = abcd();
// ans();


// function setTimer(){
//     var y = 30;
//     return setTimeout(function (){
//         console.log(y);
//     },2000)

// }
// var print = setTimer();


// error handling


// function divide (a,b){
//     try{
//         if(b==0){
//             throw Error("error occured");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// divide(12,6)


//async
// console.log("hey1")
// setTimeout(function () {
//     console.log("hey2")
// },2000)
// console.log("hey3")


// promise
// var ans = new Promise((res,rej)=>{
//     if(true){
//         return res();
//     }
//     else {
//         return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("resolved");
// })

// .catch(function(){
//     console.log("rejected")
// })



// var ans = new Promise ((res,rej)=>{
//     if(true){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans
//     .then (function(){
//         console.log("resolved")
//     })
//     .catch(function(){
//         console.log("rejected")
//     })

// let arr = [1,2,3,4,5];
// let [a,b] = arr;
// console.log(a);

// let[first, , , fourth] = arr;
// console.log(fourth);

// const arr2 = [x,y, ...rest] = arr;
// console.log(arr2);

// let arr3 = [1,[6,7],8];
// let [i,[j,k],l] = nestedArr;


// let num = 22;
// console.log(num.toString());

// let num = 22.34456;
// let str = "14"
// console.log(num.toFixed(3));
// console.log(num.toPrecision(3));
// console.log(parseInt(str));

// string methods

// let str = "Wassup, bro";
// console.log(str.length);
// console.log(str.indexOf("bro"));
// console.log(str.slice(2,7));
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.replace("Wassup","Hey"));
// console.log(str.split(","));


// array methods
// console.log(arr.length);
// console.log(arr.push(9))
// console.log(arr);
// console.log(arr.pop(9))
// console.log(arr);
//  arr.unshift(7);
// console.log(arr);

// let first = arr.shift();
// console.log(first)
// console.log(arr)

// console.log(arr.indexOf(4));
// let arr = [3,4,6,1,2];
// console.log(arr.splice(1,0,11))
// console.log(arr)

// let numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort(function (a, b) {
//  return a - b;
// });
// console.log(numbers)


// let arr = [1,2,3,4,5];
// const sqr = arr.map((val)=>{
//     return val*val;
// })
// console.log(sqr)


// let arr2 = [3,6,4,9,7];
// let odds = arr2.filter((elem)=>{
// return elem%3 == 0;
// })
// console.log(odds);

// let arr2 = [3,6,4,9,7];
// let result = arr2.reduce((acc,val)=>{

// })

// class Car {
//     constructor (brand){
//         this.name = brand;
//     }
// }

// var kuchbhi = new Car("cairo");
// console.log(kuchbhi)


// functions 

// function greet() {
//     console.log("hello");
// }

// greet();

// let greet = ()=>{
//     console.log("hello")
// }

// greet();

// let greet = (name) =>{
//     console.log(`hello, ${name}!`)
// }
// greet("bro");

// let greet = (name="world") => {
//     console.log(`hello, ${name}`)
// }
// greet();
// greet("ami")

//anonymous function 
// let greet = function(){
//     console.log("hello")
// }
// greet();

// (function(){
//     console.log("hello")
// })();

// higher order function 
// function greet (name,formatter){
//     return "hello," +formatter(name);
// }

// function uppercase(name){
//     return name.toUpperCase();
// }

// console.log(greet("john", uppercase));

// let obj = {
//     name: "john"
// }
// function abcd(a,b,c){
//     console.log(this,a,b,c)
// }

// // abcd.call(obj);
// // abcd.apply(obj,[1,2,3])
// let later = abcd.bind(obj);
// later();


//constructor 
// class Car{
//     constructor(brand){
//         this.name = brand;
//     }
// }

// let myCar = new Car("dhgd");
// console.log(myCar.name)


// class Car {
//     constructor(brand){
//         this.name = brand;
//     }
//     present(){
//         return "i have a" + this.name;
//     }
// }

// let myCar = new Car("dgygx");
// console.log(myCar.present());

// // hoisting

// sayHello();
// function sayHello(){
//     console.log("hello")
// }


// class Animal {
//     constructor (name){
//         this.name = name;
//     }

//     display(){
//         console.log("i am ", this.name);
//     }
// }

// class dog extends Animal{
//     constructor(name,breed){
//         super(name);
//         this.breed = "breed"
//     }
//     displayreed(){
//         console.log(this.name , "is a" , this.breed)
//     }
// }

// let myDog = new dog("karen","husky");
// myDog.display();
// myDog.displayreed()


// let ans = new Promise((res,rej)=>{
//     if(true){
//         return res();
//     }
//     {
//         return rej();
//     }
// })

// ans
//     .then(function(){
//         console.log("resolved")
//     })
//     .catch(function(){
//         console.log("rejected")
//     })


    // async

    // function setTimer(){
    //     var v = 90;
    //     return  setTimeout(function(){
    //         console.log(v)
    //     },2000)
    // }

    // var print = setTimer();

    // function setTimer(){
//     var y = 30;
//     return setTimeout(function (){
//         console.log(y);
//     },2000)


// function greeting(name) {
//     alert("Hello " + name);
//    }
//    function processUserInput(callback) {
//     let name = prompt("Please enter your name.");
//     callback(name);
//    }
//    processUserInput(greeting);
   

//    function greetings(name){
//     alert ("hello" +name)
//    }
//    function processUserInput(user){
//     let name = prompt ("please enter your name")
//     user(name)
//    }

//    processUserInput(greetings);

   //for in

//    const posts = {
//     id: 1,
//     name: "amisha"
//    }

//    for (let post in posts){
//     console.log(post);
//     console.log(posts[post])
//    }

//    const numbers = [1,2,3,4,5]
//    for (let number of numbers){
//     console.log(numbers)
//    }