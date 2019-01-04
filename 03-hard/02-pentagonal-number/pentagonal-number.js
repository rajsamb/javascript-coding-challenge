/*
    https://www.coderbyte.com/editor/guest:Pentagonal%20Number:JavaScript

    Have the function PentagonalNumber(num) read num which will be a positive integer and determine how many dots exist in
    a pentagonal shape around a center dot on the Nth iteration. For example:

    -> On first iteration there is only a single dot
    -> On the second iteration there are 6 dots
    -> On the third there are 16 dots
    -> and on the fourth there are 31 dots
*/


// Method 1: Using for
function PentagonalNumber(number) {
    var sum = 0;

    for (var i = 1; i <= number; i++) {
        if (i === 1) {
            sum += 1;
        }

        sum += (i - 1) * 5;
    }

    return sum;
}

console.log(PentagonalNumber(1)); //1
console.log(PentagonalNumber(2)); //6   (1 + 5)
console.log(PentagonalNumber(3)); //16  (6 + 5(n -1))
console.log(PentagonalNumber(4)); //31  (16 + 5(n -1))


// Method 2: Shorter using recursive:
function PentagonalNumber(number) {
    var sum = (number === 1) ? 1 : PentagonalNumber(number - 1) + (5 * (number - 1));

    console.log('Number', number, 'Calculation', sum);
    return sum;
}

console.log(PentagonalNumber(1)); //1
console.log(PentagonalNumber(2)); //6   (1 + 5)
console.log(PentagonalNumber(3)); //16  (6 + 5(n -1))
console.log(PentagonalNumber(4)); //31  (16 + 5(n -1))
