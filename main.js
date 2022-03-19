
function startClassification() {

    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier  = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lVPiCG4o-/model.json', modelReady);
}

function modelReady() {

     classifier.classify(gotResults);

}


function gotResults(error, results) {

    if (error) {


        console.error(error);

    }
else {


    console.log(results);
    random_number_r = Math.floor(Math.random() *255) + 1;
    random_number_g = Math.floor(Math.random() *255) + 1;
    random_number_b = Math.floor(Math.random() *255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb("+ random_number_r+", "+random_number_g+", "+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+ random_number_r+", "+random_number_g+", "+random_number_b+")";
    
    img = document.getElementById('Animals1');
    img1 = document.getElementById('Animals2');
    img2 = document.getElementById('Animals3');
    img3 = document.getElementById('Animals4');

    if (results[0].label == "meow") {

        img.src = "CATTIE GIFF.gif";
        img1.src = "doggie.jpeg";
        img2.src = "MOOOO.jpeg";
        img3.src = "TIGERRR.jpeg";
    } 

    else if (results[0].label == "Background Noise") {

        img.src = "domestic-cat_thumb_square.webp";
        img1.src = "doggie.jpeg";
        img2.src = "MOOOO.jpeg";
        img3.src = "TIGERRR.jpeg";
    } 


    else if (results[0].label == "mooing") {

        img.src = "domestic-cat_thumb_square.webp";
        img1.src = "doggie.jpeg";
        img2.src = "MOOOO GIFFF.gif";
        img3.src = "TIGERRR.jpeg";
    } 

    else if (results[0].label == "roar") {

        img.src = "domestic-cat_thumb_square.webp";
        img1.src = "doggie.jpeg";
        img2.src = "MOOOO.jpeg";
        img3.src = "TIGER GIFF.gif";
    } 

    else {

        img.src = "domestic-cat_thumb_square.webp";
        img1.src = "DJ_Dog.gif";
        img2.src = "MOOOO.jpeg";
        img3.src = "TIGER GIFF.gif";
    } 
    
}

}
