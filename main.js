Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_a_picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version = ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xRIUDecut/model.json",modelLoded);


function modelLoded (){
    console.log('Model loded!')
}

function identify_image() {
    img=document.getElementById('captured_image');
    classifier.classify (img, gotResult);
}

function gotResult(error, result) {
    if (error) {

    console.error(error);
    } else {
        console.log(result);
        document.getElementById("show_label").innerHTML = result[0].label;
        document.getElementById("show_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}