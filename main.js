function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/IuvUPvPys/model.jsonn", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('letterA') 
        img1 = document.getElementById('letterE')
        img2 = document.getElementById('letterI')
        img3 = document.getElementById('letterO')
        img4 = document.getElementById('letterU')
    
    
        if (results[0].label == "vocal a") {
          img.src = 'DancingA.gif';
          img1.src = 'E.png';
          img2.src = 'I.png';
          img3.src = 'O.png';
          img4.src = 'U.png';
        } else if (results[0].label == "Vocal e") {
          img.src = 'A.png';
          img1.src = 'DancingE.gif';
          img2.src = 'I.png';
          img3.src = 'O.png';
          img4.src = 'U.png';
        } else if (results[0].label == "Vocal i") {
          img.src = 'A.png';
          img1.src = 'E.png';
          img2.src = 'DancingI.gif';
          img3.src = 'O.png';
          img4.src = 'U.png';
        }else if (results[0].label == "Vocal o"){
          img.src = 'A.png';
          img1.src = 'E.png';
          img2.src = 'I.png';
          img3.src = 'DancingO.gif';
          img4.src = 'U.png';
        }else if (results[0].label == "Vocal u"){
            img.src = 'A.png';
            img1.src = 'E.png';
            img2.src = 'I.png';
            img3.src = 'O.png';
            img4.src = 'DancingU.gif';
          }
      }
    

}
