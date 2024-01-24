function solution(A) {
    // Implement your solution here
    let lenA = A.length;
    let sumA = Array(lenA+1).fill(0);
    let lastA = 0; 
    for ( let i = 1; i < lenA+1; i++ ) {
        sumA[i] = sumA[i-1] + A[i-1];
    }

    let minAvg = (A[0] + A[1]) / 2;
    let minPt = 0;
    for ( let startPt = 0; startPt < lenA - 1; startPt++ ) {
        let endPt = startPt + 2 ;
        while ( endPt < lenA + 1 ) {
            let currentAvg = (sumA[endPt] - sumA[startPt])/(endPt-startPt);
            if ( currentAvg < minAvg ) {
                minPt = startPt;    
                minAvg = currentAvg;
            }
            endPt++;
        }
    }

    return minPt;
}
