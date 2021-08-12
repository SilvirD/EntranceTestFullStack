const alternatingSums = (arr) => {
  let team1 = 0;
  let team2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      team1 += arr[i];
    } else {
      team2 += arr[i];
    }
  }

  return [team1, team2];
};

let input = [60, 40, 55, 75, 64];
let input2 = [20, 30, 40, 50, 60, 70];

let weightSum = alternatingSums(input);
console.log(weightSum);

let weightSum2 = alternatingSums(input2);
console.log(weightSum2);
