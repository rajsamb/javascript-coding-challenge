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

//O(n2)
console.time('fibonacci  O(n2)');
function fibonacci(number) {
  if (number < 2) { return 1; }

  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(10)); //10 * 10
//console.log(fibonacci(100)); //100 * 100 Potentially crash
console.timeEnd('fibonacci  O(n2)');
