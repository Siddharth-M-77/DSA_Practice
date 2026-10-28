/* ============================================================================
 * 5. STACK AND QUEUE
 * Chalao: node 05_stack_queue.js
 * ============================================================================
 *
 * DEFINITION
 *   Stack = LIFO (Last In First Out). Plates ka dher: jo last rakha, wahi pehle
 *           niklega. JS: arr.push(x), arr.pop(), top = arr[arr.length - 1]. Sab O(1).
 *   Queue = FIFO (First In First Out). Line mein jo pehle aaya, pehle jaayega.
 *           JS: push() se daalo; shift() O(n) hai, isliye head pointer use karo:
 *           const front = queue[head++];
 *
 * KAB LAGTA HAI
 *   Stack: brackets match, "undo", nested structure (decode string),
 *          "agla bada/chhota element" → MONOTONIC STACK.
 *   Queue: BFS, order mein process karna.
 *
 * TEMPLATE: Matching pairs
 *   const pairs = { ")": "(", "]": "[", "}": "{" };
 *   for (const ch of s) {
 *     if (ch in pairs) { if (stack.pop() !== pairs[ch]) return false; }
 *     else stack.push(ch);
 *   }
 *   return stack.length === 0;
 *
 * TEMPLATE: Monotonic stack (next greater element)
 *   Stack mein woh indexes jinka "bada" abhi tak nahi mila.
 *   for (let i = 0; i < n; i++) {
 *     while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
 *       const prev = stack.pop();
 *       result[prev] = ...;  // prev ka next greater = i
 *     }
 *     stack.push(i);
 *   }
 *   Har index ek baar push, ek baar pop → O(n).
 * ========================================================================== */

