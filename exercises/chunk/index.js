// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

let chunked = []
let chunkIndex = 0;
let counter = 0
array.map((x,y) => {
    // check if index exists 
    if(!chunked[chunkIndex]){
        // if not set it to array with calue
        chunked[chunkIndex] = [x]
    } else {
        // just add value to array
        chunked[chunkIndex] = [...chunked[chunkIndex],...[x]]
    }
    // increase counter
    counter ++ 

    // if counter eq size , move on to next and increase index
    if(counter == size ){
        counter = 0
        chunkIndex ++
    }
    
})
return chunked
}

function chunk2(array, size) {}

module.exports = chunk;
