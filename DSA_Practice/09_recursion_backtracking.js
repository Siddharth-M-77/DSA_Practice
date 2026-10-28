/* ============================================================================
 * 9. RECURSION AND BACKTRACKING
 * Chalao: node 09_recursion_backtracking.js
 * ============================================================================
 *
 * DEFINITION
 *   Recursion = function jo khud ko chhote input pe call kare.
 *   Trees aur graphs ki neev yahi hai, isliye pehle ye pakka kar.
 *
 *   Recursion ke 3 hisse:
 *     1. BASE CASE   — kab rukna hai (warna stack overflow).
 *     2. CHHOTA KAAM — is level pe kya karna hai.
 *     3. SELF CALL   — chhote input pe khud ko call.
 *
 *     function factorial(n) {
 *       if (n <= 1) return 1;          // base case
 *       return n * factorial(n - 1);   // chhota kaam + self call
 *     }
 *   Space: recursion depth n → call stack pe n frames → O(n) space.
 *
 *   Backtracking = saare options try karo: CHOOSE → EXPLORE → UN-CHOOSE.
 *
 * KAB LAGTA HAI
 *   "saare combinations / subsets / permutations do", ya problem apne chhote
 *   version se bane (factorial, fibonacci, trees).
 *
 * TEMPLATE: Backtracking (all subsets)
 *   const result = [], path = [];
 *   function backtrack(start) {
 *     result.push([...path]);              // COPY daalo, reference nahi
 *     for (let i = start; i < nums.length; i++) {
 *       path.push(nums[i]);                // choose
 *       backtrack(i + 1);                  // explore
 *       path.pop();                        // un-choose
 *     }
 *   }
 *   backtrack(0);
 *   Time O(n · 2^n)
 * ========================================================================== */

const { todo, test } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Factorial aur Fibonacci (recursion se) · Easy
 * Question: factorial(n) = n!, fibonacci(n) = F(n), F(0)=0, F(1)=1.
 * Steps:
 *   factorial: base n <= 1 → 1, warna n * factorial(n-1).
 *   fibonacci: base n < 2 → n, warna fib(n-1) + fib(n-2).
 *   (Plain fib O(2^n) hai — memo ke saath O(n), 13_dp.js mein.)
 * ------------------------------------------------------------------------- */
function factorial(n) {
  todo();
}
function fibonacci(n) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. ⭐ Power of Two · Easy · LeetCode 231
 * Question: n, 2 ki power hai?
 * Steps:
 *   Recursion: n === 1 → true; n <= 0 ya odd → false; warna isPowerOfTwo(n / 2).
 *   Bit trick: n > 0 && (n & (n - 1)) === 0.
 * Target: O(log n) recursion, O(1) bit trick
 * ------------------------------------------------------------------------- */
function isPowerOfTwo(n) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. Pow(x, n) · Medium · LeetCode 50
 * Question: x^n nikalo (Math.pow nahi). n negative ho sakta hai.
 * Example:  2, 10 → 1024;  2, -2 → 0.25
 * Steps:
 *   1. n < 0 → 1 / myPow(x, -n).
 *   2. n === 0 → 1.
 *   3. half = myPow(x, Math.floor(n / 2)).
 *   4. n even → half * half, odd → half * half * x.
 * Target: Time O(log n)
 * ------------------------------------------------------------------------- */
