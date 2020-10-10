Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:100
    });
    
    camera=document.getElementById("camera");
    Webcam.attach("camera");
    
    function takepic() {
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML='<img id="captured_pic" src="'+data_url+'">';
    });
    }
    
    console.log("ml5 version",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eIfhGsEPV/model.json",model_loaded);
    
    function model_loaded() {
    console.log("model loaded!");
    }
    
    function check() {
    img=document.getElementById("captured_pic");
    classifier.classify(img,check_result);
    }
    
    function check_result(error,result) {
    if (error) {
    console.log(error);
    }
    else {
    console.log(result);
    document.getElementById("result_emotion_name").innerHTML=result[0].label;
    document.getElementById("result_emotion_name2").innerHTML=result[1].label;
    if (result[0].label=="amazing") {
        document.getElementById("update_emoji").innerHTML="&#x1F44C;";
        }
    if (result[0].label=="welcome") {
    document.getElementById("update_emoji").innerHTML="&#128591;";
    }
    if (result[0].label=="rock") {
    document.getElementById("update_emoji").innerHTML="&#129304;";
    }
    if (result[0].label=="victory") {
    document.getElementById("update_emoji").innerHTML="&#9996;";
    }
    if (result[0].label=="like") {
        document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if (result[0].label=="punch") {
            document.getElementById("update_emoji").innerHTML="&#128074;";
            }
            if (result[0].label=="dislike") {
                document.getElementById("update_emoji").innerHTML="&#128078;";
                }

               if (result[1].label=="amazing") {
                    document.getElementById("update_emoji2").innerHTML="&#x1F44C;";
                    }         
                if (result[1].label=="welcome") {
    document.getElementById("update_emoji2").innerHTML="&#128591;";
    }
    if (result[1].label=="rock") {
    document.getElementById("update_emoji2").innerHTML="&#129304;";
    }
    if (result[1].label=="victory") {
    document.getElementById("update_emoji2").innerHTML="&#9996;";
    }
    if (result[1].label=="like") {
        document.getElementById("update_emoji2").innerHTML="&#128077;";
        }
        if (result[1].label=="punch") {
            document.getElementById("update_emoji2").innerHTML="&#128074;";
            }
            if (result[1].label=="dislike") {
                document.getElementById("update_emoji2").innerHTML="&#128078;";
                }
    }
    }
