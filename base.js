
function moreThatHalfFullfilled(arr) {
  return new Promise((resolve, reject) => {
    const rejectedPromises = [];
    let fulfilledCount = 0;

    arr.forEach((promise) => {
      promise
        .then(() => {
          fulfilledCount++;
          //  resolves if amount of rejected promises from promisesArr is less than half of promisesArr length
          if (fulfilledCount > arr.length / 2 - 1) {
            resolve();
          }
        })
        .catch(() => {
          rejectedPromises.push(promise);
          console.log(rejectedPromises.length)
          if (rejectedPromises.length > arr.length / 2) {
            reject();
          }
        });
    });
  });
}


module.exports = moreThatHalfFullfilled;