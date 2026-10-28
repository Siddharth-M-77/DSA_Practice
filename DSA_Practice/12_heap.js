/* ============================================================================
 * 12. HEAP / PRIORITY QUEUE
 * Chalao: node 12_heap.js
 * ============================================================================
 *
 * DEFINITION
 *   Heap = complete binary tree jo ARRAY mein store hota hai.
 *   Min heap: har parent <= uske children → sabse chhota hamesha h[0] pe.
 *   Max heap: ulta.
 *     index i ka parent = Math.floor((i - 1) / 2)
 *     left child = 2i + 1, right child = 2i + 2
 *
 *   peek (min/max dekhna): O(1)
 *   push / pop:            O(log n)   (bubble up / sink down)
 *
 * KAB LAGTA HAI
 *   "top K", "K-th largest/smallest", "K sorted lists merge karo",
 *   "baar-baar sabse chhota/bada chahiye".
 *   Trick: K largest ke liye size K ka MIN heap rakho. Heap mein K se zyada ho
 *   toh pop (sabse chhota nikal jaata hai). End mein h[0] = K-th largest.
 *   Time O(n log k).
 *
 * JS MEIN DIKKAT: built-in heap nahi hai. Interview mein 3 options:
 *   1. Chhota input → sort kar do, aur bolo "ideally heap, O(n log k)".
 *   2. LeetCode JS mein MinPriorityQueue / MaxPriorityQueue available hai.
 *   3. Khud ka MinHeap likho (Q1). Ek baar likh liya toh yaad rehta hai.
 * ========================================================================== */

const { todo, test, runOps, toList, toArray } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q0. ⭐ MinHeap khud likho (baaki questions isi ko use kar sakte hain)
 * Steps:
 *   push(val): end mein daalo, phir BUBBLE UP: jab tak parent > current, swap.
 *   pop():    top = h[0]. last = h.pop(). Heap khaali nahi → h[0] = last,
 *             phir SINK DOWN: chhote child se swap jab tak child < current.
 *   peek() = h[0], size() = h.length.
 * Comparator lo taaki max heap / objects bhi chal sakein:
 *   new MinHeap((a, b) => a - b)   → min heap
 *   new MinHeap((a, b) => b - a)   → max heap
 * ------------------------------------------------------------------------- */
class MinHeap {
  constructor(compare = (a, b) => a - b) {
    todo();
  }
  size() {}
  peek() {}
  push(val) {}
  pop() {}
}

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Kth Largest Element in an Array · Medium · LeetCode 215
 * Example:  [3,2,1,5,6,4], k = 2 → 5
 * Steps: Size k ka min heap. Har num push, size > k → pop. return peek.
 * Target: Time O(n log k), Space O(k)
 * ------------------------------------------------------------------------- */
function findKthLargest(nums, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. Kth Largest Element in a Stream · Easy · LeetCode 703
 * Question: constructor(k, nums). add(val) → abhi tak ka k-th largest.
 * Steps: Size k ka min heap maintain. add: push, size > k → pop, return peek.
 * ------------------------------------------------------------------------- */
class KthLargest {
  constructor(k, nums) {
    todo();
  }
  add(val) {}
}

/* ----------------------------------------------------------------------------
 * Q3. Last Stone Weight · Easy · LeetCode 1046
 * Question: Har baar 2 sabse bhaari patthar x <= y smash: barabar → dono khatam,
 *           warna y - x bachta hai. Last bacha weight (ya 0).
 * Example:  [2,7,4,1,8,1] → 1
 * Steps: Max heap. while size > 1: y = pop, x = pop, y !== x → push(y - x).
 * ------------------------------------------------------------------------- */
function lastStoneWeight(stones) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. K Closest Points to Origin · Medium · LeetCode 973
 * Question: (0,0) ke sabse paas k points (any order).
 * Example:  [[1,3],[-2,2]], k = 1 → [[-2,2]]
 * Steps: distance² = x² + y² (sqrt ki zaroorat nahi).
 *        Simple: sort by distance, slice(0, k). Better: size k ka max heap.
 * ------------------------------------------------------------------------- */
function kClosest(points, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. Merge k Sorted Lists · Hard (bonus) · LeetCode 23
 * Question: k sorted linked lists ko ek sorted list mein.
 * Steps: Har list ka head heap mein (compare node.val). Pop smallest → tail pe
 *        lagao, uska next heap mein push. Dummy node use karo.
 * Target: Time O(N log k)
 * ------------------------------------------------------------------------- */
function mergeKLists(lists) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q0 MinHeap", (vals) => {
  const h = new MinHeap();
  vals.forEach((v) => h.push(v));
  const out = [];
  while (h.size()) out.push(h.pop());
  const max = new MinHeap((a, b) => b - a);
  vals.forEach((v) => max.push(v));
  return [out, max.peek()];
}, [
  [[[5, 3, 8, 1, 9, 2, 2]], [[1, 2, 2, 3, 5, 8, 9], 9]],
  [[[1]], [[1], 1]],
]);
test("Q1 Kth Largest (heap)", findKthLargest, [
  [[[3, 2, 1, 5, 6, 4], 2], 5], [[[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], 4],
]);
test("Q2 Kth Largest in a Stream", (ops, args) => runOps(KthLargest, ops, args), [
  [[["KthLargest", "add", "add", "add", "add", "add"], [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]],
    [null, 4, 5, 5, 8, 8]],
]);
test("Q3 Last Stone Weight", lastStoneWeight, [
  [[[2, 7, 4, 1, 8, 1]], 1], [[[1]], 1], [[[2, 2]], 0],
]);
test("Q4 K Closest Points", kClosest, [
  [[[[1, 3], [-2, 2]], 1], [[-2, 2]]],
  [[[[3, 3], [5, -1], [-2, 4]], 2], [[3, 3], [-2, 4]]],
], { unordered: "outer" });
test("Q5 Merge k Sorted Lists", (lists) => toArray(mergeKLists(lists.map((l) => toList(l)))), [
  [[[[1, 4, 5], [1, 3, 4], [2, 6]]], [1, 1, 2, 3, 4, 4, 5, 6]], [[[]], []], [[[[]]], []],
]);
