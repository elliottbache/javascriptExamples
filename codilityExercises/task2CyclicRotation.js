// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Implement your solution here
    if ( A.length == 0 ) {
        return A; 
    }
    for ( let index = 0; index < K; index++ ) {
        A = rotate(A);
    }
    return A;
}

function rotate(A) {
    let B = new Array(A.length).fill(null);
    B[0] = A[A.length-1]; 
    for ( let index = 1; index < A.length; index++ ) {
        B[index] = A[index-1];
    }    
    return B;
}
