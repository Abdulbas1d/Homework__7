// 1-Misol

// function invertNumberString(inputString) {
//     const numbersArray = inputString.split('').map(Number);
    
//     const invertedArray = numbersArray.map(num => 9 - num);
    
//     return invertedArray;
// }
  
// const inputString = "12345";
// const invertedArray = invertNumberString(inputString);
// console.log(invertedArray);




// 2-Misol

// function createNumberArrayRecursive(n, arr = []) {
//     if (n === 1) {
//       arr.unshift(1);
//       return arr;
//     } else {
//       arr.unshift(n);
//       return createNumberArrayRecursive(n - 1, arr);
//     }
// }
  
// const userInput = 5;
// const resultArray = createNumberArrayRecursive(userInput);
// console.log(resultArray);




// 3-Misol

// function sumArrays(arr1, arr2) {
//     const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
    
//     const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
    
//     return sum1 + sum2;
// }

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(sumArrays(array1, array2));




// 4-Misol

// function findSmallestNumber(arr) {
//     const smallestNumber = Math.min(...arr);
    
//     const fourthLevelString = smallestNumber.toString().replace(/\d/g, '****');
    
//     return fourthLevelString;
// }

// const numbers = [5, 3, 8, 1, 6];
// console.log(findSmallestNumber(numbers));




// 5-Misol

// function reverseString(str) {
//     let reversedString = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedString += str[i];
//     }
//     return reversedString;
// }

// const originalString = "hello";
// console.log(reverseString(originalString));