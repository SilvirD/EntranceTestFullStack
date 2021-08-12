function MaxTich(arr) {
  let tichArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let tich = arr[i] * arr[i + 1];
    tichArr.push(tich);
  }
  return Math.max(...tichArr);
}

const arr1 = [2, 3, -5, -2, 4];
const arr2 = [1, 3, 4, -3, -5];

let test1 = MaxTich(arr1);
let test2 = MaxTich(arr2);

console.log(test1);
console.log(test2);
