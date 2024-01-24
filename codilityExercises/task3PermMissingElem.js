// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    if ( A.length == 0 ) {
        return 1;
    } 

    A.sort((a, b) => a - b);
    if ( A[0] == 2 ) {
        return 1;
    }

    for ( let i = 0; i < A.length - 1; i++ ) {
        if ( A[i+1] - A[i] > 1 ) {
            return (A[i+1] + A[i])/2
        }
    }

    return A[A.length-1] + 1;
}
