// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // maxChar("abcccccccd") === "c"
    let a = str.toString().split("").reduce((obj,char) => {
        // Key {a : 1 ,b:1,c:7}
        if(!obj[char]){
            obj[char] =1     
        } else {
            obj[char] ++
       
        }
        return obj
    },{})

     // Key {a : 1 ,b:1,c:7}
     // keys [a,b,c,d]
     return Object.keys(a).reduce((x,y)=> {
        // if a[c] > a[b] return c else return b
        if(a[x] > a[y]){
            return x
        } else {
            return y
        }
    })

}

function maxChar2(str) {
    const chars = {};
    let max = 0;
    let maxChar = '';

    for (let char of string) {
        // if false then 1 else ++
        chars[char] = chars[char] + 1 || 1
    }

    for (let char in chars){
        // char is a key
        if(chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
