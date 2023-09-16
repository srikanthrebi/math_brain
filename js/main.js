let main = document.getElementById("main_num")

let num_1 = document.getElementById("num_1")
let num_2 = document.getElementById("num_2")
let num_3 = document.getElementById("num_3")
let res = document.getElementById("res")
let input = document.getElementById("add")


// let arry = [0,1,2,3,4,5,6,7,8,9]
// num_1.innerHTML = arry[Math.floor(Math.random())]
// num_2.innerHTML = arry[Math.floor(Math.random())]
// num_3.innerHTML = arry[Math.floor(Math.random())]


function rand(max){
num_1.innerHTML = Math.floor(Math.random()*max)
num_2.innerHTML = Math.floor(Math.random()*max)
res.innerHTML = Math.floor(Math.random()*max)
}
rand(9)


function result(){
    if(input.value=='*'){
       var total = num_1.innerText * num_2.innerText
    //    res.innerText=total

    //    check()
     if(res.innerHTML==total){
        console.log("success ");
    }
    else{
        console.log("failed");
    }
    }
}

// function check(){
//     if(res.innerHTML==total){
//         console.log("success da ");
//     }
// }
 

function add(f){
    input.value+=f 
    result()
}



