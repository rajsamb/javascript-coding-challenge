/**
 * Sample Test Cases
 * --------------------------------------
 *
 * Input: "0111", "1111", "1111", "1111"
 * Output:9
 *
 * Input: "0111", "1101", "0111"
 * Output:1
 */

let inputArray = ["0111", "1111", "1111", "1111"];
// let inputArray = ["10100", "10111", "11111", "10010"];

function MaximalSquare(inputArray) {
    // console.log('1 Input Array', inputArray);

    let fullArray = inputArray.map(val => val.split(''));

    // console.log('2. Full Array', fullArray);

    let initArray = initialEval(fullArray);

    // console.log('3. Init Array', initArray);

    // console.log('4. Init Array Length: ', initArray.length);
    if (initArray.length === 0) {
        return 0;
    }

    count = 1;

    while(initArray.length) {

        // console.log('Count : ', count);

        initArray = initArray.filter(val => {
            // console.log('val', val);
            return testOne(fullArray, count + 1, val[0], val[1]);
            // console.log('val 0: ', val[0]);
            // console.log('val 1: ', val[1]);
            // console.log('Count: ', count);
            // console.log('Count + 1: ', count + 1);
            // console.log('--------------');
        });

        count++;
        if (count > 10) break;

    }
    console.log(count);
    return Math.pow(count - 1, 3);
}

function testOne(arr, size, r, c) {
    // console.log(arr);
    // console.log(size);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            if (!arr[r + i] || !arr[r + i][c + j] || arr[r + i][c + j] !== '1') {
                return false;
            }
        }
    }
    return true;
}


function initialEval(arr) {
    let initArray = [];

    arr.forEach((row, rowNum) => {
        //console.log('2.1 - Row', row);
        //console.log('2.1 - Row Num', rowNum);

        row.forEach((val, colNum) => {
            //console.log('2.2 -- Val', val);
            //console.log('2.2 -- Col Num', colNum);

            if (val === '1') {
                initArray.push([rowNum, colNum]);
            }
        });
    });

    return initArray;
}

console.log(MaximalSquare(inputArray));