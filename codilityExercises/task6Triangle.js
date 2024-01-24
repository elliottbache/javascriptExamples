// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let lenA = A.length;
    if ( lenA < 3 ) {
        return 0;
    }
    A.sort((a,b) => a - b );
    for ( let i = lenA - 1; i > 1; i-- ) {
        let j = i - 1;
        while ( j > 0 ) {
            if ( A[i] >= 2*A[j] ) {
                break;
            }
            let k = j - 1;
            while ( k >= 0 ) {
                if ( A[k] + A[j] <= A[i] ) {
                    break;
                }
                if ( A[i] + A[j] > A [k] && A[j] + A[k] > A[i] && A[k] + A[i] > A[j]) {
                    return 1;
                }
                k--;
            }
            j--;
        }
    }
    return 0;
}
