/*----------------------------------------------------------------------------------------------------------------------
  QUESTION 1
----------------------------------------------------------------------------------------------------------------------*/

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(mixedArray) {

    // Returns a Promise that is resolved or rejected
    return new Promise((resolve, reject) => {

        // Rejects Promise if input is not an array
        if (!Array.isArray(mixedArray)) {
            reject(new Error("Error! Input must be an array."));
            return;
        }

        // Filters out non-strings
        const filteredArray = mixedArray.filter(
            item => typeof item === 'string'
        );

        // Rejects the promise if the array contains no words
        if (filteredArray.length === 0) {
            reject(new Error("Error! The array must contain at least one word."));
            return;
        }

        // Convert the remaining words to lowercase
        const wordsInArray = [];
        for (const item of mixedArray) {
            if (typeof item === 'string') {
                wordsInArray.push(item.toLowerCase());
            }
        }

        resolve(wordsInArray);
    });
}

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
