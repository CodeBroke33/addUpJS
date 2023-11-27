function sumArrayElements(arr) {
    let sum = 0;
    arr.forEach(function(element) {
      sum += element;
    });
    return sum;
  }
  
//   // Example usage:
//   const numbers = [3, 7, 12, 5, 9];
//   const result = sumArrayElements(numbers);
//   console.log("The sum of the array elements is:", result);

//   Explanation:
// sumArrayElements Function:

// function sumArrayElements(arr) { ... }: Defines a function named sumArrayElements that takes an array (arr) as an argument.
// Summing Array Elements:

// let sum = 0;: Initializes a variable sum to zero to accumulate the sum of array elements.
// arr.forEach(function(element) { ... });: Uses a forEach loop to iterate through each element of the array.
// sum += element;: Adds each element of the array to the sum variable.
// Returning the Result:

// return sum;: Returns the final sum of all elements in the array.
// Example Usage:

// const numbers = [3, 7, 12, 5, 9];: Creates an array named numbers.
// const result = sumArrayElements(numbers);: Calls the sumArrayElements function, passing the numbers array, and stores the result in the result variable.
// console.log("The sum of the array elements is:", result);: Displays the sum of the array elements in the console.
// This function iterates through each element of the array using forEach and adds each element to the sum variable to calculate the total sum. Adjust the numbers array or pass different arrays to the sumArrayElements function to find the sum of elements in various arrays.





