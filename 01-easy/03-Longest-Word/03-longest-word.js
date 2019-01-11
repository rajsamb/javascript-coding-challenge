/**
 *
 * Source: https://www.coderbyte.com/editor/guest:Longest%20Word:JavaScript

 * Have the function LongestWord(string) take the sen parameter being passed and return the largest word in the string.
 * If there are two or more words that are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume string will not be empty.
 * Sample Test Cases
 * Input:"fun&!! time"

 * Output:"time"

 * Input:"I love dogs"

 * Output:"love"

 */

/** Method 1 **/
function longestWord(str) {
    let stringArray = str.split(' ');
    let hash = {length: 0, word: string = ''};

    for (i = 0; i < stringArray.length; i++) {
        const word = stringArray[i].replace(/[^a-z0-9]/gi, '');
        const currentWordlength = word.length;

        if (currentWordlength > hash.length) {
            hash.length = currentWordlength;
            hash.word = word;
        }
    }

    return hash.word;
}

console.log(longestWord('fun&!! time'));
console.log(longestWord('123456789 98765432'));

/** Method 2 **/
function longestWord2(str) {
    return str.replace(/[^\w]/g, ' ')
              .split(' ')
              .sort((a, b) => b.length - a.length)[0];
}

longestWord2('fun&!! time');
