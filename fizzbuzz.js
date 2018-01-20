/*
  Programming Quiz: JuliaJames (4-1)
 */

let x = 1;
let ret;
while (x <= 20 ) {
    if((x % 5 === 0) && (x % 3 === 0)){
        ret = "JuliaJames";
    }else if(x % 5 === 0){
        ret = "James";
    }else if(x % 3 === 0){
        ret = "Julia";
    }else if(x % 5 !== 0 && x % 3 !== 0){
        ret = x;
    }
    console.log(ret);
    x = x + 1;
}
