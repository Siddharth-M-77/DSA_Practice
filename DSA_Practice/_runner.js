// Common test runner. Isko edit karne ki zaroorat nahi.
// Har topic file chalao: node 01_arrays_hashing.js
// ✅ = pass, ❌ = fail (input / expected / got dikhega), ⏳ = abhi solve nahi kiya (todo())

const TODO = "__TODO__";
function todo() {
  throw new Error(TODO);
}

const stats = { pass: 0, fail: 0, todo: 0 };

const key = (x) => JSON.stringify(x);
const cmp = (a, b) => (key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0);

// unordered: "outer" = sirf bahar ka order ignore, "deep" = andar ke arrays ka order bhi ignore
function normalize(v, mode) {
  if (!mode || !Array.isArray(v)) return v;
  if (mode === "deep") return v.map((x) => (Array.isArray(x) ? [...x].sort(cmp) : x)).sort(cmp);
  return [...v].sort(cmp);
}

function same(got, expected, opts) {
  if (opts.close) return typeof got === "number" && Math.abs(got - expected) < 1e-5;
  return key(normalize(got, opts.unordered)) === key(normalize(expected, opts.unordered));
}

// cases: [[args...], expected]
// opts.inPlace = argument index jo function badalta hai (return ki jagah wahi check hoga)
// opts.unordered = "outer" | "deep", opts.close = float compare
// opts.check = (got, args) => boolean, jab ek se zyada sahi answer ho sakte hain
function test(name, fn, cases, opts = {}) {
  for (const [args, expected] of cases) {
    const input = structuredClone(args);
    let got;
    try {
      const r = fn(...input);
      got = opts.inPlace !== undefined ? input[opts.inPlace] : r;
    } catch (e) {
      if (e.message === TODO) {
        stats.todo++;
        console.log(`⏳ ${name}`);
        return;
      }
      got = `Error: ${e.message}`;
    }
    const ok = opts.check ? opts.check(got, structuredClone(args)) : same(got, expected, opts);
    if (!ok) {
      stats.fail++;
      console.log(`❌ ${name}`);
      console.log(`   input:    ${key(args)}`);
      if (!opts.check) console.log(`   expected: ${key(expected)}`);
      console.log(`   got:      ${key(got)}`);
      return;
    }
  }
  stats.pass++;
  console.log(`✅ ${name}`);
}

// Async tests (debounce, Promise.all etc). fn ko true return karna hai jab sab sahi ho.
const pending = [];
function testAsync(name, fn) {
  const p = (async () => {
    try {
      const ok = await fn();
      if (ok) { stats.pass++; console.log(`✅ ${name}`); }
      else { stats.fail++; console.log(`❌ ${name}`); }
    } catch (e) {
      if (e.message === TODO) { stats.todo++; console.log(`⏳ ${name}`); }
      else { stats.fail++; console.log(`❌ ${name}  (Error: ${e.message})`); }
    }
  })();
  pending.push(p);
}

// LeetCode style class tests: ops = ["MinStack","push",...], args = [[],[-2],...]
// void methods ka output null maana jaata hai
function runOps(Cls, ops, args) {
  let obj;
  return ops.map((op, i) => {
    if (i === 0) { obj = new Cls(...args[0]); return null; }
    const r = obj[op](...args[i]);
    return r === undefined ? null : r;
  });
}

// ---------- Linked list helpers ----------
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
// pos = cycle kis index pe judegi (-1 = no cycle)
function toList(arr, pos = -1) {
  const dummy = new ListNode(0);
  let tail = dummy, cycleNode = null;
  arr.forEach((v, i) => {
    tail.next = new ListNode(v);
    tail = tail.next;
    if (i === pos) cycleNode = tail;
  });
  if (cycleNode) tail.next = cycleNode;
  return dummy.next;
}
function toArray(head) {
  const out = [];
  for (let n = head, steps = 0; n && steps < 10000; n = n.next, steps++) out.push(n.val);
  return out;
}

// ---------- Tree helpers ----------
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
// LeetCode level-order array -> tree. [3,9,20,null,null,15,7]
function toTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let head = 0, i = 1;
  while (i < arr.length) {
    const node = queue[head++];
    if (i < arr.length && arr[i] !== null) queue.push((node.left = new TreeNode(arr[i])));
    i++;
    if (i < arr.length && arr[i] !== null) queue.push((node.right = new TreeNode(arr[i])));
    i++;
  }
  return root;
}
// tree -> level-order array (trailing nulls hata ke)
function fromTree(root) {
  const out = [], queue = [root];
  for (let head = 0; head < queue.length; head++) {
    const node = queue[head];
    if (!node) { out.push(null); continue; }
    out.push(node.val);
    queue.push(node.left, node.right);
  }
  while (out.length && out[out.length - 1] === null) out.pop();
  return out;
}
function findNode(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return findNode(root.left, val) || findNode(root.right, val);
}

process.on("exit", () => {
  const total = stats.pass + stats.fail + stats.todo;
  console.log(`\n── ${stats.pass}/${total} solved · ${stats.fail} failing · ${stats.todo} todo ──`);
});

module.exports = { todo, test, testAsync, runOps, ListNode, toList, toArray, TreeNode, toTree, fromTree, findNode, pending };