function myPow(x, n) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. ⭐ Subsets · Medium · LeetCode 78
 * Question: Saare subsets (power set). Unique numbers.
 * Example:  [1,2,3] → [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * Steps: Upar wala template.
 * Target: Time O(n · 2^n)
 * ------------------------------------------------------------------------- */
function subsets(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. ⭐ Permutations · Medium · LeetCode 46
 * Question: Saare permutations.
 * Example:  [1,2,3] → 6 permutations
 * Steps:
 *   1. used = Array(n).fill(false).
 *   2. path.length === n → result mein copy push.
 *   3. Har unused i: used[i] = true, push, recurse, pop, used[i] = false.
 * Target: Time O(n · n!)
 * ------------------------------------------------------------------------- */
function permute(nums) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Combination Sum · Medium · LeetCode 39
 * Question: candidates se combinations jinka sum = target. Same number kitni
 *           bhi baar le sakte ho.
 * Example:  [2,3,6,7], 7 → [[2,2,3],[7]]
 * Steps:
 *   backtrack(start, remaining): remaining === 0 → push copy; < 0 → return.
 *   for i = start..: push, backtrack(i, remaining - c[i]) ← i hi, i+1 nahi
 *   (same element dobara), pop.
 * ------------------------------------------------------------------------- */
function combinationSum(candidates, target) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. Generate Parentheses · Medium · LeetCode 22
 * Question: n pairs ke saare valid brackets combinations.
 * Example:  3 → ["((()))","(()())","(())()","()(())","()()()"]
 * Steps:
 *   backtrack(str, open, close):
 *     str.length === 2n → push.
 *     open < n → "(" add karo.  close < open → ")" add karo.
 * ------------------------------------------------------------------------- */
function generateParenthesis(n) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. Letter Combinations of a Phone Number · Medium · LeetCode 17
 * Question: Digits 2-9 → phone keypad ke saare letter combinations.
 * Example:  "23" → ["ad","ae","af","bd","be","bf","cd","ce","cf"];  "" → []
 * Steps:
 *   map = {2:"abc",3:"def",4:"ghi",5:"jkl",6:"mno",7:"pqrs",8:"tuv",9:"wxyz"}
 *   backtrack(i, path): i === digits.length → push. Har letter of map[digits[i]] → recurse.
 * ------------------------------------------------------------------------- */
function letterCombinations(digits) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q9. Word Search · Medium · LeetCode 79
 * Question: Grid mein word hai? Adjacent (up/down/left/right) cells se,
 *           ek cell ek hi baar.
 * Steps:
 *   dfs(r, c, i): i === word.length → true. Bahar / char match nahi → false.
 *   tmp = board[r][c]; board[r][c] = "#" (visited);
 *   found = 4 directions mein dfs(..., i+1);
 *   board[r][c] = tmp (wapas — backtrack); return found.
 *   Har cell se dfs(r, c, 0) try karo.
 * Target: Time O(m · n · 4^L)
 * ------------------------------------------------------------------------- */
function exist(board, word) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q1a Factorial", factorial, [[[0], 1], [[1], 1], [[5], 120], [[10], 3628800]]);
test("Q1b Fibonacci", fibonacci, [[[0], 0], [[1], 1], [[2], 1], [[10], 55]]);
test("Q2 Power of Two", isPowerOfTwo, [
  [[1], true], [[16], true], [[3], false], [[0], false], [[-16], false],
]);
test("Q3 Pow(x, n)", myPow, [
  [[2, 10], 1024], [[2.1, 3], 9.261], [[2, -2], 0.25], [[1, 2147483647], 1],
], { close: true });
test("Q4 Subsets", subsets, [
  [[[1, 2, 3]], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]],
  [[[0]], [[], [0]]],
], { unordered: "deep" });
test("Q5 Permutations", permute, [
  [[[1, 2, 3]], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]],
  [[[0, 1]], [[0, 1], [1, 0]]],
], { unordered: "outer" });
test("Q6 Combination Sum", combinationSum, [
  [[[2, 3, 6, 7], 7], [[2, 2, 3], [7]]],
  [[[2, 3, 5], 8], [[2, 2, 2, 2], [2, 3, 3], [3, 5]]],
  [[[2], 1], []],
], { unordered: "deep" });
test("Q7 Generate Parentheses", generateParenthesis, [
  [[3], ["((()))", "(()())", "(())()", "()(())", "()()()"]],
  [[1], ["()"]],
], { unordered: "outer" });
test("Q8 Letter Combinations", letterCombinations, [
  [["23"], ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]],
  [[""], []],
  [["2"], ["a", "b", "c"]],
], { unordered: "outer" });
const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
test("Q9 Word Search", exist, [
  [[board, "ABCCED"], true], [[board, "SEE"], true], [[board, "ABCB"], false],
]);
