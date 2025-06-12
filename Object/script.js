let person={
    firstName :"Swapnil",
    LastName : "Mahajan",
    Age : 23
}

console.log(`My Name is first Name is ${person.firstName}  and my last Name  ${person.LastName} and my age is ${person.Age} `)

let keys = Object.keys(person);
let values = Object.values(person);
let entries= Object.entries(person);
console.log(keys);
console.log(values);
console.log(entries);


