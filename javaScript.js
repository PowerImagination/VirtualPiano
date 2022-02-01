document.addEventListener("keydown", function(event) {
    if (event.key == "A" || event.key == "a" ) {
        let audio = new Audio("mp3/A.mp3");
            audio.Play();
        }else if(event.key == "S" || event.key == "s"){
        let audio = new Audio("mp3/S.mp3");
        audio.Play();
    }else if(event.key == "D" || event.key == "d"){
        let audio = new Audio("mp3/D.mp3");
        audio.Play();
    }else if(event.key == "F" || event.key == "f"){
        let audio = new Audio("mp3/F.mp3");
        audio.Play();
    }else if(event.key == "G" || event.key == "g"){
        let audio = new Audio("mp3/G.mp3");
        audio.Play();
    }else if(event.key == "H" || event.key == "h"){
        let audio = new Audio("mp3/H.mp3");
        audio.Play();
    }else if(event.key == "J" || event.key == "j"){
        let audio = new Audio("mp3/J.mp3");
        audio.Play();
    }else if(event.key == "W" || event.key == "w"){
        let audio = new Audio("bmp3/W.mp3");
        audio.Play();
    }else if(event.key == "E" || event.key == "e"){
        let audio = new Audio("bmp3/E.mp3");
        audio.Play();
    }else if(event.key == "T" || event.key == "t"){
        let audio = new Audio("bmp3/T.mp3");
        audio.Play();
    }else if(event.key == "Y" || event.key == "y"){
        let audio = new Audio("bmp3/Y.mp3");
        audio.Play();
    }else if(event.key == "U" || event.key == "u"){
        let audio = new Audio("bmp3/U.mp3");
        audio.Play();
    }
    else{
        console.log("Wrong key is pressed !!");
    }
});
