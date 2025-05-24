

// Question 1
// 1 positive negative

/*
let number= -1;
if(number> 0){
    console.log("Number is positive");

}
else if(number < 0){
    console.log("Number is Negative");

}
else{
    console.log("Number is 0");
}

*/
// Question 2
/*
let Number = 2;

if (Number == 0) {
    console.log("Number is Zero")
    
}
else if(Number % 2 == 0){
    console.log("Number is Even");
}
else{
    console.log("Number is odd");
}

// Question 3 Age validator

let age = parseInt(prompt("Enter the age"));

if (age > 0 && age < 18) {
    console.log("You are not eligibal for voting")

}
else {
    console.log("given number is small than");
}
    */

// Question 8 positive or negative even or odd
/*
let Number = -3;

if (Number > 0) {

    if (Number % 2 == 0) {
        console.log("The Number is Positive Even");
    }
    else {
        console.log("The Number is Positive odd");
    }
}
else if (Number < 0) {

    if (Number % 2 == 0) {
        console.log("The Number is Negative Even");
    }
    else {
        console.log("The Number is Negative odd");
    }
}
else {
    console.log("Number is Zero");
}
    */

// question 9) Day of the week
/*
let number = 5;
switch (number) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("wensday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("invalid number");
        break;
}
*/

// question 9) Month
/*
let Month = 13;
switch (Month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;

    case 9:
        console.log("Saptember")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("invalid Month");
        break;
}
*/

// 12) simple calculate


let Number1 =parseInt(prompt("Enter the first Number"));
let Number2 = parseInt(prompt("Enter the Numner2"))

let Operator = prompt("Enter the Operator");

switch (Operator) {

    case "+":
        console.log("Addition of two Number :"+ (Number1 + Number2));
            break;
    case "-":
        console.log("Substraction  of two Number :"+ (Number1 - Number2));
          break;
    case "*":
        console.log("Multiplication of two Number :"+ (Number1 * Number2));
         break;   
    case "/":
        console.log("Divion of two Number :"+ (Number1 / Number2))
            break;

    default:
        console.log("Invalid Operator")
        break;
}