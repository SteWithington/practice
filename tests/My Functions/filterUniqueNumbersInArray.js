function printUniqueNumbers(array) {
  const counts = {};

  // Count occurrences of each number
  array.forEach(number => {
    counts[number] = (counts[number] || 0) + 1;
  });

  const uniqueNumbers = Object.keys(counts)
  .filter(number => counts[number] === 1)
  .map(number => Number(number));

  console.log(uniqueNumbers);
}

// Example usage:
printUniqueNumbers([1, 2, 3, 1]); // Output: [2, 3]