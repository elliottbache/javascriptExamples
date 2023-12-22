// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let maxProfit = 0;
    let minPrice = Math.min(...A);
    let minIndex = A.indexOf(minPrice);
    if ( A.length < 2 ) {
        return 0;
    }
    A.reverse();
    while ( A.length > 1 && A[A.length -1] > A[A.length -2] ) {
        A.pop();
    }
    A.reverse();
    let lenA = A.length;
    while ( lenA > 1 ) {
        while ( A[lenA -1] < A[lenA -2] ) {
            A.pop();
            lenA--;
        }
        if ( minIndex > lenA - 1 ) {
            minPrice = Math.min(...A);
            minIndex = A.indexOf(minPrice);
        }
        let maxPrice = A[lenA-1];
        maxProfit = Math.max(maxProfit,maxPrice - minPrice)

        A.pop();
        lenA--;
    }

    return Math.max(maxProfit,0);
}
