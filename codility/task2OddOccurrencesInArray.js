// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    A.sort();
    let initialLength = A.length - 1;
    for ( i = 0; i < initialLength; i += 2 ) {
        if ( A[0] !== A[1] ) {
            return A[0];
        } else {
            A[0] = A[A.length - 1];
            A[1] = A[A.length - 2];
            A.pop();
            A.pop();
        }
    }
    return A[0];

}
