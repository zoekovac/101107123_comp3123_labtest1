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

resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// rejectedPromise rejects an error message after a timeout of 500ms
const rejectedPromise = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            try {
                throw new Error('delayed exception!');
            } catch (e) {
                reject({ error: e.message });
            }
        }, 500);
    });
};

rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
