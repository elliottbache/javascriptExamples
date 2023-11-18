// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // Implement your solution here
    let lowerLimit = Math.floor(A/K);
    let upperLimit = Math.floor(B/K);
    let count = upperLimit - lowerLimit;
    if ( A % K === 0 || B & K === 0 ) {
        count++;
    }
    return count;
}

