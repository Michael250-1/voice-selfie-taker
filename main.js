var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking your picture in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
camera=document.getElementById("camera");
