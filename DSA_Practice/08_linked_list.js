/* ============================================================================
 * 8. LINKED LIST
 * Chalao: node 08_linked_list.js
 * ============================================================================
 *
 * DEFINITION
 *   Nodes ki chain. Har node mein value + next node ka pointer.
 *   head → [1] → [2] → [3] → null
 *   Array se farak: index se direct access nahi (O(n)), par beech mein
 *   insert/delete O(1) agar node ka pointer haath mein ho.
 *
 *   function ListNode(val, next = null) { this.val = val; this.next = next; }
 *   (_runner.js mein already hai, wahi use karo: new ListNode(5))
 *
 * KAB LAGTA HAI
 *   Interview favourite: pointer handling se pata chalta hai candidate careful
 *   hai ya nahi. 3 tricks se 80% questions bante hain:
 *
 *   1) DUMMY NODE: naya list banana ho ya head delete ho sakta ho.
 *        const dummy = new ListNode(0); let tail = dummy;
 *        ... tail.next = node; tail = tail.next; ...
 *        return dummy.next;
 *
 *   2) SLOW-FAST POINTER: middle, cycle, n-th from end.
 *        let slow = head, fast = head;
 *        while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
 *        // slow = middle. slow === fast kabhi hua → cycle.
 *
 *   3) REVERSE:
 *        let prev = null, curr = head;
 *        while (curr) {
 *          const next = curr.next;  // baaki list bachao
 *          curr.next = prev;        // pointer palto
 *          prev = curr; curr = next;
 *        }
 *        return prev;
 *
 * TIP: Paper pe boxes aur arrows bana ke dry run karo. `null` check pehle.
 * ========================================================================== */

const { todo, test, runOps, ListNode, toList, toArray } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Reverse Linked List · Easy · LeetCode 206  (SABSE zyada poocha jaata)
 * Question: List ko reverse karke naya head return karo.
 * Example:  1→2→3→4→5 → 5→4→3→2→1
 * Steps: Reverse template (iterative). Phir recursive bhi likho:
 *        if (!head || !head.next) return head;
 *        const newHead = reverseList(head.next);
 *        head.next.next = head; head.next = null; return newHead;
 * Target: Time O(n), Space O(1) iterative
 * ------------------------------------------------------------------------- */
function reverseList(head) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. ⭐ Merge Two Sorted Lists · Easy · LeetCode 21
 * Question: Do sorted lists ko ek sorted list mein jodo.
 * Example:  1→2→4, 1→3→4 → 1→1→2→3→4→4
 * Steps: Dummy node. Chhota wala tail.next pe. End mein tail.next = a || b.
 * Target: Time O(n + m), Space O(1)
 * ------------------------------------------------------------------------- */
function mergeTwoLists(list1, list2) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. ⭐ Linked List Cycle · Easy · LeetCode 141
 * Question: List mein cycle hai?
 * Steps: Slow (1 step), fast (2 step). Mil gaye → true. fast null → false.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function hasCycle(head) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. ⭐ Middle of the Linked List · Easy · LeetCode 876
 * Question: Middle node return karo. Do middle ho toh doosra.
 * Example:  1→2→3→4→5 → 3 wala node;  1..6 → 4 wala node
 * Steps: Slow-fast template.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function middleNode(head) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. Palindrome Linked List · Easy · LeetCode 234
 * Question: List palindrome hai?
 * Steps: 1. Middle nikalo.  2. Second half reverse.  3. Dono halves compare.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function isPalindromeList(head) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Remove Linked List Elements · Easy · LeetCode 203
 * Question: val wale saare nodes hatao.
 * Example:  1→2→6→3→4→5→6, val = 6 → 1→2→3→4→5
 * Steps: dummy.next = head; curr = dummy;
 *        curr.next.val === val ? curr.next = curr.next.next : curr = curr.next.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function removeElements(head, val) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. Intersection of Two Linked Lists · Easy · LeetCode 160
 * Question: Do lists kis node pe milti hain? (same node object, value nahi)
 * Steps: a = headA, b = headB. while (a !== b):
 *          a = a ? a.next : headB;  b = b ? b.next : headA;
 *        Dono a+b length chalte hain, isliye milte hain (ya dono null).
 * Target: Time O(n + m), Space O(1)
 * ------------------------------------------------------------------------- */
