/*----------------------------------------------------------------------------------------------------------------------
  QUESTION 2
----------------------------------------------------------------------------------------------------------------------*/

// resolvedPromise resolves a message after a timeout of 500ms
const resolvedPromise = () => {

    return new Promise((resolve) => {

        setTimeout(() => {
            const success = { message: 'delayed success!' };
            resolve(success);
        }, 500);
    });
};

// Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms

// Call both promises separately and handle the resolved and reject results and then output to the console
