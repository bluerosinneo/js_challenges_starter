(function(){
    window.onload = function(){

        //DOM items
        startingPopField = document.querySelector("#startingPop input");
        birthRateField = document.querySelector("#birthRate input");
        noWeeksField = document.querySelector("#numberWeeks input");
        calcButton = document.querySelector("#calcButton");
        resultField = document.querySelector("#result");

        console.log(startingPopField.value);
        console.log(birthRateField.value);
        console.log(noWeeksField.value);

        calcButton.addEventListener("click",function(){
            let startingPop = parseInt(startingPopField.value);
            let birthRate = parseFloat(birthRateField.value);
            let noWeeks = parseInt(noWeeksField.value);

            console.log((1+birthRate)**noWeeks);

            let result = Math.floor(startingPop*((1+birthRate)**noWeeks));

            resultField.innerHTML = 
            "After " + noWeeks + " there should be " + result + " hares";

        });


    };
})();