function getIntersectionNode(headA, headB) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. ⭐ Remove Nth Node From End of List · Medium · LeetCode 19
 * Question: End se n-th node hatao, ek pass mein.
 * Example:  1→2→3→4→5, n = 2 → 1→2→3→5
 * Steps:
 *   1. dummy → head. fast = slow = dummy.
 *   2. fast ko n+1 steps aage.
 *   3. Dono saath chalao jab tak fast null. slow.next = slow.next.next.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function removeNthFromEnd(head, n) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q9. Add Two Numbers · Medium · LeetCode 2
 * Question: Digits ulte order mein hain. Dono numbers ka sum list ke roop mein.
 * Example:  2→4→3 (342) + 5→6→4 (465) = 7→0→8 (807)
 * Steps: Dummy, carry = 0. while (a || b || carry): sum = a + b + carry,
 *        node(sum % 10), carry = Math.floor(sum / 10).
 * Target: Time O(max(n, m))
 * ------------------------------------------------------------------------- */
function addTwoNumbers(l1, l2) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q10. Linked List Cycle II · Medium · LeetCode 142
 * Question: Cycle kis node se shuru hoti hai? Na ho toh null.
 * Steps: 1. Slow-fast milne tak.  2. Ek pointer head pe bhejo.
 *        3. Dono 1-1 step chalao, jahan milein wahi start.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function detectCycle(head) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q11. Reorder List · Medium · LeetCode 143
 * Question: L0→L1→…→Ln ko L0→Ln→L1→Ln-1→… banao, IN-PLACE (return kuch nahi).
 * Example:  1→2→3→4 → 1→4→2→3
 * Steps: 1. Middle.  2. Second half reverse (middle.next se), middle.next = null.
 *        3. Dono halves alternate merge.
 * Target: Time O(n), Space O(1)
 * ------------------------------------------------------------------------- */
function reorderList(head) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q12. Copy List with Random Pointer · Medium · LeetCode 138
 * Question: Har node mein next + random (kisi bhi node ya null). Deep copy banao.
 *           Node: { val, next, random }
 * Steps:
 *   1. Pehla pass: Map old node → new node (new RandomNode(old.val)).
 *   2. Dusra pass: copy.next = map.get(old.next) || null,
 *                  copy.random = map.get(old.random) || null.
 *   3. return map.get(head) || null.
 * Target: Time O(n), Space O(n)
 * ------------------------------------------------------------------------- */
function RandomNode(val, next = null, random = null) {
  this.val = val;
  this.next = next;
  this.random = random;
}
function copyRandomList(head) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q13. ⭐ LRU Cache · Medium · LeetCode 146
 * Question: capacity wala cache. get(key) → value ya -1. put(key, value).
 *           Capacity full ho toh Least Recently Used key hatao. Dono O(1).
 * Steps (JS shortcut — Map insertion order yaad rakhta hai):
 *   get: nahi hai → -1. Hai → delete karo, phir set (ab ye "newest").
 *   put: hai toh delete. set. size > capacity → map.keys().next().value
 *        (sabse purana) delete.
 * Bonus: interviewer bole "Map ka order use mat karo" → doubly linked list + Map.
 * ------------------------------------------------------------------------- */
class LRUCache {
  constructor(capacity) {
    todo();
  }
  get(key) {}
  put(key, value) {}
}

