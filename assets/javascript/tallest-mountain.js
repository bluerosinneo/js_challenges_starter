(function(){

    // Gather the dome stuff

    let mountArray = []
    mountArray[0] = document.querySelector("#mount0");
    mountArray[1] = document.querySelector("#mount1");
    mountArray[2] = document.querySelector("#mount2");
    mountArray[3] = document.querySelector("#mount3");
    mountArray[4] = document.querySelector("#mount4");
    mountArray[5] = document.querySelector("#mount5");
    mountArray[6] = document.querySelector("#mount6");
    mountArray[7] = document.querySelector("#mount7");
    mountArray[8] = document.querySelector("#mount8");
    mountArray[9] = document.querySelector("#mount9");

    let maxIndex = 0;
    let maxHeight = 0;

    for(let i = 0; i < mountArray.length; i++){
        let mountHeight = (Math.random()*370 + 5);
        if(mountHeight > maxHeight){
            maxHeight = mountHeight;
            maxIndex = i;
        }
        mountArray[i].style.height = mountHeight + "px";
    }

    mountArray[maxIndex].style.backgroundColor = "yellow";

})();