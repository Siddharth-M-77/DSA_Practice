/* ============================================================================
 * 6. BINARY SEARCH
 * Chalao: node 06_binary_search.js
 * ============================================================================
 *
 * DEFINITION
 *   Sorted data mein beech (mid) dekho. Target chhota hai toh left half,
 *   bada hai toh right half. Har step pe search space AADHA → O(log n).
 *   10 lakh elements mein bhi sirf ~20 steps.
 *
 * KAB LAGTA HAI
 *   - Array sorted hai (ya rotated sorted).
 *   - Question mein "O(log n)" likha hai.
 *   - "Minimum value jo condition satisfy kare" → ANSWER PE binary search
 *     (Koko bananas, sqrt). Condition monotonic honi chahiye:
 *     false false false TRUE true true...
 *
 * TEMPLATE 1: Exact target
 *   let left = 0, right = n - 1;
 *   while (left <= right) {
 *     const mid = Math.floor((left + right) / 2);
 *     if (nums[mid] === target) return mid;
 *     if (nums[mid] < target) left = mid + 1;
 *     else right = mid - 1;
 *   }
 *   return -1;    // loop ke baad `left` = insert position
 *
 * TEMPLATE 2: First index jahan condition true ho (lower bound)
 *   while (lo < hi) {
 *     const mid = Math.floor((lo + hi) / 2);
 *     if (condition(mid)) hi = mid;   // answer mid ya uske left
 *     else lo = mid + 1;
 *   }
 *   return lo;
 *
 * GALTIYAN: Math.floor bhoolna, `left <= right` vs `left < right` mix karna,
 *           `hi = mid - 1` template 2 mein (answer chhoot jaata hai).
 * ========================================================================== */

const { todo, test } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Binary Search · Easy · LeetCode 704
 * Question: Sorted nums mein target ka index, na ho toh -1.
 * Example:  [-1,0,3,5,9,12], 9 → 4
 * Steps: Template 1.
 * Target: Time O(log n), Space O(1)
 * ------------------------------------------------------------------------- */
function search(nums, target) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. ⭐ Search Insert Position · Easy · LeetCode 35
 * Question: Target ka index, ya jahan insert hoga.
 * Example:  [1,3,5,6], 2 → 1;  7 → 4
 * Steps: Template 1, loop khatam pe `left` return.
 * Target: Time O(log n)
 * ------------------------------------------------------------------------- */
function searchInsert(nums, target) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. First Bad Version · Easy · LeetCode 278
 * Question: Versions 1..n. Ek version ke baad sab bad hain. Pehla bad version?
 *           isBadVersion(v) function diya hai (kam se kam calls karo).
 * Example:  n = 5, first bad = 4 → 4
 * Steps: Template 2, lo = 1, hi = n, condition = isBadVersion.
 * Target: Time O(log n)
 * ------------------------------------------------------------------------- */
function firstBadVersion(n, isBadVersion) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. Sqrt(x) · Easy · LeetCode 69
 * Question: floor(√x), bina Math.sqrt ke.
 * Example:  8 → 2
 * Steps: Answer pe binary search: 0..x mein sabse bada m jahan m*m <= x.
 * Target: Time O(log x)
 * ------------------------------------------------------------------------- */
function mySqrt(x) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. ⭐ Find First and Last Position of Element · Medium · LeetCode 34
 * Question: Sorted array mein target ki pehli aur aakhri position. Na ho [-1,-1].
 * Example:  [5,7,7,8,8,10], 8 → [3,4]
 * Steps:
 *   Do baar binary search. Match milne pe ruko mat:
 *   first ke liye right = mid - 1 karte raho, last ke liye left = mid + 1.
 * Target: Time O(log n)
 * ------------------------------------------------------------------------- */
function searchRange(nums, target) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. ⭐ Search in Rotated Sorted Array · Medium · LeetCode 33
 * Question: Sorted array kisi point pe rotate hua hai. Target ka index?
 * Example:  [4,5,6,7,0,1,2], 0 → 4
 * Steps:
 *   1. mid nikalo. Match → return.
 *   2. nums[left] <= nums[mid] → LEFT half sorted hai:
 *        target is range [left, mid) mein? → right = mid - 1, warna left = mid + 1.
 *   3. Warna RIGHT half sorted: target (mid, right] mein? → left = mid + 1, warna right = mid - 1.
 * Target: Time O(log n)
 * ------------------------------------------------------------------------- */