/* ============================== TESTS ===================================== */
test("Q1 Reverse Linked List", (a) => toArray(reverseList(toList(a))), [
  [[[1, 2, 3, 4, 5]], [5, 4, 3, 2, 1]], [[[1, 2]], [2, 1]], [[[]], []],
]);
test("Q2 Merge Two Sorted Lists", (a, b) => toArray(mergeTwoLists(toList(a), toList(b))), [
  [[[1, 2, 4], [1, 3, 4]], [1, 1, 2, 3, 4, 4]], [[[], []], []], [[[], [0]], [0]],
]);
test("Q3 Linked List Cycle", (a, pos) => hasCycle(toList(a, pos)), [
  [[[3, 2, 0, -4], 1], true], [[[1, 2], 0], true], [[[1], -1], false], [[[], -1], false],
]);
test("Q4 Middle of the Linked List", (a) => toArray(middleNode(toList(a))), [
  [[[1, 2, 3, 4, 5]], [3, 4, 5]], [[[1, 2, 3, 4, 5, 6]], [4, 5, 6]],
]);
test("Q5 Palindrome Linked List", (a) => isPalindromeList(toList(a)), [
  [[[1, 2, 2, 1]], true], [[[1, 2]], false], [[[1, 2, 3, 2, 1]], true],
]);
test("Q6 Remove Linked List Elements", (a, v) => toArray(removeElements(toList(a), v)), [
  [[[1, 2, 6, 3, 4, 5, 6], 6], [1, 2, 3, 4, 5]], [[[7, 7, 7, 7], 7], []], [[[], 1], []],
]);
test("Q7 Intersection of Two Linked Lists", (a, b, common) => {
  const shared = toList(common), A = toList(a), B = toList(b);
  const attach = (h) => { if (!h) return shared; let t = h; while (t.next) t = t.next; t.next = shared; return h; };
  const node = getIntersectionNode(attach(A), attach(B));
  if (node !== shared) return node ? "wrong node" : null;
  return node ? node.val : null;
}, [
  [[[4, 1], [5, 6, 1], [8, 4, 5]], 8], [[[1, 9, 1], [3], [2, 4]], 2], [[[2, 6, 4], [1, 5], []], null],
]);
test("Q8 Remove Nth Node From End", (a, n) => toArray(removeNthFromEnd(toList(a), n)), [
  [[[1, 2, 3, 4, 5], 2], [1, 2, 3, 5]], [[[1], 1], []], [[[1, 2], 1], [1]], [[[1, 2], 2], [2]],
]);
test("Q9 Add Two Numbers", (a, b) => toArray(addTwoNumbers(toList(a), toList(b))), [
  [[[2, 4, 3], [5, 6, 4]], [7, 0, 8]], [[[0], [0]], [0]],
  [[[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]], [8, 9, 9, 9, 0, 0, 0, 1]],
]);
test("Q10 Linked List Cycle II (returns index)", (a, pos) => {
  const head = toList(a, pos);
  const node = detectCycle(head);
  if (!node) return -1;
  let i = 0;
  for (let c = head; c !== node && i <= a.length; c = c.next) i++;
  return i;
}, [
  [[[3, 2, 0, -4], 1], 1], [[[1, 2], 0], 0], [[[1], -1], -1],
]);
test("Q11 Reorder List", (a) => { const h = toList(a); reorderList(h); return toArray(h); }, [
  [[[1, 2, 3, 4]], [1, 4, 2, 3]], [[[1, 2, 3, 4, 5]], [1, 5, 2, 4, 3]], [[[1]], [1]],
]);
test("Q12 Copy List with Random Pointer", (pairs) => {
  const nodes = pairs.map(([v]) => new RandomNode(v));
  nodes.forEach((n, i) => { n.next = nodes[i + 1] || null; n.random = pairs[i][1] === null ? null : nodes[pairs[i][1]]; });
  const copy = copyRandomList(nodes[0] || null);
  const copies = [];
  for (let c = copy; c; c = c.next) {
    if (nodes.includes(c)) return "original node reuse kiya, deep copy nahi";
    copies.push(c);
  }
  return copies.map((c) => [c.val, c.random ? copies.indexOf(c.random) : null]);
}, [
  [[[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]], [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]],
  [[[[1, 1], [2, 1]]], [[1, 1], [2, 1]]],
  [[[]], []],
]);
test("Q13 LRU Cache", (ops, args) => runOps(LRUCache, ops, args), [
  [[["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]],
    [null, null, null, 1, null, -1, null, -1, 3, 4]],
]);
