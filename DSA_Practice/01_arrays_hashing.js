/* ============================================================================
 * 1. ARRAYS AND HASHING
 * Chalao: node 01_arrays_hashing.js
 * ============================================================================
 *
 * DEFINITION
 *   Array  = ek line mein rakhe items, index se O(1) access.
 *   Hashing = Map / Set mein value store karna taaki "ye pehle dekha hai kya?"
 *             ka answer O(1) mein mile (average).
 *
 * KAB LAGTA HAI
 *   "pehle dekha hai kya?", "kitni baar aaya?", "pair dhundho jiska sum X ho",
 *   duplicates. Nested loop O(n²) ko Map/Set se O(n) bana do.
 *
 * TEMPLATE (store what you've seen)
 *   const seen = new Map();            // value -> index
 *   for (let i = 0; i < nums.length; i++) {
 *     const need = target - nums[i];
 *     if (seen.has(need)) return [seen.get(need), i];
 *     seen.set(nums[i], i);
 *   }
 *
 * PREFIX SUM (subarray ka sum wale questions)
 *   Running total rakho. sum(i..j) = prefix[j] - prefix[i-1].
 *   const count = new Map([[0, 1]]); // prefixSum -> kitni baar dekha
 *   sum += n; result += count.get(sum - k) || 0; count.set(sum, (count.get(sum) || 0) + 1);
 *
 * RULES: 20 min khud try → phir "Steps" padho → code khud likho → complexity bolo.
 * Har function mein `todo()` hata ke apna code likho.
 * ========================================================================== */

const { todo, test } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Two Sum · Easy · LeetCode 1
 * Question: nums array aur target diya hai. Do alag indexes return karo jinke
 *           numbers ka sum = target. Exactly ek answer hai.
 * Example:  nums = [2,7,11,15], target = 9  →  [0,1]
 * Steps:
 *   1. Map banao: value -> index.
 *   2. Har nums[i] ke liye need = target - nums[i].
 *   3. need Map mein hai? → [map.get(need), i] return.
 *   4. Nahi hai → nums[i] ko Map mein daalo.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
const nums = [2, 7, 11,,11, 15];
const target = 9;
function twoSum(nums, target) {
  const seen = new Map();
  for(let i = 0;i<nums.length;i++){
    const need = target - nums[i];
    if(seen.has(need)){
      return [seen.get(need), i];
    }
    seen.set(nums[i],i)
  }
  todo();
}
console.log(twoSum(nums, target)) 

