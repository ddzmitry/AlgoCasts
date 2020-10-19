// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   return str.split('').reverse().join('')
}

function reverse2(str) {
    let reversed = '';
    for (const char of str) {
        reversed = char + reversed;
    }
    console.log(reversed)

 }

function reverse3(str) {
   str.split('').reduce((reversed,character) => {
        return character + reversed 
   },'')
 } 
console.log( reverse3("Hello"))


module.exports = reverse;
