// O(1)	- Constant time O(1)
// Constant time complexity is the "holy grail". No matter the size of your input, the algorithm will take the same amount of time to
// complete.

// O(log n)	- Logarithmic time
// While logarithmic time complexity algorithms do take longer with larger inputs, running time increases slowly.
// For instance, if myLogRunTimeAlgo takes 1 second to complete with an input of size 10, when we increase our input by 10x to 100,
// the running time only grows to 2 seconds.

// O(n)	- Linear Time
// Algorithms with linear time complexity (O(n)) have running times that are directly proportional to the size (n) of the input.

// O(n^2) - Polynomial time O(n^k)
// An algorithm with polynomial time complexity has a running time that would be some input size n raised to some constant power k.
// (think nested for loops)

// O(2^n) - Exponential time
// Algorithms with exponential time complexity (O(2^n)) have running times that grow rapidly with any increase in input size.
// For an input of size 2, an exponential time algorithm will take 2^2 = 4 time.

// 1. What is the Big O for this?

// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for
// your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog.
// You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden.
// Someone yells - "I do, be happy to bring him over"

// Answer: O(n) Linear time. Because likely have to use a for loop to find another owner with the same dog.

// 2. Even or odd?

// What is the Big O of the following algorithm? Explain your answer

// function isEven(value) {
//     if (value % 2 == 0) {
//         return true;
//     }
//     else
//         return false;
//     }
// }

// Answer: Constant time. No matter the input, it only goes through 1 operation.

// 3. Are you here?
// What is the Big O of the following algorithm? Explain your answer

// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// Answer: This is Polynomial time O(n^k). For loops are categorized as constant time operation. Nested for loops are constant time operations raised to some amount.

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

// Answer: Linear Time O(n). The size of the array input dictates the time/count of operations.

// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

// function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }

// Answer: Linear time. O(n). Must iterate and compare each item in array. So input size dictates time.

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
// }

// Answer: Polynomial time O(n^k). Another nested loop. It doesn't grow so much as it raises the constant operations.

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

// function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i == 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }

// Answer: Computes Fibonnaci's sequence for a given number. Exponential Time O(2^n). It takes a single input, and it grows rapidly.

// 8. An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }

// Answer: Logarithmic O(log n). This algorithm cuts the sorted array in half and searches for the item's index based on max, min value and the mid point.

// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// Answer: Constant time. O(1). No matter the input, it does 1 operation.

// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

// function isWhat(n) {
//     if (n < 2 || n % 1 != 0) {
//         return false;
//     }
//     for (let i = 2; i < n; ++i) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// Answer: This algorithm determines if input is a prime number. Logarithmic time. O(log n). Input size leads to slow growth. Inout could trigger for loop.

// 11. Tower of Hanoi
// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
// Input:

// Rod A	Rod B	Rod C
// ----
// ---------
// -------------
// Output:

// Rod A	Rod B	Rod C
// ----
// ---------
// -------------
// Derive an algorithm to solve the Tower of Hanoi puzzle.
// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?

// a = [1,2,3] b = [] c = []
//
// Pseudo code:
// Base case: if array c has nums in ascending order and a and b are empty return array c. This should return the code in its entirey and stop recursion.

// move a smaller disc to B.
// move another disc to C.
// move B to C.
// move from A to B.
// move all from C to A.

// let src = [], aux = [], dest = []

// let solveHanoi = function(numOfDisks) {
//   for(let i = 1; i <= numOfDisks; i++) {
//     src.push(i)
//   }

//   console.log("disks for src:", src)

//   let goal = src.sort()

//   if(src === [] && aux === [] && dest === goal) {
//     return dest;
//   }
//     console.log("inside recurFunc" , goal);
//     for(let i = 0; i < src.length; i++) {
//       if(src[i] < src[i+1]) {
//         aux.push(src.splice(0, i))
//       }
//     }
//   solveHanoi()
// }

// solveHanoi(3)

function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
  if (height >= 1) {
    // Move a tower of height-1 to the buffer peg, using the destination peg.
    stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);

    // Move the remaining disk to the destination peg.
    console.log("Move disk from Tower ", srcP, " to Tower ", desP);

    // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.
    stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);
  }

  return;
}

stepsToSolveHanoiT(3, "A", "C", "B");
