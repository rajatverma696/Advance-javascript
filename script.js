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

// let spread = ["so","much","fun"];
// let message = ["JS", "is", ...spread, "and", "very", "powerful"];
// console.log(message);