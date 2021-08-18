
const vowels = ["a" , "e" , "i" , "o" , "u"];
const consonants = ["b" , "c" , "d" , "f" , "g" , "h" , "j" , "k" , "l" , "m" , "n" , "p" , "q" , "r" , "s" , "t" , "v" , "w" , "x" , "y" , "z"]

function firstVowel(word) {
  for (i=0; i<vowels.length; i++) {
    if (word.charAt(0) === vowels[i]) {
      return true;
    }
    return false;
  }
}
function recCons(word) {
  for (i=0; i<consonants.length; i++) {
    if (word.charAt(0) === consonants[i]){
      return true;
    }
    return false;
  }
}

function allCons(word, consonants) {
  const wordArray = word.split(" ");
  let cons = [];
  wordArray.forEach(function(letter) {
    if (consonants.includes(letter)) {
      console.log("are you working?");
      return true;
    } 
    return false
  })
}


function pigLatin(text){
  if (firstVowel(word).valueOf() === true) {
    return word.concat("way");
  } else if ()
}


  // function pigLatin(userInput) {
  //   let inputString = userInput.toLowerCase();
  //   for (i=0; i<inputString.length; i++) {
  //     for(j=0; j<vowels.length; j++) {
  //       for (h=0; h<consonants.length; h++)
  //       if (inputString[0] === vowels[j]) {
  //         return userInput.concat("way"); 
  //       } else if (inputString[i] === consonants[h]) {
  //         let wordCons = [];
  //         wordCons.push(inputString[i]);
  //         return wordCons;
  //       }
  //     }
  //   }
  // }




// let userInput = $("#userInput").val();