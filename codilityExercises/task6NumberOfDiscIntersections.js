// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let lenA = A.length;
    let aStart = Array(lenA).fill(null);
    let aEnd = Array(lenA).fill(null);
    for ( let i = 0; i < lenA; i++ ) {
        aStart[i] = i - A[i];
        aEnd[i] = i + A[i];
    }

    var AStartWithIndex = [];
    var AEndWithIndex = [];
    for (var i in aStart) {
        AStartWithIndex.push([aStart[i], i]);
        AEndWithIndex.push([aEnd[i], i]);        
    }
    AStartWithIndex.sort(function(left, right) {
        return left[0] < right[0] ? -1 : 1;
    });
    var indexes = [];
    aStart = [];
    let oldEnd = aEnd.slice();
    aEnd = [];
    for (var j in AStartWithIndex) {
        aStart.push(AStartWithIndex[j][0]);
        indexes.push(AStartWithIndex[j][1]);
        aEnd.push(oldEnd[indexes[j]]);
    }
    

    let count = 0;
    for ( let i = 0; i < lenA - 1; i++ ) {

        let j = i + 1;
        
        if ( Math.min(aStart.slice(j)) > aEnd[i] ){
            continue;
        }
        
        while ( j < lenA ) {
            if ( aEnd[i] >= aStart[j] ) {
                count++;
            }
            j++;
        }
    }
    return count;
}    
