var Wordcount= 0
var Userword="word"
var word =""
const beforandafterword=[]
const wrongword=[] 
const supposedword=[]
righttimes= 0
wrongtimes= 0
Correctioncount =0


function beginnworddiktat(){
    var wishedword = document.getElementById("wishedtext")
    wishedword = wishedword.value
    wishedword = wishedword.replace(/(\r\n|\n|\r)/gm, " ")
    Userword = wishedword.split(" ")
    var diktatwordbox = document.getElementById("diktatwordbox")
    startbox.hidden= true
    diktatwordbox.hidden=false
    word = Userword[Wordcount]+" "
    readoutword()
    document.getElementById("timebox").hidden=false
    document.getElementById("prozentbox").hidden=false
    time("start")
}

function rightword(){
    var diktatwordbox = document.getElementById("diktatwordbox")
    
    wordsolution.textContent=""
    if (inputworddiktat.value === " "){
        inputworddiktat.value=""
    }

    
    if (inputworddiktat.value.includes(" ") === true){
        if (inputworddiktat.value === word){
            righttimes++
        }else if (inputworddiktat.value != word){
            
            wrongword.push(inputworddiktat.value)
            supposedword.push(word)
            beforandafterword.push(Wordcount)
            wrongtimes++;
        }
        inputworddiktat.value=""
        Wordcount++
        word = Userword[Wordcount]+" "
        prozent(Userword.length, Wordcount)
        if (Userword.length === Wordcount ){
            startcorrection()
        }else{
            readoutword()
        }
        
    }

    
    
}

function solutionword(){
    var diktatcorectionbox = document.getElementById("correctionbox")
    wordsolution.textContent= supposedword[Correctioncount]

    
}

function startcorrection(){
    var diktatwordbox = document.getElementById("diktatwordbox")
    diktatwordbox.hidden=true
    var diktatcorectionbox = document.getElementById("correctionbox")
    beforeword.textContent=Userword[beforandafterword[Correctioncount]-1]
    afterword.textContent=Userword[beforandafterword[Correctioncount]+1]
    correctionword.textContent=wrongword[Correctioncount]
    diktatcorectionbox.hidden=false
    var theprozent= 100*wrongtimes/(righttimes+wrongtimes)
    theprozent=Math.round(theprozent)
    correctionhead.textContent=`${righttimes} were Right, ${wrongtimes} Wrong. Thats ${theprozent}% wrong `
    word=supposedword[Correctioncount]
    readoutword()

}

function rightcorrectionword(){
    var diktatwordbox = document.getElementById("diktatwordbox")
    wordsolution.textContent=""
    //inputdiktat.value = inputdiktat.value.replace(" ","")
    if (inputdiktat.value == " "){
        inputdiktat.value= ""
    }

    
    if(inputwordcorrection.value === supposedword[Correctioncount]){
        display1.textContent= `${supposedword[Correctioncount]} != ${wrongword[Correctioncount]}`
        inputwordcorrection.value=""
        Correctioncount++
        beforeword.textContent=Userword[beforandafterword[Correctioncount]-1]
        afterword.textContent=Userword[beforandafterword[Correctioncount]+1]
        correctionword.textContent=wrongword[Correctioncount]
        word=supposedword[Correctioncount]
        readoutword()
    }
    if(Correctioncount=== supposedword.length-1){
        time("stop")
    }
}

function readoutword(){
    var wordwirdgelesen = word;
    wordwirdgelesen = wordwirdgelesen.replace(".","punkt")
    wordwirdgelesen = wordwirdgelesen.replace(",","kommar")
    wordwirdgelesen = wordwirdgelesen.replace("?","fragezeichen")
    wordwirdgelesen = wordwirdgelesen.replace("!","ausrufezeichen")
    wordwirdgelesen = wordwirdgelesen.replace("(","klammer auf")
    wordwirdgelesen = wordwirdgelesen.replace(")","klammer zu")
    wordwirdgelesen = wordwirdgelesen.replace(":"," doppel punkt")

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[thevoice];
    msg.text = `${wordwirdgelesen}`
    window.speechSynthesis.speak(msg);
}