var timer = setInterval(count, 1000)
let count1 = 10;
function count(){
    count1--;
    console.log(count1);
    var target = document.getElementById('test');
    target.innerText=count1;
    if(count1==0){
        clearInterval(timer)
    }
    if(count1==0){
        console.log("Happy Independence Day")
        var target = document.getElementById('test');
        target.innerText="Happy Independence Day";
    }
}

