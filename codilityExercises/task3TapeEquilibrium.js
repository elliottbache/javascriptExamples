// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let add1 = 0;
    let add2 = 0;
    let Sum1 = Array(A.length-1).fill(null);
    let Sum2 = Array(A.length-1).fill(null);
    for ( let i = 1; i < A.length; i++ ) {
        add1 += A[i-1];
        Sum1[i-1] = add1;
        add2 += A[A.length - i];
        Sum2[A.length - i - 1] = add2;
    }
    let Diff = Array(A.length-1).fill(null);
    for ( let i = 1; i < A.length; i++ ) {
        Diff[i-1] = Math.abs(Sum1[i-1] - Sum2[i-1]);
    }
    return Math.min(...Diff);
}
