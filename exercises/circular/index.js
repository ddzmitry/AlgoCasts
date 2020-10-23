// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
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
}

module.exports = circular;
