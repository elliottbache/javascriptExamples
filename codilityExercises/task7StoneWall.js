// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // Implement your solution here
    let lenH = H.length;
    let nBlocks = 1;
    let currentBase = [H[0]];
    for ( let i = 1; i < lenH; i++ ) {
        if ( H[i] > currentBase[currentBase.length-1] ) {
            currentBase.push(H[i]);
            nBlocks++;
        } else if ( H[i] < currentBase[currentBase.length-1] ) {
            currentBase.pop();
            while ( H[i] < currentBase[currentBase.length-1] ) {
                currentBase.pop();
            }
            if ( H[i] !== currentBase[currentBase.length-1] ) {
                nBlocks++;
                currentBase.push(H[i]);
            }
        }
    }
    return nBlocks;
}

