const sum = (arr: Array<number>): number => {
  const { length } = arr;
  let number;
  if (length === 0)  {
    number = 0;
    return number;
  }
  number = arr.shift();
  return number + sum(arr);
}

const res: number = sum([1, 3, 5]);
console.log((res));

const sum1 = (arr: Array<number>): number => {
  return arr.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
}

console.log(sum1([1, 3, 5]));


const sum2 = (arr: Array<number>): number => {
  return 
}
