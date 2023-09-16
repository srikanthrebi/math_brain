let container=document.querySelector(".container").style.display='none';

let btn = document.querySelector("#start")

let time = document.querySelector("#time")

let userInput = document.querySelector("#user_input")

let score = document.querySelector("#score")

let total_score = document.querySelector("#total_score")

let response=document.querySelector("#response")

let answer = 8;
let marks =0;
let fnum , snum ,operator

const op= ["+","-","*","/","%"] 

let fnumUi = document.querySelector("#fnumUi")
let snumUi = document.querySelector("#snumUi")
let opraUi = document.querySelector("#opra")


btn.addEventListener("click",function(e){
    // container.style.display='block'
    document.querySelector(".container").style.display='block';

    document.querySelector("#start").style.display='none'

    seconds()
})

userInput.addEventListener("keypress",function(e){
    
    if(e.which===13){
       
        if(answer=== Number(userInput.value)){


        
            //update score

            marks +=3
            response.innerHTML=`<h2 style="color: green;">Correct</h2>`
           
        }

        else{
            marks-=3
            response.innerHTML=`<h2 style="color: red;">InCorrect</h2>`
        }
        userInput.value=""
        //generate new ques
        fnum = Math.floor(Math.random()*20)
        snum = Math.floor(Math.random()*20)
        operator = op[Math.floor(Math.random()*op.length)]

        fnumUi.textContent=fnum
        snumUi.textContent=snum
        opraUi.textContent=operator

        if(operator == "+"){

            answer = fnum + snum
        }
        else if(operator == "-"){

            answer = fnum - snum
        }
        else if(operator == "/"){

            answer = fnum / snum
        }
        else if(operator == "*"){

            answer = fnum * snum
        }
        else{

            answer = fnum % snum
        }
        score.textContent=marks
    }
})


function seconds(){
    let x = setInterval(function(){

        if(time.textContent>0){
            let newTime = time.textContent - 1
            time.textContent = newTime

        }
        else{
            clearInterval(x)
            // container hidden
            document.querySelector(".container").style.display='none';
            // reset timer 
            time.textContent = 30
            // start btn show 
            document.querySelector("#start").style.display='block'
            //score display 
            total_score.innerHTML=`<h2>total score is ${score.innerHTML}</h2>`
            //score reset  
            marks = 0
            response.innerHTML=""
            score.innerHTML=""
           
        }
    },1000)
}