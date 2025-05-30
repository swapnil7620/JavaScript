/*
 //  1)  how to create array in  JavaScript 

//  Two Ways are here :-

//  1) using varaible name and by using assignment operator and 
// after that using square bracket to add the element .
// 2) by using index 
// JS array can accept hertogenus values too

let arr = ["swapnil",1,"10"];

arr[3]=20;
arr[4]=40;
arr[5]=50;

console.log(arr);

for(let i =0;i< arr.length; i++ ){
    console.log(arr[i]);
}
*/


/*
// 2 ) program to find length of an array
// length function is used to find the length of an arrys

let arr = [10,20,30,40,50,100];
console.log(arr.length);

*/

/*
// 3) Add the element to the end of the array

// we can add the element in an array by using push method
let Arr = [10,20,30,40];

Arr.push(50);
console.log(Arr);
*/

/*
// 4) Add the element to the beginning of an arrays

// by using shift method we can add element to the start of an array
let Arr = [20,30,40,50,60];

Arr.unshift(10);
console.log(Arr);

*/

/*
// 5) To Remove first element from array
// shift() method is used to remove first element from an array

let Arr = [20,30,40,50,60];

Arr.shift();
Arr.shift();
console.log(Arr);
*/

/*
// 6)  Write a function to print the all elemnt of an array

let Arr = [10,20,30,40,50,60];
function call(){
    console.log(Arr);

}
call();
call();

*/
/*
// 7 ) find the sum of an all element

let Arr = [10,20,30,40,50,60];

let sum=0;

for(let i=0; i< Arr.length;i++){
    //  sum += ( sum + Arr[i]); // just an experiment
    sum += Arr[i]; 
}
console.log(sum);
*/

/*
//  8 ) flat method is used to flat the nested array
let Arr = [10,[20,30],50,[70,80]];
console.log(Arr.flat());
*/

/*
// 9) To check weather th array has specific values or not

// Include method is used to check weather te arrays consist perticular element or not 
// it return output in true or false
let Arr = [10,[20,30],50,[70,80]];
console.log(Arr.includes(100));

*/

/*
// 10 ) Sort the arrays in ascending or descending

const Arr = [5,21,52,4,6];

const Asc =  Arr.sort(function(a , b){
    return a - b;
});

console.log("Ascending Arr   : " + (Asc));

const Dec = Arr.sort(function(a,b){
     return b - a;
})

console.log("Ascending Arr   : " + (Asc));

console.log(`Descending Arr  : ${Dec}`);
*/


// 11) Merge two Array and remove Duplicates 

// Set method is used to remove dulpicate from an  array
// Set is a constructor which required new keyword
// several way  to remove duplicate  from array 

let Arr1 = [1,2,3,4,5,6,7,8,9,10,1,2,2,3];
let Arr2 = [2,4,6,8,10];
let Arr =[2,4,6,8];
let Arr3 = new Set(Arr1.concat(Arr2).concat(Arr));
console.log(Arr3);

// let Arr4 = [...new  Set(Arr1)];
// let Arr5 = new Set(Arr3);
// console.log(Arr4);
// console.log(Arr5);



// // Using filter with indexOf to find the repeated elements
let a = [10, 20, 20, 30,30, 40.5 ,40, 50, 50];
a1 = a.filter((item, index) => a.indexOf(item) === index);

console.log(a1);


