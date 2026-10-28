/* ============================================================================
 * 4. STRINGS
 * Chalao: node 04_strings.js
 * ============================================================================
 *
 * DEFINITION
 *   String = characters ki sequence. Service companies mein bahut common.
 *   Zyada-tar string questions upar ke patterns se hi bante hain:
 *     counting → hashing,  palindrome → two pointers,  substring → sliding window.
 *
 * YAAD RAKH
 *   - JS mein string IMMUTABLE hai. s[0] = "x" kuch nahi karta.
 *     Badalna ho toh: const arr = s.split(""); ...edit...; arr.join("").
 *   - Loop mein `out += ch` theek hai, par bahut bade input pe array + join better.
 *   - "c".charCodeAt(0) - 97 → 2  (a-z ko 0-25 index banana)
 *   - String.fromCharCode(97) → "a"
 *   - s.trim(), s.split(/\s+/), s.toLowerCase(), s.slice(a, b)
 *
 * TEMPLATE: Expand around center (palindrome substrings)
 *   for (let i = 0; i < n; i++) {
 *     expand(i, i);       // odd length
 *     expand(i, i + 1);   // even length
 *   }
 *   expand: while (l >= 0 && r < n && s[l] === s[r]) { l--; r++; }
 *           palindrome = s.slice(l + 1, r)
 * ========================================================================== */

const { todo, test } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Longest Common Prefix · Easy · LeetCode 14
 * Question: Saari strings ka sabse lamba common prefix.
 * Example:  ["flower","flow","flight"] → "fl"
 * Steps:
 *   1. Pehli string ke har index i pe char lo.
 *   2. Baaki sab strings mein i pe same char hai? Nahi / string khatam → slice(0, i).
 * Target: Time O(total chars), Space O(1)
 * ------------------------------------------------------------------------- */
