//https://coderbyte.com/algorithm/two-sum-problem

//https://web.stanford.edu/class/cs9/sample_probs/TwoSum.pdf

// The two sum problem is a common interview question, and it is a variation of the subset sum problem.
// There is a popular dynamic programming solution for the subset sum problem, but for the two sum problem
// we can actually write an algorithm that runs in O(n) time. The challenge is to find all the pairs of two
// integers in an unsorted array that sum up to a given S.

// Input Array: [3, 5, 2, -4, 8, 11]
// Input Sum: 7
// Output Sum: [[11, -4], [2, 5]]

//O(n2)

console.log('========= Slow TWO Sum time O(n2) ===========');


console.time('Two Sum O(n2)');

function twoSum(array, sum) {
    let sums = [];

    for (let i = 0; i < array.length; i++) {
        // console.log('- first loop STARTS', array[i]);
        for (let j = i + 1; j < array.length; j++) {
            // console.log('-- 2 Second loop STARTS', array[j]);

            if (array[i] + array[j] === sum) {
                // console.log('*** Hey, matches ***', array[i], array[j]);
                sums.push([array[i], array[j]]);
            }

            // console.log('-- 2 Second loop ENDS', array[j]);
        }
        // console.log('- first loop ENDS');
        // console.log('');
    }

    return sums;

    // console.log('*** sum array is ***', sums);
}

//let inputArray = [3, 5, 2, -4, 8, 11];
let inputArray = [3, 5, 2, -4, 8, 11, 3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11];

let sum = 7;

console.log(twoSum(inputArray, sum));
// console.log('length', inputArray.length);
//
console.timeEnd('Two Sum O(n2)');

console.log('=========Faster TWO Sum time O(n) ===========');

console.time('Faster Two Sum O(n2)');
// faster solution O(n):
// let inputArray2 = [4, 5, 1, 8];
// let sum2 = 6;

//let inputArray2 = [3, 5, 2, -4, 8, 11];
let inputArray2 = [3, 5, 2, -4, 8, 11, 3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11,3, 5, 2, -4, 8, 11];
let sum2 = 7;

function fasterTwoSum(array, sum) {
    let sums = [];
    var hashTable = {};

    for (var i=0; i < array.length; i++) {
        var sumMinusElement = sum - array[i];

        // console.log('- current value of an array: ', array[i]);
        // console.log('-- Sum Minus Element', sumMinusElement);

        //Check if this number exist in hash table
        if (hashTable[sumMinusElement.toString()] !== undefined) {
            sums.push([array[i], sumMinusElement]);
        }

        hashTable[array[i].toString()] = array[i];

        // console.log('---', hashTable);
        // console.log('');
    }

    return sums;
}

console.log(fasterTwoSum(inputArray2, sum2));

console.timeEnd('Faster Two Sum O(n2)');
