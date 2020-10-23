// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
       // create an empty array of arrays called 'results'
   // Create a counter variable , starting at 1
   // As long as (start column <= end column) AND (start row <= end row)
   //   Loop from start column to end column 
   //       At result [start_row][i] assign counter variable 
   //       Increment counter
   //   Increment Start row
   //   Loop from start row to end row
   //       At result [i][end_column] assign counter variable
   //       Increment counter
   //   Decrement end row
   //   Repeat for other two sides

   const result = [];
   for (let i = 0; i < n; i++) {
        result.push([])
   }

   let counter = 1
   let startColumn = 0
   let endColumn = n -1
   let startRow = 0
   let endRow = n - 1 
   while ( startColumn <= endColumn && startRow <= endRow ){
       // Top row
       for (let i = startColumn; i <= endColumn; i ++ ){
           result[startRow][i] = counter;
           counter ++ 
       }
       // Increment Start Row
       startRow ++
       // RightColumn
       for (let i = startRow; i <= endRow; i++){
           result[i][endColumn] = counter;
           counter ++
       }
       endColumn --
       // BottomRow
       for (let i = endColumn; i >= startColumn; i--){
           result[endRow][i] = counter
           counter ++
       }
       endRow --;
       //start column
       for (let i = endRow; i>= startRow; i--){
        result[i][startColumn] = counter
        counter ++
       }
       startColumn ++

   }
   console.log(result)

   
}

module.exports = matrix;
