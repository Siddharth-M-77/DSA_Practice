/* ============================================================================
 * 14. SERVICE COMPANY CLASSICS (bina LeetCode ke)
 * Chalao: node 14_service_classics.js
 * ============================================================================
 *
 * Deloitte, TCS, Infosys, Accenture, Capgemini ke technical rounds mein aksar
 * interviewer screen share karwa ke ye seedhe likhwata hai. Kai baar bolte hain
 * "built-in method use mat karo". Har ek ko PEHLE built-in ke saath, PHIR bina
 * built-in ke likhna practice kar.
 *
 * Example (Deloitte frontend round): reverse a string 3 ways
 *   const rev1 = (s) => s.split("").reverse().join("");
 *   const rev2 = (s) => [...s].reduce((acc, ch) => ch + acc, "");
 *   function rev3(s) { let out = ""; for (let i = s.length - 1; i >= 0; i--) out += s[i]; return out; }
 * ========================================================================== */

const { todo, test, testAsync } = require("./_runner");

/* ═══════════════════════════════ NUMBERS ═══════════════════════════════════ */

/* N1. ⭐ Number palindrome (string mein convert kiye BINA)
 * 121 → true, -121 → false, 10 → false
 * Steps: negative → false. rev = 0, n = x. while (n > 0): rev = rev*10 + n%10;
 *        n = Math.floor(n/10). return rev === x. */
function isPalindromeNumber(x) {
  todo();
}

/* N2. ⭐ Prime check
 * 17 → true, 25 → false, 1 → false
 * Steps: n < 2 → false. i = 2 se i*i <= n tak: n % i === 0 → false. (sirf √n tak)
 * Target: O(√n) */
function isPrime(n) {
  todo();
}

/* N3. ⭐ FizzBuzz
 * 1..n ka array (strings): 3 se divisible → "Fizz", 5 → "Buzz", dono → "FizzBuzz",
 * warna number string mein.
 * Steps: 15 wala check PEHLE (warna "Fizz" pe hi ruk jaayega). */
function fizzBuzz(n) {
  todo();
}

/* N4. ⭐ Factorial aur Fibonacci — loop + recursion DONO
 * factorial(5) = 120, fib(10) = 55 (fib(0)=0, fib(1)=1) */
function factorialLoop(n) {
  todo();
}
function factorialRecursive(n) {
  todo();
}
function fibLoop(n) {
  todo();
}
function fibRecursive(n) {
  todo();
}

/* N5. Armstrong number
 * Har digit ^ (digits ki ginti) ka sum === number. 153 = 1³+5³+3³ → true
 * Steps: digits = String(n).length (ya loop se gino). Sum nikalo, compare. */
function isArmstrong(n) {
  todo();
}

/* N6. Digits ka sum aur reverse number
 * digitSum(1234) = 10, reverseNumber(1200) = 21
 * Steps: n % 10 = last digit, Math.floor(n / 10) = last digit hata do. */
function digitSum(n) {
  todo();
}
function reverseNumber(n) {
  todo();
}

/* N7. Swap two numbers bina third variable
 * [a, b] return karo swapped.
 * Steps: Tareeka 1: [a, b] = [b, a]
 *        Tareeka 2: a = a + b; b = a - b; a = a - b;  ← interview mein ye poochte hain */
function swapNoTemp(a, b) {
  todo();
}

/* N8. GCD / LCM
 * gcd(12, 18) = 6, lcm(4, 6) = 12
 * Steps: Euclid: gcd(a, b) = b === 0 ? a : gcd(b, a % b).
 *        lcm = (a * b) / gcd(a, b). */
function gcd(a, b) {
  todo();
}
function lcm(a, b) {
  todo();
}

/* ═══════════════════════════════ ARRAYS ════════════════════════════════════ */

/* A1. ⭐ Second largest element (ek hi loop, sort kiye bina)
 * [12,35,1,10,34,1] → 34.  [10,10,10] → -1 (nahi hai)
 * Steps: first = second = -Infinity. x > first → second = first, first = x.
 *        Warna x > second && x !== first → second = x. second -Infinity → -1. */
function secondLargest(arr) {
  todo();
}

/* A2. ⭐ Array se duplicates hatao (order same rahe)
 * [1,2,2,3,1] → [1,2,3]
 * Steps: withSet: [...new Set(arr)]
 *        withoutSet: object/Map mein seen track karo, pehli baar wale push. */
function removeDuplicatesWithSet(arr) {
  todo();
}
function removeDuplicatesWithoutSet(arr) {
  todo();
}

