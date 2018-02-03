/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
function laugh(num){
    const laughSound = "ha";
    var laughSoundLenght = "";

    if(num > 0 && num < 100){
        for(var i = 0; i < num; i++){
            laughSoundLenght = laughSound + laughSoundLenght;
        }
    }else {
        laughSoundLenght = "Please choose a number betwen 1 and 99";
    }
    return laughSoundLenght + "!";
}

console.log(laugh(4));
