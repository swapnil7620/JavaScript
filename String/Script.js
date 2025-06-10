
// String Methods in JS
/*

let str = "Hello, World!";
console.log(str.length);  // length is property not a method
console.log(str.charAt(0));  

console.log(str.indexOf('o'));  
// not working
// console.log(str.indexOf('/o/ig'));  // insensative , casesensative , global


console.log(str.slice(0, 5));

let fruits = str.split(",");
console.log(fruits); 


console.log(fruits);  // ["apple", "banana", "cherry"]


// String  method  At()  ES2022
const Name = "W3Schools";
let letter = Name.at(2);
console.log(letter);

let First = 'Swapnil';

console.log(First.concat(" Mahajan"));


// text = "Hello" + " " + "World!";
console.log(text)
*/

let text1 = "      Hello World!      ";
let text2 = text1.trim();
let text3 = text1.trimStart();
let text4 = text1.trimEnd();
// console.log(text1);
// console.log(text2);
// console.log(text3);

/*
The padStart() method is a string method.
To pad a number, convert the number to a string first.

*/

let text = "5";
let padded = text.padStart(4,"0");

let padded1 = text.padEnd(4,"x");
console.log(padded);
console.log(padded1);

let t = "Please visit Microsoft!";
let newText = t.replace(/MICROSOFT/i, "Swapnil");
console.log(newText);

console.log(t.split(""));// used to split each word