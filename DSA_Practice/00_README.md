# DSA Practice (JavaScript)

**DSA Interview Sheet: Most Asked Questions** ka practice version. Har topic ki file mein definition, pattern kab lagta hai, JS template, har question ka statement + example + steps, aur tests hain.

Ye sheet poori kar li toh service companies (Deloitte, Accenture, TCS, Infosys, Capgemini) aur zyada-tar MNC coding rounds ke liye tu ready hai.

## Kaise practice karna hai

```bash
cd DSA_Practice
node 01_arrays_hashing.js
```

1. Function ke andar `todo();` hata ke apna code likh.
2. File chala. Har question ka status dikhega:
   - ✅ pass
   - ❌ fail (input, expected aur tera output dikhega)
   - ⏳ abhi solve nahi kiya
3. Neeche total dikhega: `── 3/20 solved · 1 failing · 16 todo ──`

**Difficulty:** Easy, Medium, Hard (bonus). **⭐** = sabse zyada poocha jaata hai, ye pehle karne hain.

| File | Topic | Questions |
|---|---|---|
| `01_arrays_hashing.js` | Arrays and Hashing | 20 |
| `02_two_pointers.js` | Two Pointers | 10 |
| `03_sliding_window.js` | Sliding Window | 8 |
| `04_strings.js` | Strings | 12 |
| `05_stack_queue.js` | Stack and Queue | 11 |
| `06_binary_search.js` | Binary Search | 10 |
| `07_sorting.js` | Sorting | 6 |
| `08_linked_list.js` | Linked List | 13 |
| `09_recursion_backtracking.js` | Recursion and Backtracking | 9 |
| `10_trees_bst.js` | Trees and BST | 16 |
| `11_graphs.js` | Graphs | 8 |
| `12_heap.js` | Heap / Priority Queue | 6 |
| `13_dp_basics.js` | Dynamic Programming (bonus) | 9 |
| `14_service_classics.js` | Service company classics | ~34 |

`_runner.js` test helper hai, use edit mat karna.

## Rules

1. 20 minute khud try. Nahi bana toh "Steps" padh, phir video. Code hamesha khud likhna.
2. Solution ke baad pattern ek line mein likh (comment mein): "subarray + continuous = sliding window".
3. 3 din baad wahi question bina dekhe dobara. Na bane toh code mita ke `todo()` wapas daal de.
4. Har solution ki time aur space complexity bol ke likh.
5. LeetCode pe bhi JavaScript mein submit kar (LeetCode number har question pe likha hai).

## Routine (office 10-7 ke hisaab se)

- **Weekdays:** 1 ghanta, 2 questions.
- **Weekend:** 2-3 ghante, hafte ke questions ka revision + 3-4 naye.

## 8-week plan

| Week | Topics |
|---|---|
| 1 | Complexity cheat sheet + Arrays and Hashing (⭐ wale) |
| 2 | Arrays and Hashing (baaki) + Two Pointers |
| 3 | Sliding Window + Strings |
| 4 | Stack and Queue + Binary Search |
| 5 | Sorting + Linked List |
| 6 | Recursion and Backtracking + Trees |
| 7 | Trees (baaki) + Graphs + Heap |
| 8 | Service company classics + saare ⭐ ka revision |

DP bonus hai: 8 hafte ke baad time ho tab.

## Interview mein problem solve karne ka script

Coding round mein sirf sahi answer nahi, tera sochna bhi judge hota hai. Ye order follow kar:

1. Question repeat kar apne words mein, aur ek example input-output confirm kar.
2. Edge cases pooch: empty array, negative numbers, duplicates, bahut bada input?
3. Brute force bol pehle, uski complexity ke saath. Code mat likh abhi.
4. Optimize kar: "Can I use a hash map / two pointers / sorting here?"
5. Approach confirm kar interviewer se, phir code likh.
6. Dry run ek example pe, line by line.
7. Final complexity bata.

> "Let me first restate the problem... A brute force would be O(n²) with two loops. To optimize, I can store what I've seen in a hash map, which brings it down to O(n) time and O(n) space. Shall I go ahead and code that?"

---

## Complexity cheat sheet

Interviewer har solution ke baad poochega "time and space complexity kya hai?"

### Time complexity kya hai

Input badhne pe code kitne steps leta hai. Seconds nahi ginte, kyunki wo laptop pe depend karta hai. Hum ye dekhte hain ki n (input size) double hone pe kaam kitna badhta hai.

Example: 100 logon mein apna dost dhundhna hai.

- Har ek se poochho "tu Rahul hai?" → 100 log, 100 sawaal. **O(n)**
- List alphabetically sorted hai, beech se kholo, aadha hatao → 1000 logon mein bhi ~10 baar. **O(log n)**
- Har insaan ko har dusre insaan se milwao → 100 log, 10,000 milan. **O(n²)**
- Register mein roll number se seedha dekh lo → 1 step. **O(1)**

