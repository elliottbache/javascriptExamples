// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let lenA = A.length;
    let B = Array(lenA).fill(null);
    let lastB = 0;
    let count = lenA-1;
    while ( count >= 0 && lastB < 1000000000 ) {
        B[count] = lastB + A[count];
        lastB = B[count];
        count--;
    }

    let sumA = 0;
    count = 0;
    while ( count < lenA ) {
        if ( A[count] === 0 ) {
            sumA += B[count];
        }
        if ( sumA > 1000000000 ) {
            return -1;
        }
        count++;
    }
    return sumA;
}
