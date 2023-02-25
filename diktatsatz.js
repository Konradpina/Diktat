var Satz= 0
var Usersatz="satz"
var sentence ="n"
function beginnsatzdiktat(){
    var wishedsatz = document.getElementById("wishedtext")
    wishedsatz = wishedsatz.value
    Usersatz = wishedsatz.split(" ")
    var diktatsatzbox = document.getElementById("diktatsatzbox")
    startbox.hidden= true
    diktatsatzbox.hidden=false
    sentence = Usersatz[Satz]+ " "+ Usersatz[Satz +1]+ " "+ Usersatz[Satz +2]+" "
    readoutsatz()
}

function rightsatz(){
    
    var diktatsatzbox = document.getElementById("diktatsatzbox")
    satzsolution.textContent=""
    //inputdiktat.value = inputdiktat.value.replace(" ","")
    if (inputsatzdiktat.value == " "){
        inputsatzdiktat.value= ""
    }

    if (inputsatzdiktat.value == " Ende"){
        return
    }

    
   
    if(inputsatzdiktat.value === sentence){
        outputdiktatsatz.textContent= outputdiktatsatz.textContent+ " " +sentence
        console.log(outputdiktat.value)
        inputsatzdiktat.value=""
        if(Satz +5< Usersatz.length){
            Satz++
            Satz++
            Satz++
            sentence = Usersatz[Satz]+ " "+ Usersatz[Satz +1]+ " "+ Usersatz[Satz +2]+" "
        }else if (Satz +4< Usersatz.length){
            Satz++
            Satz++
            sentence = Usersatz[Satz +1]+ " "+ Usersatz[Satz +2]+" "
        }else if (Satz +3< Usersatz.length){
            Satz++
            sentence = Usersatz[Satz +2]+" "
        }else{
            sentence= " Ende"
        }
        readoutsatz()
        }

        

        
        
    
    
}

function solutionsatz(){
    if(sentence === " Ende"){
        console.log("Ende!!!")
    }else{
    var diktatsatzbox = document.getElementById("diktatsatzbox")
    satzsolution.textContent= sentence
    }
}
function readoutsatz(){
    if (sentence == " Ende"){
        return
    }
    var satzwirdgelesen = sentence;
    satzwirdgelesen = satzwirdgelesen.replace(".","punkt")
    satzwirdgelesen = satzwirdgelesen.replace(",","kommar")
    satzwirdgelesen = satzwirdgelesen.replace("?","fragezeichen")
    satzwirdgelesen = satzwirdgelesen.replace("!","ausrufezeichen")
    satzwirdgelesen = satzwirdgelesen.replace("(","klammer auf")
    satzwirdgelesen = satzwirdgelesen.replace(")","klammer zu")
    satzwirdgelesen = satzwirdgelesen.replace(":"," doppel punkt")

    var msg = new SpeechSynthesisUtterance();
    msg.text = `${satzwirdgelesen}`
    window.speechSynthesis.speak(msg);
}