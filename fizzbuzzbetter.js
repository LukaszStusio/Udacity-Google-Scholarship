var number = 1;
while (number <= 20){
  var numberModified = (number % 3 === 0) ? ((number % 5 === 0) ? "JuliaJames" : "Julia") : ((number % 5 === 0) ? "James" : number);
    console.log(numberModified);
      number = number + 1;
}
