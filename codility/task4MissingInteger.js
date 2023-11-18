// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    A.sort((a,b) => a-b);
    lastPresent = 0;
    for ( let i = 0; i < A.length; i++ ) {
        if ( A[i] - lastPresent > 1 ) {
            return lastPresent + 1;
        } else {
            lastPresent = Math.max(A[i],0);
        }        
    }
    return Math.max(A[A.length - 1]+1,1);
}
