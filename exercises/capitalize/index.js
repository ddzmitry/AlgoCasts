// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
https://www.amazon.jobs/en/jobs/1286086/software-development-engineer
https://www.amazon.jobs/en/jobs/1179795/software-development-engineer
https://www.amazon.jobs/en/jobs/1225322/systems-software-engineer
https://www.amazon.jobs/en/jobs/1299832/software-development-engineer
function capitalize(str) {

    let temp =  str.split(' ').reduce((reducer,value) => { 
        return reducer += `${value.charAt(0).toUpperCase().concat(value.slice(1,value.length))} `
     },"")

     return temp.slice(0,temp.length -1)
}

function capitalize2(str) {
const words = []
for (let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1))
}
return words.join(' ')
}

function capitalize3(str) {

    let result = str[0].toUpperCase();

    for (let i=1; i < str.length; i++) {
        if(str[i -1] === ' '){
            result += str[i].toUpperCase();
        }
    }
    return result;

}
    

module.exports = capitalize;
