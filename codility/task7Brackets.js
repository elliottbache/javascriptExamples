// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // Implement your solution here
    let stack = [];
    let i = 0;
    let lenS = S.length;
    while ( i <= lenS ) {
        switch (S[i]) {
            case '(': 
                stack.push('p');
                break;
            case '{': 
                stack.push('c');
                break;
            case '[': 
                stack.push('b');
                break;
            case ')': 
                if ( stack.pop() !== 'p' ) {
                    return 0;
                }
                break;
            case '}': 
                if ( stack.pop() !== 'c' ) {
                    return 0;
                }
                break;
            case ']': 
                if ( stack.pop() !== 'b' ) {
                    return 0;
                }
                break;
        }
        i++;
    }
    if ( stack.length === 0 ) {
        return 1;
    } else {
        return 0;
    }
}
