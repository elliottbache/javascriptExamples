function solution(A) {

    // find global leader
    let stack = [];
    let lenA = A.length;
    for ( let i = 0; i < lenA; i++ ) {
        stack.push(A[i]);
        if ( stack.length > 1 && stack[stack.length - 1] !== stack[stack.length - 2] ) {
            stack.pop();
            stack.pop();
        }
    }
    let candidate = stack[0];
    let count = 0;
    for ( let i = 0; i < lenA; i++ ) {
        if ( A[i] === candidate ) {
            count++;
        }
    }
    let leader;
    if ( count > lenA/2 ) {
        leader = candidate;
    } else {
        leader = 1000000001;
    }

    // create list of indices where current leader is same as global leader starting from beginning
    let count1 = 0;
    let count2 = 0;
    let leader1 = [];
    let leader2 = [];
    for ( let i = 0; i < lenA - 1; i++ ) { // loop through each leader
        if ( A[i] === leader ) {
            count1++;
        }
        if ( count1 > (i+1)/2 ) {
            leader1.push(i);
        }
        if ( A[lenA-i-1] === leader ) {
            count2++;
        }
        if ( count2 > (i + 1)/2 ) {
            leader2.push(lenA-i-2);
        }
    }

    // compare lists
    count = 0;
    leader2.reverse();
    let lenLeader = leader1.length;
    while ( true ) {
        while ( leader1.length > 0 && leader2.length > 0 && leader1[leader1.length-1] < leader2[leader2.length-1] ) {
            leader2.pop();
        }
        while ( leader1.length > 0 && leader2.length > 0 && leader2[leader2.length-1] < leader1[leader1.length-1] ) {
            leader1.pop();
        }
        if ( leader1.length === 0 || leader2.length === 0 ) {
            break;
        }
        if ( leader1.length > 0 && leader2.length > 0 && leader2[leader2.length-1] === leader1[leader1.length-1] ) {
            count++;
            leader1.pop();
            leader2.pop();

        }
    }

    return count;

}



