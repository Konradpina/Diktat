//const text =["Das","ist","ein","Satz"]


Longtext = "In einer Gedichtanalyse untersuchst du ein Gedicht genau auf seinen Inhalt, seine Struktur und seine sprachliche Gestaltung. Typische Merkmale eines Gedichts, die du dabei herausarbeitest, betreffen zum Beispiel die Gedichtart, die Reime, die Strophen und die Stilmittel.Oft schließt sich an die eigentliche Analyse eine Gedichtinterpretation an. Darin beschreibst du nicht nur die sprachlichen Auffälligkeiten des Gedichts, sondern fügst auch eine Deutung hinzu. "
var text = "hallo"
function gettxet(){
   
    var textimput = document.getElementById("textvorgabe")
    Longtext = textimput.value
    console.log(Longtext)
    textimput.className="done"
    
    text = Longtext.split(" ")
    readnow()

    var anfangknopf = document.getElementById("nochmalknopf")
    anfangknopf.className="button"
    anfangknopf = document.getElementById("losungknopf")
    anfangknopf.className="button"



    var unwichtigertexteins = document.getElementById("anfangtext1")
    unwichtigertexteins.className="done"
    unwichtigertexteins = document.getElementById("anfangtext2")
    unwichtigertexteins.className="done"
    unwichtigertexteins = document.getElementById("anfangtext3")
    unwichtigertexteins.className="done"
    unwichtigertexteins = document.getElementById("anfangtext4")
    unwichtigertexteins.className="done"
}


var q =2

function start(){
    var start = document.getElementsByClassName("diktat")
    start.hidden= false
}


//var text = Longtext.split(" ")


function test(){
    var input = document.getElementById("task2").value
    console.log("i am a button ",input)
    
    
    
}
var i = 0
var readonetime = 0
var allesgeschrieben = ""
function test2(Longtext){
    
    var solution = document.getElementById("solution")
    solution.innerText = ""
    var  a = text[i]
    var input = document.getElementById("task2").value
    input = input.replaceAll(" ","") 
    if(input === a){
        allesgeschrieben = allesgeschrieben + " "+a
        var eingabefeld = document.getElementById("task2")
        eingabefeld.value ="";
        console.log(allesgeschrieben)
        i++
        readnow()
        var Überschrift = document.getElementById("head")
        Überschrift.innerText = allesgeschrieben
        //console.log("ja")
        var t =2
    }else{
        var t =0
      //readonetime ++
      //console.log(readonetime)
    }
        
}

    

function readnow( readonetime){
        var msg = new SpeechSynthesisUtterance();
        var  t = text[i]
        t = t.replaceAll(","," komma")
        t = t.replaceAll("."," punkt")
        t = t.replaceAll("?"," fragezeichen")
        msg.text = `w... ${t} `;
        window.speechSynthesis.speak(msg);
}


function solution(){
    var  a = text[i]
    var solution = document.getElementById("solution")
    solution.innerText = a
}





function t(){
    if (input< 140){
        var msg = new SpeechSynthesisUtterance();
    msg.text = `w...du bis ${input} Jahre alt`;
    window.speechSynthesis.speak(msg);
    }else{
        var msg = new SpeechSynthesisUtterance();
    msg.text = `w...du bis glaube ich nicht ${input} Jahre alt`;
    window.speechSynthesis.speak(msg);
    }
}

