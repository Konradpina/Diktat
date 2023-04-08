var Usertext = ["Bei·spiel"]
var Wort = 0
var thevoice=1
// var wronginputcount =0
// var winput = document.getElementById() 


function beginndiktat(){
    var wishedtext = document.getElementById("wishedtext")
    wishedtext = wishedtext.value
    wishedtext =wishedtext.replace("  "," ")
    wishedtext =wishedtext.replace("   "," ")
    wishedtext =wishedtext.replace(/(\r\n|\n|\r)/gm, " ")
    Usertext = wishedtext.split(" ")
    var diktatbox = document.getElementById("diktatbox")
    startbox.hidden= true
    diktatbox.hidden=false
    readout()
    document.getElementById("timebox").hidden=false
    document.getElementById("prozentbox").hidden=false
    time("start")
}

function changevoice(){
    
    thevoice++
    if(thevoice ===5){
        thevoice=1
    }
    readout()
}

function righttext(){
    var diktatbox = document.getElementById("diktatbox")
    solution.textContent=""
    //inputdiktat.value = inputdiktat.value.replace(" ","")
    if (inputdiktat.value == " "){
        inputdiktat.value= ""
    }

    if(Usertext[Wort]===""){
        theend()
    }
    
    if(inputdiktat.value === Usertext[Wort]+" "){
        outputdiktat.textContent= outputdiktat.textContent+ " " +Usertext[Wort]
        //console.log(outputdiktat.value)
        inputdiktat.value=""
        theend()
        Wort++
        readout()

        prozent(Usertext.length-1, Wort)
    }
    
    
}


function theend(){
    if(Usertext.length===Wort+2){
        time("stop")
    }
}

function solutiontext(){
    var diktatbox = document.getElementById("diktatbox")
    solution.textContent= Usertext[Wort]

}

function readout(){
    
    var textwirdgelesen = Usertext[Wort];
    textwirdgelesen = textwirdgelesen.replace(".","punkt")
    textwirdgelesen = textwirdgelesen.replace(",","kommar")
    textwirdgelesen = textwirdgelesen.replace("?","fragezeichen")
    textwirdgelesen = textwirdgelesen.replace("!","ausrufezeichen")
    textwirdgelesen = textwirdgelesen.replace("(","klammer auf")
    textwirdgelesen = textwirdgelesen.replace(")","klammer zu")
    textwirdgelesen = textwirdgelesen.replace(":"," doppel punkt")

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[thevoice];
    msg.text = `${textwirdgelesen}`
    speechSynthesis.speak(msg);
}

function wrongletters(){
    var diktatbox = document.getElementById("diktatbox")
    var input = inputdiktat.value
    var rightword = Usertext[Wort]
    var sinput =input.split("") 
    var sword= rightword.split("")
    if (sinput.length!=sword.length){
        if(sword.length>sinput.length){
            return "there are letters missing"
        }else if(sword.length<sinput.length){
            return "there are to many letters"
        }
    }
    for (i=0;i<sword.length; i++){
        if(sword[i]!=sinput[i]){
            return `there is a Mistake at the ${i+1} letter`
        }
    }
    return "there might be somthing wrong with the Spaces"
}
function hint(){
    var diktatbox = document.getElementById("diktatbox")
    solution.textContent= wrongletters()
}