let arr = [50, 400, 10, 20, 30, 50, 40, 50, 100, 60, 300, 70, 80, 90, 200];

function alternatives(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    res.push(arr[i]);
  }
  return res;
}

const ot = alternatives(arr);
const str = ot.join(' ');
console.log('Alternate elements of an array ' + str);

function usingFilter(arr) {
  const filteredArray = arr.filter((ele) => {
    return arr.indexOf(ele) % 2 == 1;
    console.log(arr.indexOf(ele) % 2 == 0);
  });
  return filteredArray;
}

console.log('Alternate elements of an array ' + usingFilter(arr));

console.log(
  '----------Linear Search Algorithm--------------'.toLocaleUpperCase(),
);

function linearSearch(indexFor) {
  for (var i = 0; i < arr.length; i++) {
    if (indexFor == arr[i]) return i;
  }
  return -1;
}
console.log('Index is ' + linearSearch('50'));

console.log(
  '----------Largest element in an Array--------------'.toLocaleUpperCase(),
);

function largestEle(arr) {
  let arr1 = [];
  let largest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log('Largest element in arr' + arr + ' is ' + largestEle(arr));
console.log(
  '----------2nd Largest element in an Array--------------'.toLocaleUpperCase(),
);

function largerNumber(arr, position) {
  let res;
  arr.sort((a, b) => a - b);
  for (var i = 0; i < position; i++) {
    res = arr.pop();
  }
  return res;
}
// console.log('Larger umber is ' + arr + ' is ' + largerNumber(arr, 2));

console.log(
  '----------Remove duplicates from Sorted Array--------------'.toLocaleUpperCase(),
);

function removeDup(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      res.push(arr[i]);
    }
  }
  return res.join(' ');
}

console.log(
  `actual array ${arr} and removed duplicated values array ${removeDup(arr)}`,
);
