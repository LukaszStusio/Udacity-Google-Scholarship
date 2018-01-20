/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var bottlesSongText;
while (num >= 0/* your stop condition goes here */) {
    // check value of num
      if(num <= 99 && num >= 0 && num !== 1){
        // print lyrics using num
        bottlesSongText = num + " Bottles of Juice";
        // don't forget to check pluralization on the last line!
      }else
      bottlesSongText = num + " Bottle of Juice";
      console.log(bottlesSongText);
    // decrement num
    num = num - 1;
}
