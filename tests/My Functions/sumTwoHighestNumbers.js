function sumTwoHighestNumbers(array) {
  let max1 = 0;
  let max2 = 0;

  for (const number of array) {
    if (number > max1) {
      max2 = max1;
      max1 = number;
    } else if (number > max2) {
      max2 = number;
    }
  }

  console.log(max1 + max2);
}

// Example usage:
sumTwoHighestNumbers([5, 9, 7, 11]); // Outputs: 20