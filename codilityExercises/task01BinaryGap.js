// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    let bin = N.toString(2);
    let maxCount = 0;
    let count = 0;
    for ( let digit of bin ) {
        if ( digit == 1 ) {
            if ( maxCount < count ) {
                maxCount = count;
            }
            count = 0;
        } else{
            count++;
        }
    }

    return maxCount;
}
