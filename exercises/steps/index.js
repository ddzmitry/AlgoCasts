// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let counter = 0
while(counter < n){
    counter ++
    console.log(counter)
    console.log(Array(n).fill('#',0,counter).fill(" ",counter,n).join(''))
}

}

function steps2(n){
    for (let row =0; row < n; row ++ ){
        // console.log(row)
        let stair = ''
        for (let column =0; column < n ; column ++){
            if (column <= row){
                stair += '#'
            } else {
                stair += ' '
            }
        }
        console.log(stair)
    }
}

function steps_recursion(n, row = 0, stair =''){
// if (row===n) then we have hit the end of our problem
// if the 'stair' string has a length === n then we are at the end of a row
// If the length of the stair string is less than or equal to the row number 
// we are working on , we add a '#', otherwise we add a ' ' 
 if (n == row) {
    return;
 }
 if ( n === stair.length){
     console.log(stair)
     // empty stair so not passing third value
     return steps(n,row + 1);
 }

 // assemble stair
 if(stair.length <= row){
     stair += '#'
 } else {
     stair += ' ';
 }
 steps(n,row,stair);

}

module.exports = steps;
