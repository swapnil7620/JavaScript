

// Max  between Three Number
/*
 let Number1 = parseInt(prompt("Enter the first Number"));
 let Number2 = parseInt(prompt("Enter the second Number"));
 let Number3 = parseInt(prompt("Enter the thired Number"));
let maxNum, minNum;
function MaxNumber( Number1 ,  Number2 ,Number3 ){

    
    if (Number1 >= Number2 && Number1 >= Number3) {
        maxNum = Number1;
        return Number1;
    }
    else if (Number2 >= Number1 && Number2 >= Number3) {
        maxNum = Number2;
        return Number2;
    } else {
        maxNum = Number3;
        return Number3;
    }    

}
 let Lagest_Number   =MaxNumber(Number1 ,  Number2 ,Number3);
 console.log(Lagest_Number);
 */

 // Takes the value and return with hello  And Name
 /*
 function greetUser(Name){
    return "Hello " +Name;
 }
 let username= greetUser("Swapnil");
 console.log(username);
 */

 // Addition of to numbers

 function AddNumber(Number1,Number2){
    return Number1 + Number2;
 }

 let Sum1 =AddNumber(100,200);
 let Sum2 =AddNumber(300,500);
 let Sum3 =AddNumber(200,900);
 console.log( "Sum of two number  = "+ (Sum1));
 console.log("Sum of two number = "+(Sum2));
 console.log("Sum of two number = "+(Sum3));

 

 // Sum of to numbers
 /*
 function Sub(Number1,Number2){

  return Number1 - Number2;
 }

 let sub = Sub(4000,3000);
 console.log(sub);
*/ 

// Div of to numbers
function Div(Number1,Number2){
    return Number1 /Number2;

}
let div = Div(100,10);
console.log("Div of two number = "+div);

// Mul of to numbers
function Mul(Number1, Number2){
    return Number1 * Number2;
}
let mul = Mul(10,50);
console.log("Mul of two number = "+mul);



// To check weather number is even or not
function IsEven(Number){
    if(Number % 2 == 0)
        return Number;
    else
      return "Number is not Even";
}

let Check = IsEven(1);
console.log(Check);