/* A3. ⭐ Duplicate elements return karo (jo 1 se zyada baar aaye, ek-ek baar)
 * [1,2,3,2,4,1,1] → [1,2]  (order koi bhi)
 * Steps: Map count. count > 1 wale keys. */
function findDuplicates(arr) {
  todo();
}

/* A4. ⭐ Nested array flatten karo
 * [1,[2,[3,[4]],5]] → [1,2,3,4,5]
 * Steps: built-in: arr.flat(Infinity).
 *        manual: har item: Array.isArray → recursion ka result spread, warna push. */
function flattenBuiltin(arr) {
  todo();
}
function flattenManual(arr) {
  todo();
}

/* A5. Max aur min ek loop mein → [min, max]
 * [3,1,4,1,5,9,2] → [1,9]  (Math.min(...arr) nahi, loop se) */
function minMax(arr) {
  todo();
}

/* A6. Array rotate by k (right)
 * [1,2,3,4,5], 2 → [4,5,1,2,3]. k > length ho sakta hai → k % n.
 * Steps: [...arr.slice(n - k), ...arr.slice(0, n - k)]  ya reverse trick. */
function rotateByK(arr, k) {
  todo();
}

/* A7. Do sorted arrays merge karo (sort() nahi, two pointer)
 * [1,3,5], [2,4,6] → [1,2,3,4,5,6] */
function mergeSortedArrays(a, b) {
  todo();
}

/* A8. Array mein missing number (1 se n)
 * [1,2,4,5,6], n = 6 → 3
 * Steps: n*(n+1)/2 - sum. */
function missingFrom1ToN(arr, n) {
  todo();
}

/* A9. Har element ki frequency count karo → object { value: count }
 * [1,2,2,3,3,3] → {1:1, 2:2, 3:3}
 * Steps: freq[x] = (freq[x] || 0) + 1 */
function frequency(arr) {
  todo();
}

/* A10. Array chunk karo size k mein
 * [1,2,3,4,5], 2 → [[1,2],[3,4],[5]]
 * Steps: i += k loop, arr.slice(i, i + k) push. */
function chunk(arr, k) {
  todo();
}

/* ═══════════════════════════════ STRINGS ═══════════════════════════════════ */

/* S1. ⭐ String palindrome check (case ignore)
 * "Madam" → true, "hello" → false
 * Steps: lowercase, two pointer ya reverse compare. */
function isPalindromeString(s) {
  todo();
}

/* S2. ⭐ Reverse string 3 tareeke (upar wala example khud likho, bina dekhe) */
function reverse1(s) {
  todo();
}
function reverse2(s) {
  todo();
}
function reverse3(s) {
  todo();
}

/* S3. ⭐ Vowels count karo
 * "Hello World" → 3
 * Steps: "aeiou".includes(ch.toLowerCase()) ya Set. */
function countVowels(s) {
  todo();
}

/* S4. ⭐ Har character ki frequency → object
 * "hello" → {h:1, e:1, l:2, o:1} */
function charFrequency(s) {
  todo();
}

/* S5. ⭐ Do strings anagram hain? (case ignore, spaces ignore)
 * "Listen", "Silent" → true
 * Steps: Count object/array, ya sort karke compare (O(n log n)). */
function areAnagrams(a, b) {
  todo();
}

/* S6. Har word ka pehla letter capital karo
 * "hello world from js" → "Hello World From Js"
 * Steps: split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") */
function capitalizeWords(s) {
  todo();
}

/* S7. Sabse lamba word dhundho (tie pe pehla)
 * "I love programming in javascript" → "programming" */
function longestWord(s) {
  todo();
}

/* S8. Sentence ke words reverse karo (characters nahi)
 * "I love JS" → "JS love I" */
function reverseSentence(s) {
  todo();
}

/* S9. First non-repeating character (na ho toh null)
 * "aabbcdd" → "c" */
function firstNonRepeating(s) {
  todo();
}

/* S10. String compression
 * "aaabbc" → "a3b2c1"
 * Steps: count = 1; s[i] === s[i+1] → count++, warna out += s[i] + count, count = 1. */
function compressString(s) {
  todo();
}

/* ═════════════════════ JS-SPECIFIC (frontend / full stack rounds) ══════════ */

/* J1. ⭐ Debounce
 * Definition: fn tabhi chale jab caller `delay` ms tak call karna BAND kar de.
 *   (search box: har keystroke pe API nahi, typing rukne ke baad ek baar)
 * Steps: let timer; return function (...args) { clearTimeout(timer);
 *        timer = setTimeout(() => fn.apply(this, args), delay); } */
function debounce(fn, delay) {
  todo();
}

