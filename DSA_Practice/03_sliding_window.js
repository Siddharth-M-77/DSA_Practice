/* ============================================================================
 * 3. SLIDING WINDOW
 * Chalao: node 03_sliding_window.js
 * ============================================================================
 *
 * DEFINITION
 *   Array/string ka ek continuous hissa (window) [left..right]. Right se window
 *   badhao, condition toot jaaye toh left se chhota karo. Har element ek baar
 *   andar aata hai, ek baar bahar jaata hai → O(n).
 *
 * KAB LAGTA HAI
 *   "continuous subarray / substring" + "longest / shortest / maximum / at most K".
 *
 * TEMPLATE 1: Variable-size window
 *   let left = 0, best = 0;
 *   for (let right = 0; right < n; right++) {
 *     add(arr[right]);                  // window mein daalo
 *     while (windowInvalid()) {         // condition toot gayi
 *       remove(arr[left]); left++;      // left se chhota karo
 *     }
 *     best = Math.max(best, right - left + 1);
 *   }
 *
 * TEMPLATE 2: Fixed-size window (size k)
 *   let sum = 0;
 *   for (let i = 0; i < k; i++) sum += nums[i];
 *   let best = sum;
 *   for (let i = k; i < n; i++) {
 *     sum += nums[i] - nums[i - k];     // naya add, sabse purana hatao
 *     best = Math.max(best, sum);
 *   }
 * ========================================================================== */

const { todo, test } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Longest Substring Without Repeating Characters · Medium · LeetCode 3
 * Question: Bina repeat wale characters ki sabse lambi substring ki length.
 * Example:  "abcabcbb" → 3 ("abc"),  "pwwkew" → 3 ("wke")
 * Steps:
 *   1. lastSeen Map: char -> last index. left = 0, best = 0.
 *   2. right loop: char window ke andar pehle aaya (lastSeen.get(ch) >= left)
 *      → left = lastSeen.get(ch) + 1.
 *   3. lastSeen.set(ch, right); best = max(best, right - left + 1).
 * Target: Time O(n), Space O(min(n, charset))
 * ------------------------------------------------------------------------- */
function lengthOfLongestSubstring(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. Maximum Average Subarray I · Easy · LeetCode 643
 * Question: Size k ki continuous subarray ka max average.
 * Example:  [1,12,-5,-6,50,3], k = 4 → 12.75
 * Steps: Fixed window template, max sum / k.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function findMaxAverage(nums, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. ⭐ Minimum Size Subarray Sum · Medium · LeetCode 209
 * Question: Sabse chhoti subarray ki length jiska sum >= target (positive nums).
 *           Na mile toh 0.
 * Example:  target = 7, [2,3,1,2,4,3] → 2 ([4,3])
 * Steps:
 *   1. right se sum badhao.
 *   2. while (sum >= target): best = min(best, right-left+1); sum -= nums[left++].
 *   3. best Infinity raha toh 0.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function minSubArrayLen(target, nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. ⭐ Longest Repeating Character Replacement · Medium · LeetCode 424
 * Question: Max k characters badal sakte ho. Same letters wali sabse lambi
 *           substring ki length?
 * Example:  "AABABBA", k = 1 → 4
 * Steps:
 *   1. 26 count array, maxFreq = window mein sabse zyada aane wale ka count.
 *   2. Window valid tab: (window size - maxFreq) <= k.
 *   3. Invalid → count[s[left]]--, left++.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function characterReplacement(s, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. ⭐ Permutation in String · Medium · LeetCode 567
 * Question: s2 mein s1 ka koi permutation (substring ke roop mein) hai?
 * Example:  s1 = "ab", s2 = "eidbaooo" → true ("ba")
 * Steps:
 *   1. s1 ke 26 counts. s2 pe size = s1.length ka fixed window.
 *   2. Har step pe window ke counts s1 ke counts se match? → true.
 *   (Compare: a.join() === b.join() ya ek matches counter.)
 * Target: Time O(n · 26), Space O(1)
 * ------------------------------------------------------------------------- */
function checkInclusion(s1, s2) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Find All Anagrams in a String · Medium · LeetCode 438
 * Question: s mein p ke saare anagrams ke start indexes.
 * Example:  s = "cbaebabacd", p = "abc" → [0,6]
 * Steps: Q5 jaisa hi, match pe index (i - p.length + 1) push karo.
 * Target: Time O(n · 26), Space O(1)
 * ------------------------------------------------------------------------- */
function findAnagrams(s, p) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. Max Consecutive Ones III · Medium · LeetCode 1004
 * Question: Max k zeros ko 1 bana sakte ho. Sabse lambi 1s ki sequence?
 * Example:  [1,1,1,0,0,0,1,1,1,1,0], k = 2 → 6
 * Steps: Window mein zeros gino. zeros > k → left se shrink (0 nikla toh zeros--).
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function longestOnes(nums, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. Minimum Window Substring · Hard (bonus) · LeetCode 76
 * Question: s ki sabse chhoti substring jismein t ke saare chars (count ke saath)
 *           ho. Na ho toh "".
 * Example:  s = "ADOBECODEBANC", t = "ABC" → "BANC"
 * Steps:
 *   1. need Map (t ke counts), required = need.size, have = 0.
 *   2. right badhao; jab window[ch] === need[ch] → have++.
 *   3. while (have === required): answer update, left wala hatao,
 *      count need se kam hua toh have--.
 * Target: Time O(n + m), Space O(charset)
 * ------------------------------------------------------------------------- */
function minWindow(s, t) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q1 Longest Substring Without Repeating", lengthOfLongestSubstring, [
  [["abcabcbb"], 3], [["bbbbb"], 1], [["pwwkew"], 3], [[""], 0], [["abba"], 2],
]);
test("Q2 Maximum Average Subarray I", findMaxAverage, [
  [[[1, 12, -5, -6, 50, 3], 4], 12.75],
  [[[5], 1], 5],
], { close: true });
test("Q3 Minimum Size Subarray Sum", minSubArrayLen, [
  [[7, [2, 3, 1, 2, 4, 3]], 2],
  [[4, [1, 4, 4]], 1],
  [[11, [1, 1, 1, 1, 1, 1, 1, 1]], 0],
]);
test("Q4 Longest Repeating Character Replacement", characterReplacement, [
  [["ABAB", 2], 4],
  [["AABABBA", 1], 4],
]);
test("Q5 Permutation in String", checkInclusion, [
  [["ab", "eidbaooo"], true],
  [["ab", "eidboaoo"], false],
  [["abc", "ab"], false],
]);
test("Q6 Find All Anagrams in a String", findAnagrams, [
  [["cbaebabacd", "abc"], [0, 6]],
  [["abab", "ab"], [0, 1, 2]],
]);
test("Q7 Max Consecutive Ones III", longestOnes, [
  [[[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2], 6],
  [[[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3], 10],
]);
test("Q8 Minimum Window Substring", minWindow, [
  [["ADOBECODEBANC", "ABC"], "BANC"],
  [["a", "a"], "a"],
  [["a", "aa"], ""],
]);
