


 // json javascript object notation
let person = {
    firstname: "ajay",
    lastname: "dange",
    age: 28
}

// let { firstname, ...restdata } = person;
// console.log(firstname);
// console.log(restdata);
// console.log(person);

//  console.log(`My name is :  ${person.firstname} last Name : ${person.lastname} and my age is : ${person.age}`);


 let keys = Object.keys(person);
 let Values = Object.values(person);
 let Entery = Object.entries(person);

 console.log(keys);
 console.log(Values);
 console.log(Entery);

  let arr=[1,2,3,4];
  let[n1,n2,n3,n4]=arr;
        console.log(n2);