function longestCommonPrefix(strs) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. ⭐ First Unique Character in a String · Easy · LeetCode 387
 * Question: Pehle non-repeating char ka index, na ho toh -1.
 * Example:  "leetcode" → 0, "loveleetcode" → 2
 * Steps: 1. Pehle loop mein count. 2. Dusre loop mein pehla count === 1.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function firstUniqChar(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. Reverse Words in a String · Medium · LeetCode 151
 * Question: Words ka order ulta karo. Extra spaces hatao.
 * Example:  "  hello world  " → "world hello"
 * Steps: trim → split(/\s+/) → reverse → join(" ").
 *        Bonus: bina split ke peeche se words padh ke banao.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function reverseWords(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. Isomorphic Strings · Easy · LeetCode 205
 * Question: s ke chars ko replace karke t ban sakta hai? (one-to-one mapping)
 * Example:  "egg","add" → true;  "foo","bar" → false;  "badc","baba" → false
 * Steps:
 *   1. Do Maps: sToT, tToS.
 *   2. Har i pe: koi mapping pehle se hai aur alag hai → false.
 *   3. Dono taraf mapping set karo.
 * Target: Time O(n), Space O(charset)
 * ------------------------------------------------------------------------- */
function isIsomorphic(s, t) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. Ransom Note · Easy · LeetCode 383
 * Question: magazine ke letters (har letter ek baar) se ransomNote ban sakta hai?
 * Example:  "aa", "aab" → true;  "aa", "ab" → false
 * Steps: magazine ke 26 counts, note ke har char pe count--, negative → false.
 * Target: Time O(m + n), Space O(1)
 * ------------------------------------------------------------------------- */
function canConstruct(ransomNote, magazine) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Length of Last Word · Easy · LeetCode 58
 * Question: Last word ki length.
 * Example:  "   fly me   to   the moon  " → 4
 * Steps: Peeche se spaces skip, phir non-space chars gino.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function lengthOfLastWord(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. ⭐ String to Integer (atoi) · Medium · LeetCode 8
 * Question: parseInt jaisa khud likho.
 *   leading spaces skip → optional +/- → digits padho (non-digit pe ruko)
 *   → range [-2^31, 2^31 - 1] mein clamp.
 * Example:  "   -042" → -42,  "1337c0d3" → 1337,  "words 987" → 0
 * Steps:
 *   1. i = 0; spaces skip.
 *   2. sign: "-" → -1, "+" → 1, i++.
 *   3. while digit: num = num * 10 + digit.
 *   4. sign * num ko clamp karo. (-0 se bachne ke liye 0 alag handle.)
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function myAtoi(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. ⭐ Longest Palindromic Substring · Medium · LeetCode 5
 * Question: Sabse lambi palindrome substring.
 * Example:  "babad" → "bab" (ya "aba"),  "cbbd" → "bb"
 * Steps: Expand around center template (har i pe odd + even).
 * Target: Time O(n²), Space O(1)
 * ------------------------------------------------------------------------- */
function longestPalindrome(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q9. Palindromic Substrings · Medium · LeetCode 647
 * Question: Kitni palindromic substrings hain?
 * Example:  "abc" → 3,  "aaa" → 6
 * Steps: Same expand, har successful expansion pe count++.
 * Target: Time O(n²), Space O(1)
 * ------------------------------------------------------------------------- */
function countSubstrings(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q10. String Compression · Medium · LeetCode 443
 * Question: chars array ko in-place compress karo ("aabbccc" → a2b2c3),
 *           count 1 ho toh sirf letter. Nayi length return.
 * Example:  ["a","a","b","b","c","c","c"] → 6, chars = ["a","2","b","2","c","3"]
 * Steps:
 *   1. read = 0, write = 0.
 *   2. Same char ka group gino (read aage badhao).
 *   3. chars[write++] = char; count > 1 → count ke har digit ko likho.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function compress(chars) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q11. Roman to Integer · Easy · LeetCode 13
 * Question: Roman numeral → number. I=1 V=5 X=10 L=50 C=100 D=500 M=1000
 * Example:  "MCMXCIV" → 1994
 * Steps: Agla symbol bada hai → current ko MINUS, warna PLUS.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function romanToInt(s) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q12. Count and Say · Medium · LeetCode 38
 * Question: "1" → "11" (ek 1) → "21" (do 1) → "1211" → "111221" ... n-th term.
 * Example:  n = 4 → "1211"
 * Steps: n-1 baar: current string ke consecutive groups gino → count + digit.
 * Target: Time O(n · length), Space O(length)
 * ------------------------------------------------------------------------- */
function countAndSay(n) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q1 Longest Common Prefix", longestCommonPrefix, [
  [[["flower", "flow", "flight"]], "fl"],
  [[["dog", "racecar", "car"]], ""],
  [[["a"]], "a"],
]);
test("Q2 First Unique Character", firstUniqChar, [
  [["leetcode"], 0], [["loveleetcode"], 2], [["aabb"], -1],
]);
test("Q3 Reverse Words in a String", reverseWords, [
  [["the sky is blue"], "blue is sky the"],
  [["  hello world  "], "world hello"],
  [["a good   example"], "example good a"],
]);
test("Q4 Isomorphic Strings", isIsomorphic, [
  [["egg", "add"], true], [["foo", "bar"], false], [["paper", "title"], true], [["badc", "baba"], false],
]);
test("Q5 Ransom Note", canConstruct, [
  [["a", "b"], false], [["aa", "ab"], false], [["aa", "aab"], true],
]);
test("Q6 Length of Last Word", lengthOfLastWord, [
  [["Hello World"], 5], [["   fly me   to   the moon  "], 4], [["luffy is still joyboy"], 6],
]);
test("Q7 String to Integer (atoi)", myAtoi, [
  [["42"], 42], [["   -042"], -42], [["1337c0d3"], 1337], [["0-1"], 0],
  [["words and 987"], 0], [["-91283472332"], -2147483648], [["91283472332"], 2147483647],
]);
test("Q8 Longest Palindromic Substring", longestPalindrome, [
  [["babad"], "bab"], [["cbbd"], "bb"], [["a"], "a"],
], { check: (got, [s]) => {
  const best = { babad: 3, cbbd: 2, a: 1 }[s];
  return typeof got === "string" && got.length === best && s.includes(got) && got === [...got].reverse().join("");
} });
test("Q9 Palindromic Substrings", countSubstrings, [
  [["abc"], 3], [["aaa"], 6],
]);
test("Q10 String Compression", (chars) => chars.slice(0, compress(chars)), [
  [[["a", "a", "b", "b", "c", "c", "c"]], ["a", "2", "b", "2", "c", "3"]],
  [[["a"]], ["a"]],
  [[["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]], ["a", "b", "1", "2"]],
]);
test("Q11 Roman to Integer", romanToInt, [
  [["III"], 3], [["LVIII"], 58], [["MCMXCIV"], 1994],
]);
test("Q12 Count and Say", countAndSay, [
  [[1], "1"], [[4], "1211"], [[5], "111221"],
]);
