function colorred(){
    color = document.getElementsByClassName("textcolor")
    //color = document.getElementById("this")
    
    for (var e=0;e < color.length;e++){
        color[e].style.color="rgb(255, 50, 0)"
        color[e].style.borderColor="rgb(255, 50, 0)"
        color[e].style.boxShadow= "0 0 0 "
    }

    

    
}

function colorgreen(){
    color = document.getElementsByClassName("textcolor")
    //color = document.getElementById("this")
    for (var e=0;e < color.length;e++){
        color[e].style.color="rgb(102, 255, 0)"
        color[e].style.borderColor="rgb(102, 255, 0)"
    }

//     var t =document.styleSheets[0].cssRules[9].cssText
//    t=".hoverschadow:hover { box-shadow: rgb(102, 255, 0) 10px 10px 10px; }"


    // color = document.getElementsByClassName("hoverschadow")
    // for (var e=0;e < color.length;e++){
    //     color.classList.remove("hoverschadow")
    // }
}

function colorblue(){
    color = document.getElementsByClassName("textcolor")
    //color = document.getElementById("this")
    
    for (var e=0;e < color.length;e++){
        color[e].style.color="rgb(0, 50, 255)"
        color[e].style.borderColor="rgb(0, 50, 255)"
        color[e].style.boxShadow= "0 0 0 "
    }
}

function coloryellow(){
    color = document.getElementsByClassName("textcolor")
    //color = document.getElementById("this")
    
    for (var e=0;e < color.length;e++){
        color[e].style.color="rgb(255, 242, 0)"
        color[e].style.borderColor="rgb(255, 242, 0)"
        color[e].style.boxShadow= "0 0 0 "
    }
}

function randomcolor(){
    color = document.getElementsByClassName("textcolor")
    var random1= Math.floor(Math.random()*255+1)
        var random2= Math.floor(Math.random()*255+1)
        var random3= Math.floor(Math.random()*255+1)
    for (var e=0;e < color.length;e++){
        color[e].style.color=`rgb(${random1}, ${random2}, ${random3} )`
        color[e].style.borderColor=`rgb(${random1}, ${random2}, ${random3} )`
        color[e].style.boxShadow= "0 0 0 "
    }
}

function partycolor(){
    color = document.getElementsByClassName("textcolor")
    for (var e=0;e < color.length;e++){
        var random1= Math.floor(Math.random()*255+1)
        var random2= Math.floor(Math.random()*255+1)
        var random3= Math.floor(Math.random()*255+1)
        color[e].style.color=`rgb(${random1}, ${random2}, ${random3} )`
        color[e].style.borderColor=`rgb(${random1}, ${random2}, ${random3} )`
        color[e].style.boxShadow= "0 0 0 "
    }
}


var colorbar = document.getElementById("colorbar");
var colorbarbutton = document.getElementById("colorbarbutton");


colorbarbutton.addEventListener("mouseover", function(event) {
 colorbar.classList.add("coloroptions")
 colorbar.classList.remove("colorbanohover")

 
});
colorbarbutton.addEventListener("mouseout", function(event) {
    
    colorbar.classList.remove("coloroptions")
    colorbar.classList.add("colorbanohover")
   
    
   });

colorbar.addEventListener("mouseover", function(event) {
 colorbar.classList.add("coloroptions")
 colorbar.classList.remove("colorbanohover")

 
});
colorbar.addEventListener("mouseout", function(event) {
    colorbar.classList.remove("coloroptions")
    colorbar.classList.add("colorbanohover")
   
    
   });

// function partycolor(){
//     color = document.getElementsByClassName("textcolor")
//     for (var e=0;e < color.length;e++){
//         var random1= Math.floor(Math.random()*255+1)
//         var random2= Math.floor(Math.random()*255+1)
//         var random3= Math.floor(Math.random()*255+1)
//         var random5= Math.floor(Math.random()*255+1)
//         var random4= Math.floor(Math.random()*255+1)
//         var random6= Math.floor(Math.random()*255+1)
//         color[e].style.color=`rgb(${random1}, ${random2}, ${random3} )`
//         color[e].style.borderColor=`rgb(${random4}, ${random5}, ${random6} )`
//         color[e].style.boxShadow= "0 0 0 "
//     }
// }



//header:
function prozent(length, word) {
    if(length => word){
        length=length
        word=word*100
        var prozentbar =document.getElementById("prozentbar")
        prozentbar.innerText=`${Math.round(word/length)}%`
     }else if(length===word){
       console.log("100%") 
     }
}

function time(option){
    if(option==="start"){
         timedtime =setInterval(timer, 1000)    
    }else if(option="stop"){
        window.clearInterval(timedtime)
    }
}
var seconds=0
var minutes=0
var houers=0
var days=""
function timer(){
    seconds++
    if(seconds===60){
        seconds=0
        minutes++
    }
    if(minutes===60){
        minutes=0
        houers++
    }
    if(houers===24){
        houers=0
        days++
    }
    
    document.getElementById("timedisplay").innerText=`${houers}:${minutes}:${seconds}`
}
 
function hidetime(){
    document.getElementById("hidetime").classList.add("seeheight");
}
function schowtime(){
    document.getElementById("hidetime").classList.remove("seeheight");
}
function hideprozent(){
    document.getElementById("hideprozent").classList.add("seeheight");
}

function schowprozent(){
    document.getElementById("hideprozent").classList.remove("seeheight");

}