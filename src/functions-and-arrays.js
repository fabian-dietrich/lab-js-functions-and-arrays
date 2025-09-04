// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

// Iteration 2 | Find the Longest Word

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord() {
  let longestWord = "";
  for (i = 0; i > words.length; i++) {
    if ([i] > [i] + 1) {
      return [i];
    } else {
      return [i] + 1;
    }
  }
}

// Iteration 3 | Sum Numbers

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let numbersTotal = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbersTotal += numbers[i];
  }
  return numbersTotal;
}

console.log("ITERATION 3: " + sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
  let numbers2Total = 0;
  for (let i = 0; i < numbers2.length; i++) {
    numbers2Total += numbers2[i];
  }

  return numbers2Total / numbers2.length;
}

console.log("ITERATION 4: " + averageNumbers(numbers2));

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist() {}