/* ----------------------------------------------------------------------------
 * Q2. ⭐ Contains Duplicate · Easy · LeetCode 217
 * Question: Koi value array mein 2 ya zyada baar hai toh true, warna false.
 * Example:  [1,2,3,1] → true,  [1,2,3,4] → false
 * Steps:
 *   1. new Set(nums) banao.
 *   2. Set ka size < nums.length → duplicate hai.
 *   (Ya loop mein Set check karo, mile toh turant true.)
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function containsDuplicate(nums) {
  const seen = new Set();
  for(let i = 0;i < nums.length;i++){
    if(seen.has(nums[i])){
      return true;
    }
    seen.add(nums[i]);
  }
  return false; 
  todo();
}
console.log(containsDuplicate(nums))

/* ----------------------------------------------------------------------------
 * Q3. ⭐ Valid Anagram · Easy · LeetCode 242
 * Question: t, s ka anagram hai? (same letters, same count, order alag ho sakta)
 * Example:  s = "anagram", t = "nagaram" → true;  "rat", "car" → false
 * Steps:
 *   1. Length alag → false.
 *   2. 26 size ka count array. s ke char pe +1, t ke char pe -1.
 *      index = ch.charCodeAt(0) - 97
 *   3. Koi bhi count 0 nahi → false.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function isAnagram(s, t) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. ⭐ Best Time to Buy and Sell Stock · Easy · LeetCode 121
 * Question: prices[i] = din i ka price. Ek din kharido, baad ke din becho.
 *           Max profit return karo (loss ho toh 0).
 * Example:  [7,1,5,3,6,4] → 5 (1 pe kharido, 6 pe becho)
 * Steps:
 *   1. minPrice = Infinity, best = 0.
 *   2. Har price pe: minPrice = min(minPrice, price).
 *   3. best = max(best, price - minPrice).
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function maxProfit(prices) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. ⭐ Maximum Subarray (Kadane) · Medium · LeetCode 53
 * Question: Continuous subarray ka sabse bada sum return karo.
 * Example:  [-2,1,-3,4,-1,2,1,-5,4] → 6  ([4,-1,2,1])
 * Steps:
 *   1. curr = 0, best = -Infinity.
 *   2. Har n pe: curr += n; best = max(best, curr).
 *   3. curr < 0 ho gaya → curr = 0 (reset, negative sum aage kaam ka nahi).
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function maxSubArray(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. ⭐ Move Zeroes · Easy · LeetCode 283
 * Question: Saare 0 ko end mein bhejo, baaki ka order same rahe. IN-PLACE.
 * Example:  [0,1,0,3,12] → [1,3,12,0,0]
 * Steps:
 *   1. write = 0.
 *   2. Har non-zero ko nums[write++] pe likho.
 *   3. write se end tak 0 bhar do.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function moveZeroes(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. ⭐ Missing Number · Easy · LeetCode 268
 * Question: 0..n tak ke n distinct numbers hain, ek missing hai. Wo dhundho.
 * Example:  [3,0,1] → 2
 * Steps:
 *   1. n = nums.length. expected = n*(n+1)/2.
 *   2. expected - (array ka sum) = missing.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function missingNumber(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. Single Number · Easy · LeetCode 136
 * Question: Har element 2 baar hai, ek sirf 1 baar. Wo dhundho.
 * Example:  [4,1,2,1,2] → 4
 * Steps:
 *   1. XOR rule: a ^ a = 0, a ^ 0 = a.
 *   2. Sab ka XOR karo, jodi wale cancel, akela bachega.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function singleNumber(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q9. Majority Element · Easy · LeetCode 169
 * Question: Jo element n/2 se zyada baar aata hai, wo return karo.
 * Example:  [2,2,1,1,1,2,2] → 2
 * Steps (Boyer-Moore voting):
 *   1. candidate = null, count = 0.
 *   2. count 0 hai → candidate = n.
 *   3. n === candidate ? count++ : count--.
 *   4. End mein candidate hi answer.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function majorityElement(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q10. Remove Duplicates from Sorted Array · Easy · LeetCode 26
 * Question: Sorted array se duplicates in-place hatao. Unique count k return
 *           karo; pehle k elements unique hone chahiye.
 * Example:  [0,0,1,1,1,2,2,3,3,4] → k = 5, nums = [0,1,2,3,4,...]
 * Steps:
 *   1. slow = 1 (pehla element hamesha unique).
 *   2. i = 1 se: nums[i] !== nums[i-1] → nums[slow++] = nums[i].
 *   3. return slow.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function removeDuplicates(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q11. Rotate Array · Medium · LeetCode 189
 * Question: Array ko k steps right rotate karo. IN-PLACE.
 * Example:  [1,2,3,4,5,6,7], k = 3 → [5,6,7,1,2,3,4]
 * Steps:
 *   1. k = k % n.
 *   2. Poora array reverse.
 *   3. Pehle k reverse, phir baaki n-k reverse.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function rotate(nums, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q12. ⭐ Group Anagrams · Medium · LeetCode 49
 * Question: Anagrams ko ek group mein daalo. Groups kisi bhi order mein.
 * Example:  ["eat","tea","tan","ate","nat","bat"]
 *           → [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Steps:
 *   1. Map: key = word ke letters sorted ("aet"), value = words ki list.
 *   2. Har word ki key banao, list mein push.
 *   3. return [...map.values()].
 * Target: Time O(n · k log k), Space O(n · k)
 * ------------------------------------------------------------------------- */