const { todo, test, runOps } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Valid Parentheses · Easy · LeetCode 20   (sabse common)
 * Question: "()[]{}" wali string valid hai? (har open ka sahi close, sahi order)
 * Example:  "()[]{}" → true,  "(]" → false,  "([)]" → false
 * Steps: Matching pairs template.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function isValid(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. ⭐ Min Stack · Medium · LeetCode 155
 * Question: push, pop, top, getMin sab O(1) mein.
 *           pop() kuch return nahi karta.
 * Steps:
 *   1. Ek hi stack mein pairs: [val, us time tak ka min].
 *   2. push: min = stack khaali ? val : Math.min(val, top ka min).
 *   3. getMin = top ka min.
 * Target: Har operation O(1)
 * ------------------------------------------------------------------------- */
class MinStack {
  constructor() {
    todo();
  }
  push(val) {}
  pop() {}
  top() {}
  getMin() {}
}

/* ----------------------------------------------------------------------------
 * Q3. ⭐ Implement Queue using Stacks · Easy · LeetCode 232
 * Question: Sirf stack operations (push, pop, top) se queue banao:
 *           push(x), pop() → front nikaal ke return, peek(), empty().
 * Steps:
 *   1. inStack (push yahan), outStack.
 *   2. pop/peek: outStack khaali ho toh inStack ka sab pop karke outStack mein
 *      daalo (order ulta ho jaata hai = queue order).
 * Target: Amortized O(1)
 * ------------------------------------------------------------------------- */
class MyQueue {
  constructor() {
    todo();
  }
  push(x) {}
  pop() {}
  peek() {}
  empty() {}
}

/* ----------------------------------------------------------------------------
 * Q4. Implement Stack using Queues · Easy · LeetCode 225
 * Question: Sirf queue operations (push back, shift front) se stack:
 *           push(x), pop() → top return, top(), empty().
 * Steps: push ke baad queue ko (size - 1) baar rotate karo (front ko back bhejo),
 *        taaki naya element front pe aa jaaye.
 * Target: push O(n), baaki O(1)
 * ------------------------------------------------------------------------- */
class MyStack {
  constructor() {
    todo();
  }
  push(x) {}
  pop() {}
  top() {}
  empty() {}
}

/* ----------------------------------------------------------------------------
 * Q5. Remove All Adjacent Duplicates In String · Easy · LeetCode 1047
 * Question: Do same adjacent letters baar-baar hatao jab tak ho sake.
 * Example:  "abbaca" → "ca"
 * Steps: Stack. Top === ch → pop, warna push. End mein join.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function removeAdjacentDuplicates(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Backspace String Compare · Easy · LeetCode 844
 * Question: "#" = backspace. Type karne ke baad dono strings same hain?
 * Example:  "ab#c", "ad#c" → true
 * Steps: Har string ka stack banao: "#" → pop, warna push. Compare.
 * Target: Time O(n), Space O(n)  (bonus: peeche se two pointer, O(1) space)
 * ------------------------------------------------------------------------- */
function backspaceCompare(s, t) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. ⭐ Daily Temperatures · Medium · LeetCode 739
 * Question: Har din ke liye, kitne din baad garam din aayega? Na aaye toh 0.
 * Example:  [73,74,75,71,69,72,76,73] → [1,1,4,2,1,1,0,0]
 * Steps: Monotonic stack template, result[prev] = i - prev.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function dailyTemperatures(temperatures) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. Next Greater Element I · Easy · LeetCode 496
 * Question: nums1 ke har element ka nums2 mein (usi ke right mein) agla bada.
 *           Na ho toh -1.
 * Example:  nums1 = [4,1,2], nums2 = [1,3,4,2] → [-1,3,-1]
 * Steps:
 *   1. nums2 pe monotonic stack → Map: value -> next greater.
 *   2. nums1.map(x => map.get(x) ?? -1).
 * Target: Time O(n + m), Space O(n)
 * ------------------------------------------------------------------------- */
function nextGreaterElement(nums1, nums2) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q9. Evaluate Reverse Polish Notation · Medium · LeetCode 150
 * Question: Postfix expression evaluate karo. Division 0 ki taraf truncate.
 * Example:  ["2","1","+","3","*"] → 9  ((2+1)*3)
 * Steps:
 *   1. Number → push.
 *   2. Operator → b = pop(), a = pop(), push(a op b).
 *   3. Division: Math.trunc(a / b).
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function evalRPN(tokens) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q10. Decode String · Medium · LeetCode 394
 * Question: "3[a2[c]]" → "accaccacc". k[text] = text k baar.
 * Steps:
 *   1. countStack, stringStack, curr = "", num = 0.
 *   2. digit → num = num*10 + digit.
 *   3. "[" → push(num), push(curr), num = 0, curr = "".
 *   4. "]" → curr = stringStack.pop() + curr.repeat(countStack.pop()).
 *   5. letter → curr += ch.
 * Target: Time O(output), Space O(output)
 * ------------------------------------------------------------------------- */
function decodeString(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q11. Largest Rectangle in Histogram · Hard (bonus) · LeetCode 84
 * Question: Histogram mein sabse bada rectangle area.
 * Example:  [2,1,5,6,2,3] → 10
 * Steps:
 *   1. Increasing stack of indexes. End mein height 0 daal ke sab flush karo.
 *   2. heights[i] < top ki height → pop h; width = stack khaali ? i : i - newTop - 1.
 *   3. area = h * width.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function largestRectangleArea(heights) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q1 Valid Parentheses", isValid, [
  [["()"], true], [["()[]{}"], true], [["(]"], false], [["([)]"], false], [["{[]}"], true], [["("], false], [[")"], false],
]);
test("Q2 Min Stack", (ops, args) => runOps(MinStack, ops, args), [
  [[["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"], [[], [-2], [0], [-3], [], [], [], []]],
    [null, null, null, null, -3, null, 0, -2]],
]);
test("Q3 Implement Queue using Stacks", (ops, args) => runOps(MyQueue, ops, args), [
  [[["MyQueue", "push", "push", "peek", "pop", "empty", "pop", "empty"], [[], [1], [2], [], [], [], [], []]],
    [null, null, null, 1, 1, false, 2, true]],
]);
test("Q4 Implement Stack using Queues", (ops, args) => runOps(MyStack, ops, args), [
  [[["MyStack", "push", "push", "top", "pop", "empty", "pop", "empty"], [[], [1], [2], [], [], [], [], []]],
    [null, null, null, 2, 2, false, 1, true]],
]);
test("Q5 Remove All Adjacent Duplicates", removeAdjacentDuplicates, [
  [["abbaca"], "ca"], [["azxxzy"], "ay"],
]);
test("Q6 Backspace String Compare", backspaceCompare, [
  [["ab#c", "ad#c"], true], [["ab##", "c#d#"], true], [["a#c", "b"], false],
]);
test("Q7 Daily Temperatures", dailyTemperatures, [
  [[[73, 74, 75, 71, 69, 72, 76, 73]], [1, 1, 4, 2, 1, 1, 0, 0]],
  [[[30, 40, 50, 60]], [1, 1, 1, 0]],
  [[[30, 60, 90]], [1, 1, 0]],
]);
test("Q8 Next Greater Element I", nextGreaterElement, [
  [[[4, 1, 2], [1, 3, 4, 2]], [-1, 3, -1]],
  [[[2, 4], [1, 2, 3, 4]], [3, -1]],
]);
test("Q9 Evaluate Reverse Polish Notation", evalRPN, [
  [[["2", "1", "+", "3", "*"]], 9],
  [[["4", "13", "5", "/", "+"]], 6],
  [[["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]], 22],
]);
test("Q10 Decode String", decodeString, [
  [["3[a]2[bc]"], "aaabcbc"], [["3[a2[c]]"], "accaccacc"], [["2[abc]3[cd]ef"], "abcabccdcdcdef"], [["10[a]"], "aaaaaaaaaa"],
]);
test("Q11 Largest Rectangle in Histogram", largestRectangleArea, [
  [[[2, 1, 5, 6, 2, 3]], 10], [[[2, 4]], 4],
]);
