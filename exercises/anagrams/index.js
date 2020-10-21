// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    function stringify(string){
        // to json string for comparaci ng
        return JSON.stringify(
        // remove all junk characters
        string.replace(/[^\w]/g,"").toLowerCase().split('')
        // sort the array
        .sort()
        // reduce to map {"h" : 1 , "e" : 1 , "l" : 2 , "o" : 1}
        .reduce((map,char) => {
        if(map[char]){
            map[char] ++
        } else {
            map[char] = 1
        }
        return map
        },{})
        )

    }

    return (stringify(stringA) == stringify(stringB) )




}

module.exports = anagrams;