function groupAnagrams(strs) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q13. ⭐ Top K Frequent Elements · Medium · LeetCode 347
 * Question: Sabse zyada baar aane wale k elements return karo (any order).
 * Example:  [1,1,1,2,2,3], k = 2 → [1,2]
 * Steps (bucket sort):
 *   1. Map se har number ka count.
 *   2. buckets[count] = us count wale numbers (size n+1).
 *   3. Peeche se buckets padho jab tak k elements na mil jaayein.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function topKFrequent(nums, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q14. ⭐ Product of Array Except Self · Medium · LeetCode 238
 * Question: answer[i] = nums[i] ko chhod ke baaki sab ka product. Division nahi.
 * Example:  [1,2,3,4] → [24,12,8,6]
 * Steps:
 *   1. Left pass: answer[i] = left ke sab ka product (left = 1 se shuru).
 *   2. Right pass (peeche se): answer[i] *= right; right *= nums[i].
 * Target: Time O(n), Space O(1) extra (output count nahi)
 * ------------------------------------------------------------------------- */
function productExceptSelf(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q15. Longest Consecutive Sequence · Medium · LeetCode 128
 * Question: Sabse lambi consecutive numbers ki sequence ki length (O(n) mein).
 * Example:  [100,4,200,1,3,2] → 4  (1,2,3,4)
 * Steps:
 *   1. Set banao.
 *   2. Har n pe: agar n-1 Set mein NAHI hai → yahi sequence ki shuruaat.
 *   3. Wahan se n+1, n+2... jab tak Set mein hai, length gino.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function longestConsecutive(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q16. ⭐ Subarray Sum Equals K · Medium · LeetCode 560
 * Question: Kitne continuous subarrays ka sum = k hai?
 * Example:  [1,1,1], k = 2 → 2
 * Steps:
 *   1. count Map = {0: 1}, sum = 0, result = 0.
 *   2. sum += n. result += count.get(sum - k) || 0.
 *   3. count mein sum ka count +1.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function subarraySum(nums, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q17. Sort Colors (Dutch National Flag) · Medium · LeetCode 75
 * Question: Array mein sirf 0,1,2 hain. Sort karo IN-PLACE, ek pass, no sort().
 * Example:  [2,0,2,1,1,0] → [0,0,1,1,2,2]
 * Steps:
 *   1. low = 0, mid = 0, high = n-1.
 *   2. nums[mid] 0 → swap(low, mid), low++, mid++.
 *      nums[mid] 1 → mid++.
 *      nums[mid] 2 → swap(mid, high), high-- (mid mat badhao).
 *   3. mid <= high tak chalao.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function sortColors(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q18. Merge Intervals · Medium · LeetCode 56
 * Question: Overlapping intervals merge karo.
 * Example:  [[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]
 * Steps:
 *   1. start se sort: intervals.sort((a, b) => a[0] - b[0]).
 *   2. result mein pehla daalo.
 *   3. Current ka start <= last ka end → last end = max(last end, curr end).
 *      Warna naya interval push.
 * Target: Time O(n log n), Space O(n)
 * ------------------------------------------------------------------------- */
function mergeIntervals(intervals) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q19. Set Matrix Zeroes · Medium · LeetCode 73
 * Question: Jahan 0 hai, uski poori row aur column 0 karo. IN-PLACE.
 * Example:  [[1,1,1],[1,0,1],[1,1,1]] → [[1,0,1],[0,0,0],[1,0,1]]
 * Steps (easy version, O(m+n) space):
 *   1. zeroRows Set, zeroCols Set mein 0 wali rows/cols note karo.
 *   2. Dobara loop: row ya col Set mein → 0.
 *   Bonus O(1) space: pehli row/column ko hi marker bana do.
 * Target: Time O(m·n), Space O(1) bonus
 * ------------------------------------------------------------------------- */
function setZeroes(matrix) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q20. Spiral Matrix · Medium · LeetCode 54
 * Question: Matrix ko spiral order (clockwise) mein return karo.
 * Example:  [[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5]
 * Steps:
 *   1. top=0, bottom=m-1, left=0, right=n-1.
 *   2. Loop: top row left→right (top++), right col top→bottom (right--),
 *      bottom row right→left agar top<=bottom (bottom--),
 *      left col bottom→top agar left<=right (left++).
 * Target: Time O(m·n), Space O(1) extra
 * ------------------------------------------------------------------------- */
function spiralOrder(matrix) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q1 Two Sum", twoSum, [
  [[[2, 7, 11, 15], 9], [0, 1]],
  [[[3, 2, 4], 6], [1, 2]],
  [[[3, 3], 6], [0, 1]],
], { unordered: "outer" });
test("Q2 Contains Duplicate", containsDuplicate, [
  [[[1, 2, 3, 1]], true],
  [[[1, 2, 3, 4]], false],
  [[[]], false],
]);
test("Q3 Valid Anagram", isAnagram, [
  [["anagram", "nagaram"], true],
  [["rat", "car"], false],
  [["a", "ab"], false],
]);
test("Q4 Best Time to Buy and Sell Stock", maxProfit, [
  [[[7, 1, 5, 3, 6, 4]], 5],
  [[[7, 6, 4, 3, 1]], 0],
]);
test("Q5 Maximum Subarray", maxSubArray, [
  [[[-2, 1, -3, 4, -1, 2, 1, -5, 4]], 6],
  [[[1]], 1],
  [[[5, 4, -1, 7, 8]], 23],
  [[[-3, -1, -2]], -1],
]);
test("Q6 Move Zeroes", moveZeroes, [
  [[[0, 1, 0, 3, 12]], [1, 3, 12, 0, 0]],
  [[[0]], [0]],
], { inPlace: 0 });
test("Q7 Missing Number", missingNumber, [
  [[[3, 0, 1]], 2],
  [[[0, 1]], 2],
  [[[9, 6, 4, 2, 3, 5, 7, 0, 1]], 8],
]);
test("Q8 Single Number", singleNumber, [
  [[[2, 2, 1]], 1],
  [[[4, 1, 2, 1, 2]], 4],
]);
test("Q9 Majority Element", majorityElement, [
  [[[3, 2, 3]], 3],
  [[[2, 2, 1, 1, 1, 2, 2]], 2],
]);
test("Q10 Remove Duplicates from Sorted Array", (nums) => nums.slice(0, removeDuplicates(nums)), [
  [[[1, 1, 2]], [1, 2]],
  [[[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], [0, 1, 2, 3, 4]],
]);
test("Q11 Rotate Array", rotate, [
  [[[1, 2, 3, 4, 5, 6, 7], 3], [5, 6, 7, 1, 2, 3, 4]],
  [[[-1, -100, 3, 99], 2], [3, 99, -1, -100]],
  [[[1, 2], 3], [2, 1]],
], { inPlace: 0 });
test("Q12 Group Anagrams", groupAnagrams, [
  [[["eat", "tea", "tan", "ate", "nat", "bat"]], [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]],
  [[[""]], [[""]]],
], { unordered: "deep" });
test("Q13 Top K Frequent Elements", topKFrequent, [
  [[[1, 1, 1, 2, 2, 3], 2], [1, 2]],
  [[[1], 1], [1]],
], { unordered: "outer" });
test("Q14 Product of Array Except Self", (nums) => productExceptSelf(nums).map((x) => x + 0), [
  [[[1, 2, 3, 4]], [24, 12, 8, 6]],
  [[[-1, 1, 0, -3, 3]], [0, 0, 9, 0, 0]],
]);
test("Q15 Longest Consecutive Sequence", longestConsecutive, [
  [[[100, 4, 200, 1, 3, 2]], 4],
  [[[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], 9],
  [[[]], 0],
]);
test("Q16 Subarray Sum Equals K", subarraySum, [
  [[[1, 1, 1], 2], 2],
  [[[1, 2, 3], 3], 2],
  [[[1, -1, 0], 0], 3],
]);
test("Q17 Sort Colors", sortColors, [
  [[[2, 0, 2, 1, 1, 0]], [0, 0, 1, 1, 2, 2]],
  [[[2, 0, 1]], [0, 1, 2]],
], { inPlace: 0 });
test("Q18 Merge Intervals", mergeIntervals, [
  [[[[1, 3], [2, 6], [8, 10], [15, 18]]], [[1, 6], [8, 10], [15, 18]]],
  [[[[1, 4], [4, 5]]], [[1, 5]]],
  [[[[1, 4], [0, 4]]], [[0, 4]]],
]);
test("Q19 Set Matrix Zeroes", setZeroes, [
  [[[[1, 1, 1], [1, 0, 1], [1, 1, 1]]], [[1, 0, 1], [0, 0, 0], [1, 0, 1]]],
  [[[[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]], [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]],
], { inPlace: 0 });
test("Q20 Spiral Matrix", spiralOrder, [
  [[[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], [1, 2, 3, 6, 9, 8, 7, 4, 5]],
  [[[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]], [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]],
]);
