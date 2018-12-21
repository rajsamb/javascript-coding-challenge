// Source: https://www.coderbyte.com/CodingArea/Ebook/fj84mui48eerb/CoderbyteEbook.pdf

/*
 * This	problem asks you to	sum	up all of the numbers within an	array,	but	the	array may also contains
 * other arrays	with numbers. This is what we call a nested	array. For example:
 *
 * Input: [1, 1, 1, [3, 4, [8]], [5]]
 * Output: 23
 *
*/

function sumUpArray(array, marker = '-') {
    let sum = 0;
    marker += '-';

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            let a = sumUpArray(array[i], marker);
            sum += a;
            console.log(marker + 'inner', a);
        } else {
            console.log(marker + 'outer', array[i]);
            sum += array[i];
        }
    }

    return sum;
}

let input = [1, 1, 1, [3, 4, [8, 2, [2, 2, [1, 1]]]], [5]];

console.log(sumUpArray(input));