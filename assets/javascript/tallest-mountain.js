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

    let mountArrayLengths = [];
    mountArrayLengths[0] = document.querySelector("#mount0length");
    mountArrayLengths[1] = document.querySelector("#mount1length");
    mountArrayLengths[2] = document.querySelector("#mount2length");
    mountArrayLengths[3] = document.querySelector("#mount3length");
    mountArrayLengths[4] = document.querySelector("#mount4length");
    mountArrayLengths[5] = document.querySelector("#mount5length");
    mountArrayLengths[6] = document.querySelector("#mount6length");
    mountArrayLengths[7] = document.querySelector("#mount7length");
    mountArrayLengths[8] = document.querySelector("#mount8length");
    mountArrayLengths[9] = document.querySelector("#mount9length");

    let maxIndex = 0;
    let maxHeight = 0;

    let randomHeights = [];

    for(let i = 0; i < mountArray.length; i++){
        // let mountHeight = (Math.floor(Math.random()*300 + 5));
        randomHeights.push(Math.floor(Math.random()*300 + 5));
        // if(mountHeight > maxHeight){
        //     maxHeight = mountHeight;
        //     maxIndex = i;
        // }

        mountArray[i].style.height = randomHeights[i] + "px";
        mountArrayLengths[i].innerHTML = randomHeights[i];
    }

    // I used an array to find and identify the index location of the
    // tallest mountain
    maxHeight = Math.max(...randomHeights);
    maxIndex = randomHeights.indexOf(maxHeight);

    mountArray[maxIndex].style.backgroundColor = "yellow";

})();