function searchRotated(nums, target) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. ⭐ Find Minimum in Rotated Sorted Array · Medium · LeetCode 153
 * Question: Rotated sorted (unique) array ka minimum.
 * Example:  [3,4,5,1,2] → 1
 * Steps:
 *   while (left < right): nums[mid] > nums[right] → min right side mein (left = mid + 1)
 *                         warna right = mid.
 * Target: Time O(log n)
 * ------------------------------------------------------------------------- */
function findMin(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. Find Peak Element · Medium · LeetCode 162
 * Question: Koi bhi peak ka index (apne neighbours se bada). Bahar = -Infinity.
 * Example:  [1,2,3,1] → 2
 * Steps: nums[mid] < nums[mid+1] → upar chadh rahe ho, peak right mein (left = mid + 1),
 *        warna right = mid.
 * Target: Time O(log n)
 * ------------------------------------------------------------------------- */
function findPeakElement(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q9. Search a 2D Matrix · Medium · LeetCode 74
 * Question: Har row sorted, har row ka pehla > pichhli row ka last. Target hai?
 * Example:  [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3 → true
 * Steps: Matrix ko 1D maan lo: index i → row = Math.floor(i / cols), col = i % cols.
 * Target: Time O(log(m·n))
 * ------------------------------------------------------------------------- */
function searchMatrix(matrix, target) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q10. Koko Eating Bananas · Medium · LeetCode 875
 * Question: piles, h ghante. Speed k (bananas/hour), ek ghante mein ek hi pile.
 *           Minimum k jisse h ghante mein sab kha le.
 * Example:  [3,6,7,11], h = 8 → 4
 * Steps:
 *   1. lo = 1, hi = max(piles).
 *   2. hours(k) = sum of Math.ceil(p / k).
 *   3. Template 2, condition = hours(k) <= h.
 * Target: Time O(n log max)
 * ------------------------------------------------------------------------- */
function minEatingSpeed(piles, h) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q1 Binary Search", search, [
  [[[-1, 0, 3, 5, 9, 12], 9], 4], [[[-1, 0, 3, 5, 9, 12], 2], -1], [[[5], 5], 0],
]);
test("Q2 Search Insert Position", searchInsert, [
  [[[1, 3, 5, 6], 5], 2], [[[1, 3, 5, 6], 2], 1], [[[1, 3, 5, 6], 7], 4], [[[1, 3, 5, 6], 0], 0],
]);
test("Q3 First Bad Version", (n, bad) => firstBadVersion(n, (v) => v >= bad), [
  [[5, 4], 4], [[1, 1], 1], [[100, 37], 37], [[2126753390, 1702766719], 1702766719],
]);
test("Q4 Sqrt(x)", mySqrt, [
  [[4], 2], [[8], 2], [[0], 0], [[1], 1], [[2147395599], 46339],
]);
test("Q5 Find First and Last Position", searchRange, [
  [[[5, 7, 7, 8, 8, 10], 8], [3, 4]], [[[5, 7, 7, 8, 8, 10], 6], [-1, -1]], [[[], 0], [-1, -1]],
]);
test("Q6 Search in Rotated Sorted Array", searchRotated, [
  [[[4, 5, 6, 7, 0, 1, 2], 0], 4], [[[4, 5, 6, 7, 0, 1, 2], 3], -1], [[[1], 0], -1], [[[3, 1], 1], 1],
]);
test("Q7 Find Minimum in Rotated Sorted Array", findMin, [
  [[[3, 4, 5, 1, 2]], 1], [[[4, 5, 6, 7, 0, 1, 2]], 0], [[[11, 13, 15, 17]], 11],
]);
test("Q8 Find Peak Element", findPeakElement, [
  [[[1, 2, 3, 1]], 2], [[[1, 2, 1, 3, 5, 6, 4]], 5], [[[1]], 0],
], { check: (i, [nums]) => Number.isInteger(i) && i >= 0 && i < nums.length &&
  (i === 0 || nums[i] > nums[i - 1]) && (i === nums.length - 1 || nums[i] > nums[i + 1]) });
test("Q9 Search a 2D Matrix", searchMatrix, [
  [[[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], true],
  [[[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13], false],
]);
test("Q10 Koko Eating Bananas", minEatingSpeed, [
  [[[3, 6, 7, 11], 8], 4], [[[30, 11, 23, 4, 20], 5], 30], [[[30, 11, 23, 4, 20], 6], 23],
]);
