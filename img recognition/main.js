Webcam.attach('#camera');
camera=document.getElementById("camera");

Webcam.set({
    height:100,
    width:100,
    image_format:'jpg',
    jpg_quality:99.9
});

function take_snapshot(){
//URI=unique resource identification
Webcam.snap(function(data_uri){
    document.getElementById('#result').innerHTML='<img id="snapshot_image" src="'+data_uri+'">'
});
}
console.log('ml5 version;',ml5.version);
//initilize the imageclassifier with mobilenet
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cBPoBXzo8/model.json',modelLoded);
//when model loded
function modelLoded(){
    console.log('modelLoded!!!');
}
function check(){
    img=getElementById('snapshot_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){console.error(error);}
    else{
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(2);
}}