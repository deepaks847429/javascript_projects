
Javascript

->everything in javascript happens inside a executiuon context.
-> it is like a big box, there is two components(memory component(stored like key value pairs) contans variable and function, code component(executed line by line)).
->javascript is a synchronus single threaded language(it execute one command at a line in specific order).

->gloabal execution context->memory component->CODE COMPONENNT->FUNCTION INVOCATION

->call stack keeps record of everything, it maintains the order of execution of execution contexts.


Hoisting in javascript

example- 

getNmae();(javascript interview)

console.log(x);(Undefined)

 function getNmae(){
  console.log("javascript interview");
 }
 var x=6;


How functions works in jS& variable environment and this keyword.



Shortest js program window and this keyword.

-> window- it ia a gloabal object created along global execution context.

this===window(true);

Undefined vs not defined.

undefined-> it is like a placeholder which is kept for time being until value is not assigned, it doesn't mean empty.


The scope chain, scope and lexical environment.


function a(){
function c(){
console.log(b);


}}

var b=10;

a();

global scope
local scope

lexcical environment->local memory along with lexical environment of parents.

let and const in javascript.

->in case of let we can wirte the variable and declare it later but it is not possible in case of const.

let and const cant be redeclared, and can't be hoisted.



Block scope and shadowing in JS

Block{} -> It is used to wrap multiple statements, variable and function can be accessed inside .

let and const are block scope.

shadowing in js- same name variable outside a block is known as shadowing in js.



closure in JS

function x(){
  var a=7;
  function y(){
    console.log(a);
  }
  y();
}
x();

A function bind together in lexical environment.

Uses-
-> Module design pattern.
->currying
-> function like once.
-> memoize
-> maintaing state in async world.
->setTimeouts.
->iterators
->

setTimeouts

function x(){
  var i=1;
  setTimeout(function(){
    console.log(i);
  },3000);
}
x();



unique example

function x(){
  for(var i=1; i<=5; i++){
    setTimeout(function(){
      console.log(i);
    }, i*1000;
    )
  }
  console.log("namaste javascript")
}
x();

->use let it will be fixed, because it will form closure with new variable in each iteration.
output
Namaste javascript
6


FIRST class function and event listeners.

// function statement

function a(){
  console.log(a);
}
a();


-> function expression

var b= function (){
  console.log("b");
}
b();

-> function expression can't be hoisted whereas function statement can be hoisted

-> Anonymous function -> a function without name.

function(){

}

-> Named function Expression

when a function is with name.

var b= function (){
  console.log("b is called");
}
-> Diffrence betweeen parameters and arguments.


inside a function it is known as argumernts.
and when we are passing value it is known as parameters.

->First class function
  THe ability of function to use as values, and can be passed as arguments and return as function is known as first class functtion.
  
->Arrow function


Callback function

when a function is passed inside other function.
function x(){

}
x(function y()){

}

setTimeout(function(){
  console.log("timer");
}, 5000);

-> it gives power of asynchronosity.

Event listeners

Asynchronus javascript & event loop from scratch.

web api
* setTimeout()
* DomAPIs
* fetch()
* local storage
* console
* location


Higher order function

A function which take another function as arguments or return function from it.

function x(){
  console.log("namaste");
}

function y(x){

}

const radius=[3,1,2,4];

const area=function(radius){
  return Math.PI*radius*radius;
};

const circumfarence = function (radius){
  return 2*Math.PI*radius;
}

const daimeter= function (radius){
  return 2*radius;
};

const calculate =function(radius, logic){
  const output=[];
  for(int i=0; i< radius.length; i++){
    output.push(logic(radius[i]));
  }
  return output;
}

console.log(calculate(radius, area));




map, filter, reduce


-> map transform the array.

const arr= [2,3,4,6,8]

function double(x){
  return x*2;
}

const output= arr.map(double);
console.log(ourtput);


-> filter function use to filter array

const arr=[3,5,6,8,9]

function isOdd(x){
  return x%2===0;
}

const output= arr.filter(isOdd);


->reduce function

const arr=[2,5,6,7]

const output= arr,reduce(function(acc, curr){
  acc=acc+curr;
  return acc;
}, 0);
console.log(output);

const output=arr.reduce(function(arr, curr){
  if(curr, acc){
    acc=curr;
  }
}, 0);



episode-2

Callback hell(pyramid of )

const cart =["shoes", "pants", "kurta"]

api.createorder(cart, function(){
  api.procedetopayment()
})

Inversion of control


Promise

const cart =["shoes", "pants", "kurta"]

const promise=createorder(cart);
promise.then(function(){
  procedetopayment(orderid);

})
.catch(function(err){
  console.log(err.message);
})



function createorder(cart){
  const pr=new promise(function(resolve, reject){
    //createordeer
    // validatecart
    //orderid

    if(!validatecard(cart)){
      const err=new Error("cart is invalid");
      reject(err);

    }
    const orderid="12345"
    if(orderid){
      resolve(ordeid);
    }

  });
  return pr;
}


ASync await

-> async function always return promise.

async function getdata(){
  return Namaste;
}

const datapromise =getdata();
datapromise.then((res)=>console.log(res));

await->only used inside async function.

->async and await use to handle promise.(Js engine wait till promise resolve).




this keyword in javascript


// this in global scope
consoler.log(this);
->global object-window, object

//this inside a function

function x(){
  console.log(this);(value depends on strict mode, in strict mode undefined, otherwise window)
}








.



















