// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // Implement your solution here
    let Times = Array(X).fill(null);
    for ( let time in A ) {
        if ( Times[A[time] - 1] === null ) {
            Times[A[time] - 1] = time;
        }
    }

    if ( Times.some(el => el === null)) {
        return -1;
    }
    return Math.max(...Times);
}
