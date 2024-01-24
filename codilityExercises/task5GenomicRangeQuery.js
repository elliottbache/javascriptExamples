// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // Implement your solution here
    let impactFactors = [];
    let lenP = P.length;
    for ( i = 0; i < lenP; i++ ) {
        let sliceS = S.slice(P[i],Q[i]+1);
        if ( sliceS.includes('A') ) {
            impactFactors.push(1);
       } else if ( sliceS.includes('C') ) {
            impactFactors.push(2);
        } else if ( sliceS.includes('G') ) {
            impactFactors.push(3);
        } else {
            impactFactors.push(4);
        }
    }
    return impactFactors;
}

