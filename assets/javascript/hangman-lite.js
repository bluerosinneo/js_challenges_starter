(function(){
    window.onload = function(){

        
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
        let secretWord = secretWordArray[secretWordIndex];

        // CHEATER!
        console.log(secretWord);


    };
})();

