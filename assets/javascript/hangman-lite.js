(function(){
    window.onload = function(){



        let secretWord = ""



        //DOM objects
        let inputElement = document.querySelector("#letterQuess");

        let messageElement = document.querySelector("#buttonDiv p");

        let letterElements = [];

        letterElements[0] = document.querySelector("#letter0 p");
        letterElements[1] = document.querySelector("#letter1 p");
        letterElements[2] = document.querySelector("#letter2 p");
        letterElements[3] = document.querySelector("#letter3 p");
        letterElements[4] = document.querySelector("#letter4 p");
        letterElements[5] = document.querySelector("#letter5 p");
        letterElements[6] = document.querySelector("#letter6 p");
        letterElements[7] = document.querySelector("#letter7 p");
        letterElements[8] = document.querySelector("#letter8 p");
        letterElements[9] = document.querySelector("#letter9 p");

        // function to set the secret word
        function setSecretWord(){
            // randomly select among the 50 most common 9 letter(char) words
            // note that if you need some help playing the game
            // there will be a console.log() for which word is selected
            // just know that you will be a CHEATER!
            let secretWordIndex = Math.floor(Math.random()*50);
            let secretWordArray = [
                "fireboard", "identical", "chocolate", "Christmas",
                "beautiful", "happiness", "Wednesday", "challenge",
                "celebrate", "adventure", "important", "consonant",
                "Christian", "dangerous", "masculine", "Australia",
                "irregular", "something", "Elizabeth", "knowledge",
                "macaronic", "pollution", "President", "wrestling",
                "pineapple", "adjective", "secretary", "undefined",
                "Halloween", "Amerindic", "ambulance", "alligator",
                "seventeen", "affection", "congruent", "marijuana",
                "community", "different", "vegetable", "influence",
                "structure", "invisible", "wonderful", "packaging",
                "provoking", "nutrition", "crocodile", "education",
                "abounding", "beginning"
            ];
            // set what the secretWord will be
            secretWord = secretWordArray[secretWordIndex];
        }

        setSecretWord();

        // CHEATER!
        console.log(secretWord);


        inputElement.addEventListener("keyup", function(e){
            if(e.which == 13){
                
                // store the inputed character in another variable
                // for readability
                let charIn = inputElement.value;

                inputElement.value = "";

                if(charIn.length == 1){

                    if(secretWord.indexOf(charIn)>=0){
                        let numOfChar = secretWord.split(charIn).length-1;
                        messageElement.innerHTML = "Yeah, the letter '" +
                        charIn + "' exists " + numOfChar + " times in my word";

                        for(let i = 0; i < secretWord.length; i++){
                            if(secretWord[i] == charIn){
                                letterElements[i].innerHTML = secretWord[i]; 
                            }
                        }
                    }
                    else{
                        messageElement.innerHTML = "Nope, that letter doesn't exist in my word.";
                    }

                }
                else{
                    messageElement.innerHTML = "um ... I need a guess ...";
                }

            }
        });
    
    };
})();

