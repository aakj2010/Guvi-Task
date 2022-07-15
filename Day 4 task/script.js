// 1st Question

var obj1 = { name: "Ayrin", age:10 };
var obj2 = { age:10, name: "Ayrin" };
var JSON=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
  for(let key in obj1){
    if(obj1[key]==obj2[key]){
      continue;
    }
    else{
      JSON=false;
      break;
    }
  }
}
else{
  JSON=false;
}
console.log(JSON)



// // 2nd Question
let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")

request.onload =function(){
  console.log(request.responseText);
  let result = JSON.parse(request.response);
  for(let key in result){
    console.log(result[key].flag);
  }
}
request.onerror =function(){  
  console.log("something went wrong");
}
request.send();


// // 3rd Question
let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")

request.onload =function(){
    let result=JSON.parse(request.responseText);
    for(let key in result){
        console.log(result[key].name.common);
        console.log(result[key].region);
        console.log(result[key].subregion);
        console.log(result[key].population);
    }
};
request.send();