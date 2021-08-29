# _Pig Latin_

#### _This website._

#### By _**Tajo Fisher**_

## Technology Used

* HTML 
* CSS
* JS

## Description

* A website containing information on the use of Pig Latin. 

## Known Bugs 

* _No Known issues_ 

## License

* [MIT](link)
* copyright(c) 2021
* [Click here](link) 

## Contact Information 

Tajo Fisher _tajofisher4@gmail.com_

```javascript

Test: "It splits the inputed string into an array."
code: 
userInput = "cat";
let inputArray = userInput.split("");
return inputArray
Expected output: ["c", "a", "t"]

// Test: "It ignores non-alphabetical characters."
// Code: pigLatin("*&$92% ");
// Expected Output: 0

Test: "It recognizes a single vowel regardless of capitilization."
Code: pigLatin("a");
Expected Output: true

test: "It recognizes when the first letter of the word is a vowel."
code: pigLatin("and")
Expected Output: 1

test: "When the first letter of the word is a vowel it will add way."
code: pigLatin("and")
Expected OutPut: "andway"

test: "It recognizes a consonant."
code: pigLatin("c")
Expected OutPut: 1

test: "It recognizes multiple consonants in a word."
code: pigLatin("cat")
Expected OutPut: 2

test: "It recognizes consonants at the begining of the word."
code: pigLatin("chart")
Expected OutPut: 2

test: "It recognizes index[1]=q as a vowel"


test: "It moves the consonants from the begining of the word to end and adds ay."
code: pigLatin("chart")
Expected OutPut: "artchay"
 
test: "It recognizes when index[0] = q and index[1] = u."
code: pigLatin("quote")
Expected OutPut: 1

test: "It recognizes when index[0] = q and index[1] = u and moves them to the back of the word and adds ay."
code: pigLatin("quote")
Expected OutPut: "otequay"
