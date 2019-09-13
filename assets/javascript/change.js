

(function(){
    window.onload = function(){
        
        console.log("hey");


        let amount = 93;

        let changeList = new Array(4).fill(0);

        // if amount is positive and an integer
        // only then try to make change
        if( (amount > 0) && (amount%1 == 0) ){
            // set for 20's of our changeList
            changeList[0] = Math.floor(amount/20);
            amount = amount%20;

            // set for 10's of our changeList
            changeList[1] = Math.floor(amount/10);
            amount = amount%10;

            // set for 5's of our changeList
            changeList[2] = Math.floor(amount/5);
            amount = amount%5;

            // set for 1's of our changeList
            changeList[3] = amount;

            console.log(changeList);

        }
        else{
            console.log("nope");
        }

        

    };
})();