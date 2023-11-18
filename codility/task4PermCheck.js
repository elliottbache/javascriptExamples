// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    A.sort((a,b) => a - b);

    for ( let index in A) {
        if ( index != A[index] - 1 ) {
            return 0;
        }
    }

    return 1;
}
