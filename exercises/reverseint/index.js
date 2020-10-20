// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(int) {

    return parseInt(
        int.toString().split("").reverse().reduce((reversed,character) => {
        if(parseInt(character)){
           reversed = reversed + character 
        } else {
           reversed =  character + reversed
        }
        return reversed
   },""))

}

module.exports = reverseInt;
