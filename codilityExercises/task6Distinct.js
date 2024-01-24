// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    A.sort();
    let lenA = A.length;
    if ( lenA == 0 ) {
        return 0;
    }
    let result = 1;
    for ( i = 1; i < lenA; i++) {
        if ( A[i] !== A[i-1] ) {
            result++;
        }
    }
    return result;
}
