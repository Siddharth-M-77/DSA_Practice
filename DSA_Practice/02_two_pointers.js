/* ============================================================================
 * 2. TWO POINTERS
 * Chalao: node 02_two_pointers.js
 * ============================================================================
 *
 * DEFINITION
 *   Do index (pointer) ek saath array pe chalte hain. Har step pe condition ke
 *   hisaab se ek pointer khisakta hai. Nested loop O(n²) → single pass O(n).
 *
 * KAB LAGTA HAI
 *   Array sorted hai, ya dono taraf se compare karna hai (palindrome, pair sum,
 *   container).
 *
 * FORM 1: Opposite ends (shuru + end, andar ki taraf)
 *   let left = 0, right = arr.length - 1;
 *   while (left < right) {
 *     const sum = arr[left] + arr[right];
 *     if (sum === target) return [left, right];
 *     if (sum < target) left++;   // bada sum chahiye
 *     else right--;               // chhota sum chahiye
 *   }
 *
 * FORM 2: Slow-fast (same direction)
 *   Fast pointer padhta hai, slow pointer likhta hai (in-place array edit).
 *   let slow = 0;
 *   for (let fast = 0; fast < n; fast++) if (valid(arr[fast])) arr[slow++] = arr[fast];
 * ========================================================================== */

