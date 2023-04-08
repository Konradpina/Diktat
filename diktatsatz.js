var Satz= 0
var Usersatz="satz"
var sentence ="n"
var readagincount= -4
var readaginl=[]
var prozentcount=0

function beginnsatzdiktat(){
    var wishedsatz = document.getElementById("wishedtext")
    wishedsatz = wishedsatz.value
    wishedsatz = wishedsatz.replace(/(\r\n|\n|\r)/gm, " ")
    wishedsatz =wishedsatz.replace("  "," ")
    wishedsatz =wishedsatz.replace("   "," ")
    Usersatz = wishedsatz.split(" ")
    var diktatsatzbox = document.getElementById("diktatsatzbox")
    startbox.hidden= true
    diktatsatzbox.hidden=false
    sentence = Usersatz[Satz]+ " "+ Usersatz[Satz +1]+ " "+ Usersatz[Satz +2]+" ";
    readaginl = sentence.split("")
    readoutsatz()
    document.getElementById("timebox").hidden=false
    document.getElementById("prozentbox").hidden=false
    time("start")
}




function rightsatz(){
    readaginl = sentence.split("")
    readagin()
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
        readagincount=-4;
        prozentcount=prozentcount+3
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
            sentence = Usersatz[Satz +2]+""
        }else{
            sentence= " Ende"
        }
        prozent(Usersatz.length , prozentcount)
        readoutsatz()
        }
        if(Usersatz.length -1 <=prozentcount){
            time("stop")
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
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[thevoice];
    msg.text = `${satzwirdgelesen}`
    window.speechSynthesis.speak(msg);
}

function readagin(){
    if(readagincount < readaginl.length){
        readagincount++;
    }else if(readagincount ===readaginl.length){
        readoutsatz()
        readagincount=-4
    }
}