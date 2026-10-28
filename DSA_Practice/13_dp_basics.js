/* ============================================================================
 * 13. DYNAMIC PROGRAMMING BASICS (BONUS)
 * Chalao: node 13_dp_basics.js
 * ============================================================================
 *
 * Pehle baaki sheet khatam kar, phir ye. Service companies mein rarely aata hai,
 * product companies mein aata hai.
 *
 * DEFINITION
 *   DP = recursion + yaad rakhna. Jab recursion mein SAME subproblem baar-baar
 *   calculate ho raha ho, uska answer store kar lo.
 *     MEMOIZATION (top-down): recursion + Map/array cache.
 *     TABULATION (bottom-up): chhote answers se table bharo, loop se.
 *
 *   fib(5) plain recursion → fib(3) 2 baar, fib(2) 3 baar... O(2^n).
 *   Memo ke saath har fib(i) ek baar → O(n).
 *
 * KAB LAGTA HAI
 *   "kitne tareeke (ways)", "minimum/maximum cost", "possible hai ya nahi",
 *   aur choice har step pe (lo ya chhodo).
 *
 * STEPS (har DP question)
 *   1. STATE: dp[i] ka matlab kya hai? (ek line mein likho)
 *   2. TRANSITION: dp[i] pichhle states se kaise banega?
 *   3. BASE CASE: dp[0], dp[1]...
 *   4. ANSWER: dp[n]? max(dp)?
 *   5. Space optimize: sirf pichhle 2 chahiye toh 2 variables.
 *
 * TEMPLATE: Climbing stairs
 *   ways(n) = ways(n - 1) + ways(n - 2)
 *   let prev2 = 1, prev1 = 2;
 *   for (let i = 3; i <= n; i++) { const curr = prev1 + prev2; prev2 = prev1; prev1 = curr; }
 *
 * TEMPLATE: Memoization
 *   const memo = new Map();
 *   function solve(i) {
 *     if (base) return ...;
 *     if (memo.has(i)) return memo.get(i);
 *     const ans = ...solve(smaller)...;
 *     memo.set(i, ans);
 *     return ans;
 *   }
 * ========================================================================== */

const { todo, test } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Climbing Stairs · Easy · LeetCode 70
 * Question: Ek baar mein 1 ya 2 seedhi. n seedhi chadhne ke kitne tareeke?
 * Example:  3 → 3 (1+1+1, 1+2, 2+1)
 * Steps: State ways(i). ways(i) = ways(i-1) + ways(i-2). Base ways(1)=1, ways(2)=2.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function climbStairs(n) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. Fibonacci Number · Easy · LeetCode 509
 * Question: F(n), memoization ke saath (plain recursion nahi).
 * Steps: Memo template. Phir tabulation bhi likho.
 * ------------------------------------------------------------------------- */
function fib(n) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. Min Cost Climbing Stairs · Easy · LeetCode 746
 * Question: cost[i] dena padta hai step i pe. Index 0 ya 1 se shuru. Top
 *           (index n) tak min cost?
 * Example:  [10,15,20] → 15
 * Steps: dp[i] = cost[i] + min(dp[i-1], dp[i-2]). Answer min(dp[n-1], dp[n-2]).
 * ------------------------------------------------------------------------- */