/* J2. Throttle
 * Definition: fn har `limit` ms mein ZYADA SE ZYADA ek baar chale.
 *   (scroll / resize events)
 * Steps: let waiting = false; return (...args) => { if (waiting) return;
 *        fn(...args); waiting = true; setTimeout(() => waiting = false, limit); } */
function throttle(fn, limit) {
  todo();
}

/* J3. ⭐ Deep clone object (bina structuredClone / JSON ke)
 * Steps: null ya non-object → wahi return. Array → map(deepClone).
 *        Object → har key ke liye result[key] = deepClone(obj[key]). */
function deepClone(obj) {
  todo();
}

/* J4. ⭐ Promise.all ka polyfill
 * Definition: saare promises resolve → results array (SAME ORDER mein).
 *             Koi ek reject → turant reject.
 * Steps: return new Promise((resolve, reject) => {
 *   results = [], done = 0; empty → resolve([]).
 *   promises.forEach((p, i) => Promise.resolve(p).then(v => {
 *     results[i] = v; if (++done === promises.length) resolve(results);
 *   }, reject)); }) */
function promiseAll(promises) {
  todo();
}

/* J5. Array.prototype.map aur filter ka polyfill
 * Steps: myMap: result = []; for i: result.push(cb(this[i], i, this)).
 *        myFilter: cb true ho toh this[i] push. */
Array.prototype.myMap = function (cb) {
  todo();
};
Array.prototype.myFilter = function (cb) {
  todo();
};

/* J6. Object ko sort karke return karo
 * sortByKeys({b:2, a:1, c:3})   → {a:1, b:2, c:3}
 * sortByValues({a:3, b:1, c:2}) → {b:1, c:2, a:3}
 * Steps: Object.entries(obj).sort(...) → Object.fromEntries(...) */
function sortByKeys(obj) {
  todo();
}
function sortByValues(obj) {
  todo();
}

/* ============================== TESTS ===================================== */
test("N1 Number palindrome", isPalindromeNumber, [[[121], true], [[-121], false], [[10], false], [[0], true], [[12321], true]]);
test("N2 Prime check", isPrime, [[[2], true], [[1], false], [[17], true], [[25], false], [[97], true], [[0], false]]);
test("N3 FizzBuzz", fizzBuzz, [
  [[15], ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]],
]);
test("N4a Factorial (loop)", factorialLoop, [[[0], 1], [[5], 120], [[10], 3628800]]);
test("N4b Factorial (recursion)", factorialRecursive, [[[0], 1], [[5], 120], [[10], 3628800]]);
test("N4c Fibonacci (loop)", fibLoop, [[[0], 0], [[1], 1], [[10], 55]]);
test("N4d Fibonacci (recursion)", fibRecursive, [[[0], 0], [[1], 1], [[10], 55]]);
test("N5 Armstrong number", isArmstrong, [[[153], true], [[370], true], [[9474], true], [[123], false]]);
test("N6a Digit sum", digitSum, [[[1234], 10], [[0], 0], [[9999], 36]]);
test("N6b Reverse number", reverseNumber, [[[1234], 4321], [[1200], 21], [[7], 7]]);
test("N7 Swap without temp", swapNoTemp, [[[3, 7], [7, 3]], [[-1, 5], [5, -1]]]);
test("N8a GCD", gcd, [[[12, 18], 6], [[17, 5], 1], [[100, 75], 25]]);
test("N8b LCM", lcm, [[[4, 6], 12], [[3, 5], 15]]);

test("A1 Second largest", secondLargest, [[[[12, 35, 1, 10, 34, 1]], 34], [[[10, 10, 10]], -1], [[[5, 5, 4]], 4]]);
test("A2a Remove duplicates (Set)", removeDuplicatesWithSet, [[[[1, 2, 2, 3, 1]], [1, 2, 3]]]);
test("A2b Remove duplicates (no Set)", removeDuplicatesWithoutSet, [[[[1, 2, 2, 3, 1]], [1, 2, 3]], [[["a", "b", "a"]], ["a", "b"]]]);
test("A3 Find duplicates", findDuplicates, [[[[1, 2, 3, 2, 4, 1, 1]], [1, 2]], [[[1, 2, 3]], []]], { unordered: "outer" });
test("A4a Flatten (built-in)", flattenBuiltin, [[[[1, [2, [3, [4]], 5]]], [1, 2, 3, 4, 5]]]);
test("A4b Flatten (manual)", flattenManual, [[[[1, [2, [3, [4]], 5]]], [1, 2, 3, 4, 5]], [[[[], [[]]]], []]]);
test("A5 Min and max in one loop", minMax, [[[[3, 1, 4, 1, 5, 9, 2]], [1, 9]], [[[-5]], [-5, -5]]]);
test("A6 Rotate by k", rotateByK, [[[[1, 2, 3, 4, 5], 2], [4, 5, 1, 2, 3]], [[[1, 2, 3, 4, 5], 7], [4, 5, 1, 2, 3]], [[[1, 2], 0], [1, 2]]]);
test("A7 Merge two sorted arrays", mergeSortedArrays, [[[[1, 3, 5], [2, 4, 6]], [1, 2, 3, 4, 5, 6]], [[[], [1]], [1]]]);
test("A8 Missing number 1..n", missingFrom1ToN, [[[[1, 2, 4, 5, 6], 6], 3], [[[2], 2], 1]]);
test("A9 Frequency count", frequency, [[[[1, 2, 2, 3, 3, 3]], { 1: 1, 2: 2, 3: 3 }]]);
test("A10 Chunk array", chunk, [[[[1, 2, 3, 4, 5], 2], [[1, 2], [3, 4], [5]]], [[[1, 2, 3], 5], [[1, 2, 3]]]]);

