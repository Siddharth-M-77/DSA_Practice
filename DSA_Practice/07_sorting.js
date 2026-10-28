/* ============================================================================
 * 7. SORTING
 * Chalao: node 07_sorting.js
 * ============================================================================
 *
 * DEFINITION
 *   Elements ko order (chhote se bade) mein lagana. Service companies kabhi-kabhi
 *   seedha bolti hain "sort without using built-in sort". Merge sort aur quick
 *   sort likhna aana chahiye, aur ye table yaad honi chahiye.
 *
 *   STABLE sort = barabar values ka original order bana rehta hai.
 *
 * ┌────────────────┬────────────┬────────────┬────────────┬──────────┬────────┐
 * │ Algorithm      │ Best       │ Average    │ Worst      │ Space    │ Stable │
 * ├────────────────┼────────────┼────────────┼────────────┼──────────┼────────┤
 * │ Bubble sort    │ O(n)       │ O(n²)      │ O(n²)      │ O(1)     │ Yes    │
 * │ Selection sort │ O(n²)      │ O(n²)      │ O(n²)      │ O(1)     │ No     │
 * │ Insertion sort │ O(n)       │ O(n²)      │ O(n²)      │ O(1)     │ Yes    │
 * │ Merge sort     │ O(n log n) │ O(n log n) │ O(n log n) │ O(n)     │ Yes    │
 * │ Quick sort     │ O(n log n) │ O(n log n) │ O(n²)      │ O(log n) │ No     │
 * │ Heap sort      │ O(n log n) │ O(n log n) │ O(n log n) │ O(1)     │ No     │
 * │ JS arr.sort()  │ O(n log n) (TimSort in V8)            │ O(n)     │ Yes    │
 * └────────────────┴────────────┴────────────┴────────────┴──────────┴────────┘
 *
 * STEPS YAAD RAKH
 *   Bubble:  har pass mein adjacent pairs compare, bada aage swap. Pass mein ek
 *            bhi swap nahi hua → already sorted, ruk jao (best case O(n)).
 *   Merge:   divide & conquer. Aadha-aadha karo jab tak 1 element na bache,
 *            phir do sorted halves ko two-pointer se merge karo.
 *   Quick:   pivot (last element) chuno. Chhote sab left, bade right (partition).
 *            Pivot apni sahi jagah pe. Dono sides pe recursion.
 *            Worst O(n²) jab pivot hamesha min/max ho (already sorted input).
 *
 * JS GOTCHA: [10, 2, 1].sort() → [1, 10, 2]  (string compare!)
 *            Hamesha .sort((a, b) => a - b)
 * ========================================================================== */

const { todo, test } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Bubble Sort (bina dekhe khud likho) · Easy
 * Question: Array ko ascending sort karo, naya ya same array return karo.
 * Steps:
 *   1. for i = 0..n-1: swapped = false.
 *   2.   for j = 0..n-i-2: arr[j] > arr[j+1] → swap, swapped = true.
 *   3.   !swapped → break.
 * Target: Time O(n²), best O(n). Space O(1)
 * ------------------------------------------------------------------------- */
function bubbleSort(arr) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. ⭐ Merge Sort · Medium
 * Steps:
 *   1. Base: length <= 1 → return arr.
 *   2. mid = Math.floor(n / 2). left = mergeSort(slice(0, mid)), right = mergeSort(slice(mid)).
 *   3. Merge: i, j pointers, chhota push (<= rakho taaki stable rahe).
 *   4. Bache hue concat.
 * Target: Time O(n log n), Space O(n)
 * ------------------------------------------------------------------------- */
function mergeSort(arr) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. ⭐ Quick Sort (in-place) · Medium
 * Steps:
 *   1. lo >= hi → return.
 *   2. pivot = arr[hi], p = lo.
 *   3. i = lo..hi-1: arr[i] < pivot → swap(arr[i], arr[p]), p++.
 *   4. swap(arr[p], arr[hi]) — pivot sahi jagah.
 *   5. quickSort(lo, p-1), quickSort(p+1, hi). return arr.
 * Target: Time O(n log n) avg, O(n²) worst. Space O(log n)
 * ------------------------------------------------------------------------- */
function quickSort(arr, lo = 0, hi = arr.length - 1) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. Sort an Array · Medium · LeetCode 912
 * Question: Built-in sort ke bina sort karo, O(n log n) mein.
 * Steps: Apna merge sort use karo (quick sort sorted input pe slow ho sakta hai).
 * ------------------------------------------------------------------------- */
function sortArray(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. Kth Largest Element in an Array · Medium · LeetCode 215
 * Question: k-th sabse bada element (k-th distinct nahi).
 * Example:  [3,2,1,5,6,4], k = 2 → 5
 * Steps:
 *   Simple: sort descending, arr[k-1]. O(n log n).
 *   Better: Quickselect — partition karo, pivot index === n-k ho toh mil gaya,
 *           warna sirf ek side mein jaao. Average O(n).
 *   (Heap wala tareeka 12_heap.js mein.)
 * ------------------------------------------------------------------------- */
function findKthLargest(nums, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Largest Number · Medium · LeetCode 179
 * Question: Numbers ko aise jodo ki sabse bada number bane (string return).
 * Example:  [3,30,34,5,9] → "9534330"
 * Steps:
 *   1. Sab ko string banao.
 *   2. sort((a, b) => (b + a).localeCompare(a + b)).
 *   3. Join. Pehla "0" hai toh "0" return (["0","0"] → "0").
 * Target: Time O(n log n)
 * ------------------------------------------------------------------------- */
function largestNumber(nums) {
  todo();
}

/* ============================== TESTS ===================================== */
const sortCases = [
  [[[5, 2, 9, 1, 5, 6]], [1, 2, 5, 5, 6, 9]],
  [[[]], []],
  [[[3, -1, 0, -1, 10, 2]], [-1, -1, 0, 2, 3, 10]],
  [[[1, 2, 3, 4]], [1, 2, 3, 4]],
];
test("Q1 Bubble Sort", bubbleSort, sortCases);
test("Q2 Merge Sort", mergeSort, sortCases);
test("Q3 Quick Sort", (arr) => quickSort(arr), sortCases);
test("Q4 Sort an Array", sortArray, [
  [[[5, 2, 3, 1]], [1, 2, 3, 5]], [[[5, 1, 1, 2, 0, 0]], [0, 0, 1, 1, 2, 5]],
]);
test("Q5 Kth Largest Element", findKthLargest, [
  [[[3, 2, 1, 5, 6, 4], 2], 5], [[[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], 4],
]);
test("Q6 Largest Number", largestNumber, [
  [[[10, 2]], "210"], [[[3, 30, 34, 5, 9]], "9534330"], [[[0, 0]], "0"],
]);
