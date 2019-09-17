(function(){
    window.onload = function(){

        let testWord = "missim";

        if(testWord.split("").reverse().join("") == testWord){
            console.log("It's a Pally (from functions)");
        }
        else{
            console.log("Not a Pally (from functions)");
        }

        let isPallyBool = true;

        // if mirror CharS don't match make bool false
        for(let i = 0; i < testWord.length ; i++){

            //console.log(testWord[i] + " : " + testWord[testWord.length - 1 - i])

            if(testWord[i] != testWord[testWord.length - 1 - i]){
                isPallyBool = false;
            }
        }

        if(isPallyBool == true){
            console.log("It's a Pally (from loop)");
        }
        else{
            console.log("Not a Pally (from loop)");
        }




    };
})();