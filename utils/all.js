/**
 * @desc promise.all
 * @return []
 * @param iter 可迭代
*/

const all = (iter) => {
  return new Promise((resolve, reject) => {
    if (!iter || iter.length === 0) resolve([]);
    let res = [];
    let count = 0;
    console.log('inner');
    for (let index = 0; index < iter.length; index++) {
      Promise.resolve(iter[index]).then(
        data => {
          res.push(data);
          console.log(data());
          if (count++ === iter.length) {
            console.log(res, 'inner - res');
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
    res.push(Promise.resolve(setTimeout(() => console.log(i)), 0))
  }
  return res;
}(3);

console.log(iter);

setTimeout(() => console.log(all(iter).then(res => console.log(res, 'res'))), 5000);
