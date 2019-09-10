(function(){

    let coinFlipper = document.querySelector("#coinFLipper");
    let coin = document.querySelector("#coin");

    coinFlipper.addEventListener("click",function(){

        if(Math.random() > 0.5){
            coin.style.backgroundColor = "red";
        }
        else{
            coin.style.backgroundColor = "green";
        }

    });




})();