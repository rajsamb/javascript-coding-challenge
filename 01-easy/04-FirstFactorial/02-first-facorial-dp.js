/**
 * Source: https://www.coderbyte.com/results/rajsamb:First%20Factorial:JavaScript
 *
 * Input 4
 * Output (4 * 3 * 2 * 1) = 42
 */
function firstFactorial(num) {
    let memoizeLastValue = 1;

    for(let i = 1; i <= num; i++) {
        memoizeLastValue *= i;
    }

    return memoizeLastValue;
}

console.time('First Factorial Dynamic Programming');
console.log(firstFactorial(100));
console.timeEnd('First Factorial Dynamic Programming');

