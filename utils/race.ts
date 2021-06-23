/**
 * @desc promise.race
 * @return
 * @param iter
*/

const race = (iter: [any]) => {
  return new Promise((resolve, reject) => {
    for (let index = 0; index < iter.length; index++) {
      Promise.resolve(iter[index]).then(
        data => {
          resolve(data);
        }
      ).catch(err => reject(err))
    }
  });
};

export default race;