| Complexity | Naam | n = 10⁵ pe steps | Example |
|---|---|---|---|
| O(1) | Constant | 1 | Array index, Map get/set |
| O(log n) | Logarithmic | ~17 | Binary search |
| O(n) | Linear | 10⁵ | Ek loop |
| O(n log n) | Linearithmic | ~1.7 × 10⁶ | Sorting |
| O(n²) | Quadratic | 10¹⁰ ❌ | Nested loops |
| O(2ⁿ) | Exponential | ❌ | Saare subsets, plain fib recursion |

**Shortcut:** input 10⁵ ya zyada hai toh O(n²) fail hoga, O(n) ya O(n log n) chahiye.

### Time complexity nikalne ke 5 rules

1. Ek loop jo n tak chale = O(n).
2. Loop ke andar loop = multiply. n × n = O(n²).
3. Ek ke baad ek loop = add, phir bada wala rakho. O(n) + O(n) = O(n).
4. Constants hatao. O(3n + 5) = O(n). O(n/2) = O(n).
5. Har step pe aadha = O(log n).

```javascript
// O(1): fixed steps
const first = arr[0];

// O(n): one pass
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// O(n) + O(n) = O(n): two separate loops, not nested
for (const x of arr) sum += x;
for (const x of arr) max = Math.max(max, x);

// O(n^2): nested loops
for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) count++;

// O(log n): range halves every step
while (n > 1) n = Math.floor(n / 2);

// O(n log n): sorting
arr.sort((a, b) => a - b);

// Hidden O(n^2): includes() is O(n) inside an O(n) loop
for (const x of arr) if (other.includes(x)) found++;
```

Do alag inputs ho toh alag letters: array a aur string b pe nested loop = **O(a × b)**, O(n²) nahi.

### Space complexity kya hai

Code **extra** kitni memory leta hai, input ke alawa. Input khud count nahi hota.

```javascript
// Space O(1): only a few variables
function sum(arr) { let total = 0; for (const x of arr) total += x; return total; }

// Space O(n): Set can grow up to n items
function hasDuplicate(arr) {
  const seen = new Set();
  for (const x of arr) { if (seen.has(x)) return true; seen.add(x); }
  return false;
}

// Space O(n): recursion depth n keeps n frames on the call stack
function countDown(n) { if (n === 0) return; countDown(n - 1); }
```

Sabse common galti: koi array nahi banaya, phir bhi recursion n deep gaya toh space O(n) hai.

### Time vs space trade-off

Aksar memory deke time bachate hain. Two Sum: nested loop = time O(n²), space O(1). Map = time O(n), space O(n). Interview mein ye trade-off bolna plus point hai.

### Best, average, worst case

Jab tak alag na pooche, **worst case** batao. Linear search: pehle index pe mila (best O(1)), end mein ya mila hi nahi (worst O(n)).

> "This runs in O(n) time because we go through the array once, and each Map lookup is O(1) on average. Space is O(n) because in the worst case the Map stores every element."

Hamesha dono batao, aur **kyun** bhi batao (kaunsa loop, kaunsa data structure).

### JS operations ki cost

| Operation | Cost |
|---|---|
| `arr[i]`, `arr.push()`, `arr.pop()` | O(1) |
| `arr.shift()`, `arr.unshift()`, `arr.splice()` | O(n) |
| `arr.includes()`, `indexOf()`, `find()` | O(n) |
| `arr.slice()`, `[...arr]`, `concat()` | O(n) |
| `arr.sort()` | O(n log n) |
| `Map` / `Set`: `get`, `set`, `has`, `delete` | O(1) average |
| `str.length`, `str[i]` | O(1) |
| `str.split()`, `slice()`, `includes()`, `+=` in loop | O(n) |
| `Object.keys(obj)` | O(n) |

### JS gotchas jo interview mein galti karwate hain

```javascript
// Default sort compares as strings
[10, 2, 1].sort();                // [1, 10, 2]  wrong
[10, 2, 1].sort((a, b) => a - b); // [1, 2, 10]  correct

// Integer division needs Math.floor
const mid = Math.floor((left + right) / 2);

// 2D array safely (fill with the same array reference is a bug)
const grid = Array.from({ length: 3 }, () => Array(4).fill(0));

// Character index for 'a'..'z' counting
const idx = "c".charCodeAt(0) - 97; // 2

// Head pointer instead of shift() for an O(1) queue
const queue = [1, 2, 3];
let head = 0;
const front = queue[head++];
```

---

Total: lagbhag 170 items. Saare ⭐ ho gaye toh service company coding rounds ke liye tu ready hai. Baaki bhi ho gaye toh zyada-tar MNC rounds handle kar lega.
