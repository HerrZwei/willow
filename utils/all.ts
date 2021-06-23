/**
 * @desc promise.all
 * @return []
 * @param iter 可迭代
*/

const all = (iter: Array<any>) => {
  return new Promise((resolve, reject) => {
    if (!iter || iter.length === 0) resolve([]);
    let res: Array<any> = [];
    let count = 0;
    for (let index = 0; index < iter.length; index++) {
      Promise.resolve(iter[index]).then(
        data => {
          res.push(data);
          if (count++ === iter.length) {
            resolve(res);
          }
        }
      ).catch(err => reject([err]))
    }
  })
};

const iter = function (time) {
  let res = []
  for (let i = 0; i < time; i++) {
    res.push(setTimeout(() => {
      console.log(i);
    }, i))
  }
  return res;
}(3);

all(iter);

export default all;
