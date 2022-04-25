// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { it, expect } = require("@jest/globals")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest








// // --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// // a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


describe('coded', () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it('takes in a string and returns a coded message.', () => {
        expect(coded(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
        expect(coded(secretCodeWord2)).toEqual("G0bbl3dyg00k");
        expect(coded(secretCodeWord3)).toEqual("3cc3ntr1c");
    });
});


// // b) Create the function that makes the test pass.

// Pseudo:
// create function named "coded"
// input param named "string"
// create new variable called "newstring" and make it equal to param "string"
// use the replace() method on param "string" to exchange letters
// create another variable named "newstring2" and make it equal to "newstring" and use the replace() method to exchange the next letter. create new variable for each letter that needs to be exchanged. 

const coded = (string) => {

    let newstring = string.replace(/a|A/g, "4")
    let newstring2 = newstring.replace(/e|E/gi, "3")
    let newstring3 = newstring2.replace(/i|I/gi, "1")
    let newstring4 = newstring3.replace(/o|O/gi, "0")

    return newstring4
    
  }












// // --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// // a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]



describe('specific', () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it('takes in an array of words and a single letter and returns all the words that contain that particular letter.', () => {
        expect(specific(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"]);
        expect(specific(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
    });
});


// // b) Create the function that makes the test pass.

// Pseudo:
// create a function called "specific"
// create 2 params named "array" and "letter"
// return the array that uses the filter() method 
// verify the string includes a specific letter using the includes() method on the "letter" parameter and use an "or" to check uppercase letters.

const specific = (array, letter) => {

    return array.filter(string => { return string.includes(letter) || string.includes(letter.toUpperCase())}) 

   }














// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe('fullhouse', () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    it('takes in an array of 5 numbers and determines whether or not the array is a “full house”.', () => {
        expect(fullhouse(hand1)).toBeTruthy();
        expect(fullhouse(hand2)).toBeFalsy();
        expect(fullhouse(hand3)).toBeFalsy();
    })
})

// b) Create the function that makes the test pass.

// Pseudo:
// create a function named "fullhouse" that takes in a parameter named "array"
// create an if else statement to determine whether index "0" is equal to index "1" and "2" for the three of a kind
// add an "&&" to determine if index "3" is equal to index "4" for the pair and return true if condition is met 
// add an "or" to determine if index "0" is equal to index "2" and "3" for the three of a kind, add an "&&" to determine if index "1" is equal to index "4" for the pair and return true if condition is met 
// add an "or" to determine if index "0" is equal to index "3" and "4" for the three of a kind, add an "&&" to determine if index "1" is equal to index "2" for the pair and return true if condition is met 
// else return false

const fullhouse = (array) => {

    if (array[0] === array[1,2] && array[3] === array[4] || array[0] === array[2,3] && array[1] === array[4] || array[0] === array[3,4] && array[1] === array[2])
        
        return true

    else{

        return false

    }
 }





















