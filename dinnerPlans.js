function commonGround(a, b){

  var wordsA = a.split(/\s+/g),
  wordsB = b.split(/\s+/g),
  result = "";

  if(a.indexOf(b) >= 0) {
    result = b;
  } else if(b.indexOf(a) >= 0) {
    result = a;
  } else {
    for(var i=0; i<wordsA.length; i++) {
      for(var j=0; j<wordsB.length; j++){
        if(wordsA[i].indexOf(wordsB[j]) >=0 && wordsB[j].indexOf(wordsA[i]) >=0){
          result = wordsB[j];
        }
      }
    }
    
    if(result == "") {
      result = "death";
    }
  }

  return result;
  
}

// alt by other users

// function commonGround(a, b) {
//   return a.split(" ").filter(w=>b.indexOf(w)!=-1).join(" ") || "death";
// }

// or

// const commonGround=(a, b)=>((b,a)=>a.filter((c,i)=>b.indexOf(c)!=-1 && a.indexOf(c)==i).join(" "))(a.split(" "), b.split(" ")) || "death";

//or

// var commonGround = (a,b) => b.split(' ').filter(w => a.indexOf(w) !== -1).join(' ') || "death";
