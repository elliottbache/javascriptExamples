// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let maxEnding = 0;
    let maxSlice = maxEnding;
    let maxA = Math.max(...A);
    if ( maxA < 0 ) {
        return maxA;
    }
    for (let a of A) {
        maxEnding = Math.max(0, maxEnding + a);
        maxSlice = Math.max(maxEnding, maxSlice);
    }
    return maxSlice;
}
