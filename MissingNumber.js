/**
 *
 *
 *  LeetCode
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 *
 *
 */

// psuedo code

// function findMissing
//   loop through each element until the 2nd to last value
//     if the current element + 1 is not equal to the next element
//       return current element + 1;
//
// return null other wise