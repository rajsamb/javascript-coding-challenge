/**
 * Source: https://www.coderbyte.com/results/rajsamb:First%20Factorial:JavaScript
 *
 * Input 4
 * Output (4 * 3 * 2 * 1) = 42
 */

function firstFactorial(num) {
    if (!/^\d+$/.test(num)) { return ; }
    if (num === 1) { return 1; }
    if (num < 1) { return 0; }

    return num * firstFactorial(num - 1);

}

console.time('First Factorial Recursive');
console.log(firstFactorial(100));
console.timeEnd('First Factorial Recursive');