function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
  }
  return line + "\n";
}

function buildTriangle(length){
      var ret = "";
      for(var i = 1; i <= length; i++){
        ret += makeLine(i);
      }
      return ret;
}
console.log(buildTriangle(10));