function minCostClimbingStairs(cost) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. ⭐ House Robber · Medium · LeetCode 198
 * Question: Adjacent ghar nahi loot sakte. Max paisa?
 * Example:  [2,7,9,3,1] → 12 (2 + 9 + 1)
 * Steps: Har ghar: LO (dp[i-2] + nums[i]) ya CHHODO (dp[i-1]). Max.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function rob(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. ⭐ Coin Change · Medium · LeetCode 322
 * Question: amount banane ke liye minimum coins (har coin unlimited). Na bane → -1.
 * Example:  [1,2,5], 11 → 3 (5+5+1)
 * Steps:
 *   dp = Array(amount+1).fill(Infinity); dp[0] = 0.
 *   a = 1..amount: har coin <= a → dp[a] = min(dp[a], 1 + dp[a - coin]).
 *   dp[amount] Infinity → -1.
 * Target: Time O(amount · coins)
 * ------------------------------------------------------------------------- */
function coinChange(coins, amount) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Unique Paths · Medium · LeetCode 62
 * Question: m×n grid, top-left se bottom-right, sirf right ya down. Kitne paths?
 * Example:  m = 3, n = 7 → 28
 * Steps: dp[r][c] = dp[r-1][c] (upar) + dp[r][c-1] (left). Pehli row/col = 1.
 * ------------------------------------------------------------------------- */
function uniquePaths(m, n) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. Longest Increasing Subsequence · Medium · LeetCode 300
 * Question: Sabse lambi strictly increasing subsequence (continuous zaroori nahi).
 * Example:  [10,9,2,5,3,7,101,18] → 4 ([2,3,7,101])
 * Steps: dp[i] = i pe khatam hone wali LIS. dp[i] = 1 + max(dp[j]) jahan j < i
 *        aur nums[j] < nums[i]. Answer max(dp).
 * Target: O(n²) (bonus: O(n log n) binary search)
 * ------------------------------------------------------------------------- */
function lengthOfLIS(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. Word Break · Medium · LeetCode 139
 * Question: s ko dictionary words mein tod sakte ho?
 * Example:  "leetcode", ["leet","code"] → true
 * Steps: dp[i] = s.slice(0, i) toot sakta hai. dp[0] = true.
 *        dp[i] = koi j < i jahan dp[j] && set.has(s.slice(j, i)).
 * ------------------------------------------------------------------------- */
function wordBreak(s, wordDict) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q9. Longest Common Subsequence · Medium · LeetCode 1143
 * Example:  "abcde", "ace" → 3
 * Steps: 2D table (m+1)×(n+1), 0 se bharo.
 *        a[i-1] === b[j-1] → dp[i][j] = 1 + dp[i-1][j-1]
 *        warna max(dp[i-1][j], dp[i][j-1]).
 * Target: Time O(m · n)
 * ------------------------------------------------------------------------- */
function longestCommonSubsequence(text1, text2) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q1 Climbing Stairs", climbStairs, [[[1], 1], [[2], 2], [[3], 3], [[5], 8], [[45], 1836311903]]);
test("Q2 Fibonacci Number", fib, [[[0], 0], [[4], 3], [[30], 832040], [[50], 12586269025]]);
test("Q3 Min Cost Climbing Stairs", minCostClimbingStairs, [
  [[[10, 15, 20]], 15], [[[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], 6],
]);
test("Q4 House Robber", rob, [[[[1, 2, 3, 1]], 4], [[[2, 7, 9, 3, 1]], 12], [[[5]], 5]]);
test("Q5 Coin Change", coinChange, [
  [[[1, 2, 5], 11], 3], [[[2], 3], -1], [[[1], 0], 0], [[[186, 419, 83, 408], 6249], 20],
]);
test("Q6 Unique Paths", uniquePaths, [[[3, 7], 28], [[3, 2], 3], [[1, 1], 1]]);
test("Q7 Longest Increasing Subsequence", lengthOfLIS, [
  [[[10, 9, 2, 5, 3, 7, 101, 18]], 4], [[[0, 1, 0, 3, 2, 3]], 4], [[[7, 7, 7, 7]], 1],
]);
test("Q8 Word Break", wordBreak, [
  [["leetcode", ["leet", "code"]], true],
  [["applepenapple", ["apple", "pen"]], true],
  [["catsandog", ["cats", "dog", "sand", "and", "cat"]], false],
]);
test("Q9 Longest Common Subsequence", longestCommonSubsequence, [
  [["abcde", "ace"], 3], [["abc", "abc"], 3], [["abc", "def"], 0],
]);
