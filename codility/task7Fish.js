// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // Implement your solution here
    let lenA = A.length;
    let i = lenA - 1;
    while ( i > 0 ) {
        if ( B[i-1] === 1 && B[i] === 0 ) {
            if ( A[i-1] > A[i] ) {
                A.splice(i,1);
                B.splice(i,1);
                lenA--;
            } else {
                A.splice(i-1,1);
                B.splice(i-1,1);
                lenA--;                
                i--;
            }
        } else {
            i--;
        }
    }
    return A.length;
}
