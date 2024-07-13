
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

