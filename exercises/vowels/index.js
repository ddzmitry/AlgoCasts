// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

let vowels_ = ['a','e','i','o','u']
return str.split('').filter(x => vowels_.includes(x)).length
}

module.exports = vowels;
