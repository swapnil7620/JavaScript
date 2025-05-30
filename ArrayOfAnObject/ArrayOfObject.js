
let User =[
    {
        fname :"Swapnil",
        lName :"Mahajan",
        age : 23,
        clName :"NYNC"
    },

    {
        fname :"Suyog",
        lName :"Chaudhari",
        age   :22,
        clName :"NYNC"
    }
]

// console.log(User[0].fname);
// console.log(User[0].lName);
// console.log(User[0].age);
// console.log(User[0].clName);
// console.log(``);
// console.log(User[1].fname);
// console.log(User[1].lName);
// console.log(User[1].age);
// console.log(User[1].clName);

for (let i = 0; i < User.length; i++) {

    // console.log(`Fname : ${User[i].fname}  lname : ${User[i].lName} age : ${User[i].age}  Clname :${User[i].clName}` )
   }

   const target ={a:1 , b:2};
   const Source ={ b:4 ,c:8};

   target.a=10;

   const returnedTarget =Object.assign(target,Source);
//    console.log(target);

  

    const person = {
            fullName: function () {
                return this.firstName + " " + this.lastName;
            }
        }
        const person1 = {
            firstName: "John",
            lastName: "Doe"
        }
        const person2 = {
            firstName: "Mary",
            lastName: "Doe"
        }

        // This will return "John Doe":
        console.log(person.fullName.apply(person1))