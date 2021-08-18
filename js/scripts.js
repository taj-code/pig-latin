$(document).ready(function() {
  const vowels = ["a" , "e" , "i" , "o" , "u"];
  const consonants = ["b" , "c" , "d" , "f" , "g" , "h" , "j" , "k" , "l" , "m" , "n" , "p" , "q" , "r" , "s" , "t" , "v" , "w" , "x" , "y" , "z"]
  function pigLatin(userInput) {
    let inputArray = userInput.toLowerCase().split("");
    for (i=0; i<inputArray.length; i++) {
      for(j=0; j<vowels.length; j++) {
        for (h=0; )
        if (inputArray[0] === vowels[j]) {
          return userInput.concat("way"); 
        } if else (inputArray[i] === consonants[]{
          return false;
        }
      }
    }
  }
})

// let userInput = $("#userInput").val();