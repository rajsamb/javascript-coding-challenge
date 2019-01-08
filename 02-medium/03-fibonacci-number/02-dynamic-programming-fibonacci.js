/**
 * Fibonacci Number Sequence:
 * 1, 1, 2, 3, 5, 8, 13, 21 ...
 *
 * No(n)    Fib     Computation
 * 0        1       1
 * 1        1       (n0 + n.-1)  = (n1 - 1) + (n1 - 2)
 * 2        2       (n1 + n0)  = (n2 - 1) + (n2 - 2)
 * 3        3       (n2 + n1)  = (n3 - 1) + (n3 - 2)
 * 4        5       (n3 + n2)  = (n4 - 1) + (n4 - 2)
 * 5        8       (n4 + n3)  = (n5 - 1) + (n5 - 2)
 * 6        13      (n5 + n4)  = (n6 - 1) + (n6 - 2)
 */

//Using Dynamic Programming: O(2n)
// memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the
// results of expensive function calls and returning the cached result when the same inputs occur again.
console.time('fibonacci  O(n)');

function fibonacci(number) {
    //Declare hash table to store fibonacci number
    let f = {};
    let i;

    /* 0th and 1st number of the series are both 1 */
    f[0] = 1;
    f[1] = 1;

    console.log('1. f', f);

    for (i = 2; i <= number; i++) {
        //Add previous 2 number of the series
        f[i] = f[i - 1] + f[i - 2];
    }

    console.log('2. f', f);

    return f[number];
}

console.log(fibonacci(100));

console.timeEnd('fibonacci  O(n)');
