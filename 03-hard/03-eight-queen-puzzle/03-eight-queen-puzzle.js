/**
 * Source: https://coderbyte.com/results/cjordanball:Eight%20Queens:JavaScript
 *
 * Have the function EightQueens(strArr) read strArr which will be an array consisting of the locations of eight Queens
 * on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following:
 * ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the current queen on the chessboard
 * (x and y will both range from 1 to 8 where 1,1 is the bottom-left of the chessboard and 8,8 is the top-right).
 * Your program should determine if all of the queens are placed in such a way where none of them are attacking
 * each other. If this is true for the given input, return the string true otherwise return the first queen in the
 * list that is attacking another piece in the same format it was provided.

 For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"]
 then your program should return the string true.

 The corresponding chessboard of queens for this input is below (taken from Wikipedia).

 Use the Parameter Testing feature in the box below to test your code with different arguments.
 */

const helpers = {};
function EightQueens(strArr) {
    // fix up the data as an array of arraySetup
    const newArr = helpers.arraySetup(strArr);
    console.log('*new Array*', newArr);
    const len = newArr.length;
    console.log('length', len)
    for (let i = 0; i < len; i++) {

        console.log('-i', i);
        for (let j = 1 + i; j < len; j++) {
            console.log('--j', j);
            console.log('--* newArray[i] *--', newArr[i]);
            console.log('--* newArray[j] *--', newArr[j]);
            if (helpers.isAttacking(newArr[i], newArr[j])) {
                console.log('** yes it is in attacking position **');
                return `(${newArr[i].slice(0, 2)})`;
            }
        }

        console.log('===================');
    }
    return true;
}
Object.assign(helpers, {
    arraySetup(strArr) {
        return strArr.map(val => JSON.parse(val
            .replace(/\(/g, '[')
            .replace(/\)/g, ']')));
    },
    isAttacking(pos1, pos2) {

        console.log('--- pos1[0]', pos1[0], 'pos2[0]', pos2[0]);
        console.log('--- pos1[1]', pos1[1], 'pos2[1]', pos2[1]);
        console.log('--- (pos1[0] - pos2[0])', (pos1[0] - pos2[0]), 'Math.abs(pos1[0] - pos2[0])', Math.abs(pos1[0] - pos2[0]));
        console.log('--- pos1[1] - pos2[1]', pos1[1] - pos2[1], 'Math.abs(pos1[1] - pos2[1])', Math.abs(pos1[1] - pos2[1]));

        return (pos1[0] === pos2[0] ||
            pos1[1] === pos2[1] ||
            Math.abs(pos1[0] - pos2[0]) === Math.abs(pos1[1] - pos2[1]));
    }
});
// keep this function call here:

// console.log(EightQueens(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"])); // No Attacking
// console.log(EightQueens(["(2,1)", "(8,1)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"])); // On Vertical is attacking (2,1) -> (8, 1)
// console.log(EightQueens(["(2,1)", "(2,5)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"])); // On Horizontal is attacking (2,1) -> (2, 2)
// console.log(EightQueens(["(2,1)", "(3,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"])); // On Diagonal is attacking (2,1) -> (3, 2)
console.log(EightQueens(["(2,1)", "(4,2)", "(5,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"])); // On Diagonal is attacking (3, 2)