//For eg if number is 2

//Then all the sum from 1 - 2 is 3

//If number is 3, all the sum from 1 - 3 = 6

function sum(number) {
    var t = (number === 1) ? 1 : sum(number - 1) + number;
    console.log('sum', t);
    return t;
}

console.log(sum(2));
console.log(sum(3));