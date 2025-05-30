

/*
let Name=["A","B","C"];
        console.log(Name);

let str="Demo"        ;
let Arr = Array.from(str);
console.log(Arr);
*/

// concate method
/*
let Arr1= [1,2 ,3 ,4];
let Arr2= [5,6 ,7 ,8];
let NewArr = Arr1.concat(Arr2);
console.log(NewArr);
*/

// copy within array
/*
let Arr = [1,2,3,4,5];
Arr.copyWithin(0,4);
console.log(Arr);
// [ 5, 2, 3, 4, 5 ]
*/
// every  method 

// used to check weather operation perfrom on each element or not
/*
let Arr = [2,4,6];
let Result = Arr.every(N => N % 2==0);
console.log(Result);
*/

// fill() element
/*
let arr =[1,2, 3,4];

arr.fill(0,1,4);
console.log(arr);
*/
// find 
// return first elemet which satisfy condition
/*
let arr = [1,2,3,4,5,6,7,8];
let data = arr.find(m => m > 6);
*/
// To find the index present at which index
/*
let data1 = arr.findIndex(m => m >= 6);
console.log(data);
console.log(data1);

/*
let arr = [1,[2,3,4],[5,6,7,8]];
let flatatend = arr.flat(2);
console.log(flatatend);
*/
/*
// not stored in new array
let demo= [1,2,3,4,5,6];
let newDemo=demo.forEach(b=>(b>=2));
console.log(newDemo);
*/

/*
let arr = [1,2,3];
console.log(arr.includes(2));
*/
/*
let arr1= [1,2,3,4,1] ;
console.log(arr1.lastIndexOf(1))
*/
/*
let Arr3 = [1,2,3,4,5,6,7,8,9,10];

Arr3.map(n=>console.log(n+3));
let demo = Arr3.map(n=> n+2);
console.log(demo);
*/

// Arr3.map(n=>console.log(n+3));
// Arr3.map(n=>console.log(n+3));

// filter 
/*
let Arr3 = [1,2,3,4,5,6,7,8,9,10];
let Demo1= Arr3.filter(n=> n % 2==0);
console.log(Demo1);
*/
// let arrays = [1,2,3,4,5,6,7,8,10,20];

// console.log(arrays.pop());

// console.log(arrays);

// console.log(arrays.push(50));
// console.log(arrays.push(40));

// console.log(arrays);

// console.log(arrays.shift());
// console.log(arrays);

// console.log(arrays.unshift());

// console.log(arrays.length);


let arrays = [1,2,3,4,5,6,7,8,10,20,30];
let sum=0;
for(i=0; i<arrays.length;i++){
        sum = sum+arrays[i];
        // console.log(arrays[i]);
}
console.log(sum);

// destructur

console.log(arrays[0]);

// destructure
// we can store element into variable means destructure

let dtsr= [1,2,3,4];
let[n1,n2,n3,n4]=dtsr;
console.log(n3);

// rest 

// spred operator 
/*
let a= [1,2,3,4];
let b = [5,6,7,8];
let demo=[...a,...b,20,30];

console.log(demo);
*/

let fill = [1,2,3,4,5];

let newfil = fill.filter(n=>  n % 2 ===0 );
console.log("data after using fillter function  : "+(newfil));


let newMap= newfil.map(m=> m*2);
console.log("data after using map function : "+(newMap));

let sum1 = newMap.reduce((acc,curr) => {
        return (acc+curr);

});

console.log("data after using reduce fuction : "+(sum1));