test("S1 String palindrome", isPalindromeString, [[["Madam"], true], [["hello"], false], [["a"], true]]);
test("S2a Reverse (way 1)", reverse1, [[["hello"], "olleh"], [[""], ""]]);
test("S2b Reverse (way 2)", reverse2, [[["hello"], "olleh"], [[""], ""]]);
test("S2c Reverse (way 3)", reverse3, [[["hello"], "olleh"], [[""], ""]]);
test("S3 Count vowels", countVowels, [[["Hello World"], 3], [["rhythm"], 0], [["AEIOU"], 5]]);
test("S4 Char frequency", (s) => Object.entries(charFrequency(s)).sort(), [
  [["hello"], [["e", 1], ["h", 1], ["l", 2], ["o", 1]]],
]);
test("S5 Anagram check", areAnagrams, [[["Listen", "Silent"], true], [["hello", "world"], false], [["Dormitory", "dirty room"], true]]);
test("S6 Capitalize words", capitalizeWords, [[["hello world from js"], "Hello World From Js"]]);
test("S7 Longest word", longestWord, [[["I love programming in javascript"], "programming"]]);
test("S8 Reverse sentence words", reverseSentence, [[["I love JS"], "JS love I"]]);
test("S9 First non-repeating char", firstNonRepeating, [[["aabbcdd"], "c"], [["aabb"], null], [["swiss"], "w"]]);
test("S10 String compression", compressString, [[["aaabbc"], "a3b2c1"], [["a"], "a1"], [[""], ""]]);

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
testAsync("J1 Debounce", async () => {
  const calls = [];
  const d = debounce((x) => calls.push(x), 50);
  d(1); d(2); d(3);
  await wait(100);
  return calls.length === 1 && calls[0] === 3;
});
testAsync("J2 Throttle", async () => {
  const calls = [];
  const t = throttle((x) => calls.push(x), 50);
  t(1); t(2); t(3);
  await wait(80);
  t(4);
  return calls.join() === "1,4";
});
testAsync("J3 Deep clone", async () => {
  const src = { a: 1, b: { c: [1, 2, { d: 3 }] }, e: null, f: "x" };
  const copy = deepClone(src);
  return copy !== src && copy.b !== src.b && copy.b.c !== src.b.c && copy.b.c[2] !== src.b.c[2] &&
    JSON.stringify(copy) === JSON.stringify(src) && Array.isArray(copy.b.c);
});
testAsync("J4 Promise.all polyfill", async () => {
  const r = await promiseAll([wait(30).then(() => 1), 2, Promise.resolve(3)]);
  const empty = await promiseAll([]);
  const rejected = await promiseAll([Promise.resolve(1), Promise.reject(new Error("boom"))]).then(() => "no", (e) => e.message);
  return JSON.stringify(r) === "[1,2,3]" && empty.length === 0 && rejected === "boom";
});
test("J5a map polyfill", (arr) => arr.myMap((x, i) => x * 2 + i), [[[[1, 2, 3]], [2, 5, 8]]]);
test("J5b filter polyfill", (arr) => arr.myFilter((x) => x % 2 === 1), [[[[1, 2, 3, 4, 5]], [1, 3, 5]]]);
test("J6a Sort object by keys", (o) => JSON.stringify(sortByKeys(o)), [[[{ b: 2, a: 1, c: 3 }], '{"a":1,"b":2,"c":3}']]);
test("J6b Sort object by values", (o) => JSON.stringify(sortByValues(o)), [[[{ a: 3, b: 1, c: 2 }], '{"b":1,"c":2,"a":3}']]);
