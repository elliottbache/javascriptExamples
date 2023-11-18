// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
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
    if ( count > lenA/2 ) {
        return A.indexOf(candidate);
    } else {
        return -1;
    }
}

