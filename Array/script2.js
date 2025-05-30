// 10 ) Sort the arrays in Ascending or Descending

const Arr = [5,21,52,4,6];

const Asc =  Arr.sort(function(a , b){
    return a - b;
});


console.log("Ascending Arr   : " + (Asc));


setTimeout(() => {
    const Dec = Arr.sort(function(a , b){
        return b - a;
    })
    console.log(`Descending Arr  : ${Dec}`);
}, 1000);



    

  setTimeout(()=>{
    console.log("Ascending Arr   : " + (Asc));
  },5000);




