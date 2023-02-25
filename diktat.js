var Usertext = ["Bei·spiel"]
var Wort = 0
var thevoice=1

function beginndiktat(){
    var wishedtext = document.getElementById("wishedtext")
    wishedtext = wishedtext.value
    Usertext = wishedtext.split(" ")
    var diktatbox = document.getElementById("diktatbox")
    startbox.hidden= true
    diktatbox.hidden=false
    readout()
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
    
    if(inputdiktat.value === Usertext[Wort]+" "){
        outputdiktat.textContent= outputdiktat.textContent+ " " +Usertext[Wort]
        console.log(outputdiktat.value)
        inputdiktat.value=""
        Wort++
        readout()
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


