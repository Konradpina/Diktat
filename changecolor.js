function colorred(){
    color = document.getElementsByClassName("textcolor")
    //color = document.getElementById("this")
    
    for (var e=0;e < color.length;e++){
        color[e].style.color="red"
        color[e].style.borderColor="red"
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
        color[e].style.color="blue"
        color[e].style.borderColor="blue"
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

