// function sayHello(){
//     let you = prompt("What is your name");
//     console.log("Hello",you + "!")
// }
// sayHello();

// let varContainingFunction = function(){
//     let varInFunction = "i'm in a Function.";
//     console.log("hi there", varInFunction)
// };

// varContainingFunction();

// function tester(para1, para2){
//     return para1 + " " +para2;
// }
// const arg1 = "argument1";
// const arg2 = "argument2";
// tester(arg1,arg2);
// console.log(tester(arg1,arg2));


// let x =parseInt( prompt ("enter x= "));
// let y = parseInt(prompt ("enter y= "));

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// addTwoNumbers(x,y);

//DEFAULT ARGUMENT REPRESENTATION: 
// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers();

//---------Arrow functions are great for sending functions around as a parameters and used as shortcut notation
//FORMAT = (parameter1, parameter2) => body of the function;

// (p1,p2) => console.log(p1+p2);

// () => console.log("Hello");

// p => console.log(p);

// (p1,p2) => {
//     // for multiple statements
// };

// let doingArrowStuff = x => console.log(x);

// doingArrowStuff("Great")

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

//The spread operator ... in JavaScript expands an iterable (like an array, string, or object) into individual elements

// let spread = ["so","much","fun"];
// let message = ["JS", "is", ...spread, "and", "very", "powerful"];
// let message1 = ["Science", "is", ...spread, "and", "very", "important", "Subject"];
// console.log(message);
// console.log(...message);
// console.log(message1);

// let greet = ["hello", "baby,", "playing", "with", "you", "is ",...spread];
// console.log(...greet);

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr = [5,8];
// addTwoNumbers(...arr);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr = [5,9];
// let arr2 = [6,7];

// addFourNumbers(...arr, ...arr2);

// REST PARAMETER INN SPREAD FUNCTION: 

// function someFunction(para1,...para2){
//     console.log(para1,para2);
// }
// someFunction("hi", "there", "How are you");

// function addTwoNumbers(x,y){
//        console.log(x+y);
//      }
    //  let result = addTwoNumbers(4,5);
    //  console.log(result);

    //  let addTwoNumbers = (x,y) => console.log(x+y);

    //  let resultArr = [];
    //  for(let i =0; i<10; i++){
    //     let result = addTwoNumbers(i, i*2);
    //     resultArr.push(result);
    //  }
    //  console.log(resultArr);

    //RETURNING WITH ARROW FUNCTIONS:

    let addTwoNumbers = (x,y) => x+y;
    let resultArr = [];
    for(let i =0; i<10; i++){
       let result = addTwoNumbers(i, i*2);
       resultArr.push(result);
    }
    console.log(resultArr);