const { todo, test } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Valid Palindrome · Easy · LeetCode 125
 * Question: Sirf letters/digits dekho (case ignore). Palindrome hai?
 * Example:  "A man, a plan, a canal: Panama" → true;  "race a car" → false
 * Steps:
 *   1. left = 0, right = end.
 *   2. Non-alphanumeric ko skip karo (/[a-z0-9]/i.test(ch)).
 *   3. Lowercase compare, alag → false. Andar khisakao.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function isPalindrome(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. ⭐ Two Sum II - Input Array Is Sorted · Medium · LeetCode 167
 * Question: Sorted array, 1-indexed positions return karo jinka sum = target.
 * Example:  [2,7,11,15], 9 → [1,2]
 * Steps: Opposite ends template. Answer [left+1, right+1].
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function twoSumSorted(numbers, target) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. ⭐ Merge Sorted Array · Easy · LeetCode 88
 * Question: nums1 (size m+n, end mein 0s) mein nums2 ko merge karo, IN-PLACE.
 * Example:  [1,2,3,0,0,0], m=3, [2,5,6], n=3 → [1,2,2,3,5,6]
 * Steps:
 *   1. i = m-1, j = n-1, k = m+n-1 (peeche se bharo, overwrite ka dar nahi).
 *   2. Jo bada ho nums1[k--] pe daalo.
 *   3. nums2 mein bacha ho toh copy karo.
 * Target: Time O(m+n), Space O(1)
 * ------------------------------------------------------------------------- */
function mergeSorted(nums1, m, nums2, n) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. Reverse String · Easy · LeetCode 344
 * Question: Char array ko IN-PLACE reverse karo.
 * Example:  ["h","e","l","l","o"] → ["o","l","l","e","h"]
 * Steps: left/right swap: [s[l], s[r]] = [s[r], s[l]], andar aao.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function reverseString(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. Squares of a Sorted Array · Easy · LeetCode 977
 * Question: Sorted array (negative bhi) ke squares sorted order mein.
 * Example:  [-4,-1,0,3,10] → [0,1,9,16,100]
 * Steps:
 *   1. left, right dono ends. result ko peeche (pos = n-1) se bharo.
 *   2. Jiska square bada, wo result[pos--] mein, us pointer ko khisakao.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function sortedSquares(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Intersection of Two Arrays II · Easy · LeetCode 350
 * Question: Common elements, jitni baar dono mein aaye (any order).
 * Example:  [1,2,2,1], [2,2] → [2,2]
 * Steps:
 *   1. Dono sort. i = 0, j = 0.
 *   2. Barabar → push, dono aage. Chhota wala aage.
 * Target: Time O(n log n), Space O(1) extra
 * ------------------------------------------------------------------------- */
function intersect(nums1, nums2) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. ⭐ 3Sum · Medium · LeetCode 15
 * Question: Saare unique triplets jinka sum 0 ho.
 * Example:  [-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]
 * Steps:
 *   1. Sort.
 *   2. i fix karo. nums[i] === nums[i-1] → skip (duplicate).
 *   3. left = i+1, right = end: two-pointer for -nums[i].
 *   4. Match pe push, phir left/right ke duplicates skip karo.
 * Target: Time O(n²), Space O(1) extra
 * ------------------------------------------------------------------------- */
function threeSum(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. ⭐ Container With Most Water · Medium · LeetCode 11
 * Question: Do lines choose karo jo sabse zyada paani rakhe.
 *           Area = min(h[l], h[r]) * (r - l).
 * Example:  [1,8,6,2,5,4,8,3,7] → 49
 * Steps:
 *   1. left = 0, right = end, best = 0.
 *   2. Area nikalo, best update.
 *   3. CHHOTI height wala pointer khisakao (bada wala rakhne se hi area badh sakta).
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function maxArea(height) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q9. Remove Element · Easy · LeetCode 27
 * Question: val ke saare occurrences in-place hatao, bache hue count k return.
 * Example:  [3,2,2,3], val=3 → k=2, nums = [2,2,...]
 * Steps: slow-fast: nums[fast] !== val → nums[slow++] = nums[fast]. return slow.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function removeElement(nums, val) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q10. Trapping Rain Water · Hard (bonus) · LeetCode 42
 * Question: Bars ke beech kitna paani rukega?
 * Example:  [0,1,0,2,1,0,1,3,2,1,2,1] → 6
 * Steps:
 *   1. left, right, leftMax = 0, rightMax = 0, water = 0.
 *   2. height[left] < height[right]:
 *        leftMax update; water += leftMax - height[left]; left++.
 *      warna right side pe same.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function trap(height) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q1 Valid Palindrome", isPalindrome, [
  [["A man, a plan, a canal: Panama"], true],
  [["race a car"], false],
  [[" "], true],
  [["0P"], false],
]);
test("Q2 Two Sum II", twoSumSorted, [
  [[[2, 7, 11, 15], 9], [1, 2]],
  [[[2, 3, 4], 6], [1, 3]],
  [[[-1, 0], -1], [1, 2]],
]);
test("Q3 Merge Sorted Array", mergeSorted, [
  [[[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3], [1, 2, 2, 3, 5, 6]],
  [[[0], 0, [1], 1], [1]],
  [[[4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3], [1, 2, 3, 4, 5, 6]],
], { inPlace: 0 });
test("Q4 Reverse String", reverseString, [
  [[["h", "e", "l", "l", "o"]], ["o", "l", "l", "e", "h"]],
  [[["H", "a", "n", "n", "a", "h"]], ["h", "a", "n", "n", "a", "H"]],
], { inPlace: 0 });
test("Q5 Squares of a Sorted Array", sortedSquares, [
  [[[-4, -1, 0, 3, 10]], [0, 1, 9, 16, 100]],
  [[[-7, -3, 2, 3, 11]], [4, 9, 9, 49, 121]],
]);
test("Q6 Intersection of Two Arrays II", intersect, [
  [[[1, 2, 2, 1], [2, 2]], [2, 2]],
  [[[4, 9, 5], [9, 4, 9, 8, 4]], [4, 9]],
], { unordered: "outer" });
test("Q7 3Sum", threeSum, [
  [[[-1, 0, 1, 2, -1, -4]], [[-1, -1, 2], [-1, 0, 1]]],
  [[[0, 1, 1]], []],
  [[[0, 0, 0, 0]], [[0, 0, 0]]],
], { unordered: "deep" });
test("Q8 Container With Most Water", maxArea, [
  [[[1, 8, 6, 2, 5, 4, 8, 3, 7]], 49],
  [[[1, 1]], 1],
]);
test("Q9 Remove Element", (nums, val) => nums.slice(0, removeElement(nums, val)).sort((a, b) => a - b), [
  [[[3, 2, 2, 3], 3], [2, 2]],
  [[[0, 1, 2, 2, 3, 0, 4, 2], 2], [0, 0, 1, 3, 4]],
]);
test("Q10 Trapping Rain Water", trap, [
  [[[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], 6],
  [[[4, 2, 0, 3, 2, 5]], 9],
]);
