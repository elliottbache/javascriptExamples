function solution(N, A) {
    // Implement your solution here
    let counters = Array(N).fill(0);
    let maxCounter = 0;
    let lastMaxCounter = 0;
    for ( let counter of A ) {
        if ( counter < N +1 ) {
            counters[counter-1]++;
            icounter = counters[counter-1];
            if (icounter > maxCounter) {
                maxCounter = icounter;
            }
        } else {
            if ( lastMaxCounter !== maxCounter ) {
                for ( let i=0; i < counters.length; i++ ) {
                    counters[i] = maxCounter;
                }
                lastMaxCounter = maxCounter;
            }
        }
    }

    return counters;
}
