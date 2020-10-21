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

function chunk2(array, size) {
    let chunked = []

    for (let element of array){
        // get last element of inner array
        const last = chunked[chunked.length -1]
        // if its not exists , or its already size of chunk that is needed 
        // create new array and put to array
        if (!last || last.length == size){
            chunked.push([element])
        } else {
            // else just add to array at the end
            last.push(element)
        }
    }
    return chunked;
}

function chunk3(array, size) {
    // using array slice
    let chunked = []
    let index = 0

    while(index < array.length){
        // slice array 
        // slice [1,2,3,4].slice(0,3) [1,2,3]
        chunked.push(array.slice(index,index + size));
        index += size;

    }
    return chunked;
}

module.exports = chunk;
