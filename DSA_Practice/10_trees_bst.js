/* ============================================================================
 * 10. TREES AND BST
 * Chalao: node 10_trees_bst.js
 * ============================================================================
 *
 * DEFINITION
 *   Binary tree = har node ke max 2 children (left, right). Top wala = root,
 *   bina children wala = leaf. Height = root se sabse door leaf tak ke levels.
 *
 *   function TreeNode(val, left = null, right = null) {...}  (_runner.js mein hai)
 *
 *   Tests mein tree LeetCode jaisa array se banta hai:
 *   [3,9,20,null,null,15,7] =        3
 *                                   / \
 *                                  9   20
 *                                     /  \
 *                                    15   7
 *
 * TRAVERSALS (yaad rakh)
 * ┌────────────┬────────────────────────┬──────────────────────────────────┐
 * │ Traversal  │ Order                  │ Kab use                          │
 * ├────────────┼────────────────────────┼──────────────────────────────────┤
 * │ Preorder   │ Root → Left → Right    │ Tree copy / serialize            │
 * │ Inorder    │ Left → Root → Right    │ BST mein SORTED order deta hai   │
 * │ Postorder  │ Left → Right → Root    │ Pehle children, phir parent      │
 * │            │                        │ (height, delete, diameter)       │
 * │ Level order│ Level by level (BFS)   │ Levels, right view, min depth    │
 * └────────────┴────────────────────────┴──────────────────────────────────┘
 *
 * BST RULE: left subtree ke SAARE values < root < right subtree ke SAARE values.
 *
 * SOCHNE KA TAREEKA: "root pe kya karna hai, left aur right se kya chahiye?"
 *
 * TEMPLATE: DFS recursion
 *   function maxDepth(root) {
 *     if (!root) return 0;                                       // base case
 *     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
 *   }
 *
 * TEMPLATE: BFS level order
 *   let level = [root];
 *   while (level.length) {
 *     result.push(level.map(n => n.val));
 *     const next = [];
 *     for (const n of level) { if (n.left) next.push(n.left); if (n.right) next.push(n.right); }
 *     level = next;
 *   }
 * ========================================================================== */

const { todo, test, TreeNode, toTree, fromTree, findNode } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Binary Tree Inorder Traversal · Easy · LeetCode 94
 * Question: Inorder values ki list. Recursive + iterative (stack) dono likho.
 * Example:  [1,null,2,3] → [1,3,2]
 * Steps (iterative):
 *   curr = root. while (curr || stack.length):
 *     while (curr) { stack.push(curr); curr = curr.left; }
 *     curr = stack.pop(); result.push(curr.val); curr = curr.right;
 * Target: Time O(n), Space O(h)
 * ------------------------------------------------------------------------- */
function inorderTraversal(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. Binary Tree Preorder Traversal · Easy · LeetCode 144
 * Question: Root → Left → Right order.
 * Example:  [1,null,2,3] → [1,2,3]
 * Steps: Recursion, ya stack: pop, push val, pehle RIGHT push phir LEFT.
 * ------------------------------------------------------------------------- */
function preorderTraversal(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. ⭐ Maximum Depth of Binary Tree · Easy · LeetCode 104
 * Example:  [3,9,20,null,null,15,7] → 3
 * Steps: DFS template.
 * Target: Time O(n), Space O(h)
 * ------------------------------------------------------------------------- */
function maxDepth(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. ⭐ Invert Binary Tree · Easy · LeetCode 226
 * Question: Mirror image banao, root return.
 * Example:  [4,2,7,1,3,6,9] → [4,7,2,9,6,3,1]
 * Steps: null → null. left aur right swap. Dono pe recursion.
 * ------------------------------------------------------------------------- */
function invertTree(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. ⭐ Same Tree · Easy · LeetCode 100
 * Question: Do trees structure aur values mein same hain?
 * Steps: dono null → true. Ek null / val alag → false.
 *        return same(p.left, q.left) && same(p.right, q.right).
 * ------------------------------------------------------------------------- */
function isSameTree(p, q) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Symmetric Tree · Easy · LeetCode 101
 * Question: Tree apna mirror hai?
 * Steps: mirror(a, b): dono null → true; ek null / val alag → false;
 *        mirror(a.left, b.right) && mirror(a.right, b.left).
 * ------------------------------------------------------------------------- */
function isSymmetric(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. Diameter of Binary Tree · Easy · LeetCode 543
 * Question: Kisi bhi do nodes ke beech sabse lamba path (edges mein).
 * Example:  [1,2,3,4,5] → 3
 * Steps: height(node) function. Har node pe best = max(best, leftH + rightH).
 *        height return = 1 + max(leftH, rightH).
 * ------------------------------------------------------------------------- */
function diameterOfBinaryTree(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. Balanced Binary Tree · Easy · LeetCode 110
 * Question: Har node pe left aur right height ka farak <= 1?
 * Steps: height lautao; koi subtree unbalanced → -1 lautao aur upar tak -1.
 * Target: Time O(n)
 * ------------------------------------------------------------------------- */
function isBalanced(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q9. Path Sum · Easy · LeetCode 112
 * Question: Root se leaf tak koi path jiska sum = targetSum?
 * Steps: null → false. target -= val. Leaf hai → target === 0.
 *        Warna left || right.
 * ------------------------------------------------------------------------- */
function hasPathSum(root, targetSum) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q10. Subtree of Another Tree · Easy · LeetCode 572
 * Question: subRoot, root ka subtree hai?
 * Steps: Har node pe isSameTree(node, subRoot) check. root null → false.
 * Target: Time O(n · m)
 * ------------------------------------------------------------------------- */
function isSubtree(root, subRoot) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q11. ⭐ Binary Tree Level Order Traversal · Medium · LeetCode 102
 * Example:  [3,9,20,null,null,15,7] → [[3],[9,20],[15,7]]
 * Steps: BFS template.
 * ------------------------------------------------------------------------- */
function levelOrder(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q12. Binary Tree Right Side View · Medium · LeetCode 199
 * Question: Right side se khade hoke dikhne wale nodes (upar se neeche).
 * Example:  [1,2,3,null,5,null,4] → [1,3,4]
 * Steps: BFS, har level ka LAST element.
 * ------------------------------------------------------------------------- */
function rightSideView(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q13. ⭐ Validate Binary Search Tree · Medium · LeetCode 98
 * Question: Valid BST hai?
 * Example:  [5,1,4,null,null,3,6] → false
 * Steps: valid(node, min, max): null → true. val <= min ya >= max → false.
 *        valid(left, min, val) && valid(right, val, max).
 *        Shuru: valid(root, -Infinity, Infinity).
 * GALTI: sirf parent se compare karna kaafi nahi, poori range chahiye.
 * ------------------------------------------------------------------------- */
function isValidBST(root) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q14. ⭐ Lowest Common Ancestor of a BST · Medium · LeetCode 235
 * Question: BST mein p aur q (nodes) ka sabse neeche wala common ancestor.
 * Steps: curr = root. Dono curr se chhote → left. Dono bade → right.
 *        Warna (split ho gaye) curr hi answer.
 * Target: Time O(h)
 * ------------------------------------------------------------------------- */
function lowestCommonAncestor(root, p, q) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q15. Kth Smallest Element in a BST · Medium · LeetCode 230
 * Example:  [3,1,4,null,2], k = 1 → 1
 * Steps: Inorder (sorted) traversal, k-th value pe ruk jao.
 * ------------------------------------------------------------------------- */
function kthSmallest(root, k) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q16. Construct Binary Tree from Preorder and Inorder · Medium · LeetCode 105
 * Example:  preorder [3,9,20,15,7], inorder [9,3,15,20,7] → [3,9,20,null,null,15,7]
 * Steps:
 *   1. Preorder ka pehla = root.
 *   2. Inorder mein root ka index (Map se O(1)) → left side = left subtree,
 *      right side = right subtree.
 *   3. Preorder pointer aage badhate hue pehle left, phir right banao.
 * Target: Time O(n)
 * ------------------------------------------------------------------------- */
function buildTree(preorder, inorder) {
  todo();
}

/* ============================== TESTS ===================================== */
const T = toTree;
test("Q1 Inorder Traversal", (a) => inorderTraversal(T(a)), [
  [[[1, null, 2, 3]], [1, 3, 2]], [[[]], []], [[[1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]], [4, 2, 6, 5, 7, 1, 3, 9, 8]],
]);
test("Q2 Preorder Traversal", (a) => preorderTraversal(T(a)), [
  [[[1, null, 2, 3]], [1, 2, 3]], [[[]], []], [[[1, 2, 3, 4, 5]], [1, 2, 4, 5, 3]],
]);
test("Q3 Maximum Depth", (a) => maxDepth(T(a)), [
  [[[3, 9, 20, null, null, 15, 7]], 3], [[[1, null, 2]], 2], [[[]], 0],
]);
test("Q4 Invert Binary Tree", (a) => fromTree(invertTree(T(a))), [
  [[[4, 2, 7, 1, 3, 6, 9]], [4, 7, 2, 9, 6, 3, 1]], [[[2, 1, 3]], [2, 3, 1]], [[[]], []],
]);
test("Q5 Same Tree", (a, b) => isSameTree(T(a), T(b)), [
  [[[1, 2, 3], [1, 2, 3]], true], [[[1, 2], [1, null, 2]], false], [[[1, 2, 1], [1, 1, 2]], false],
]);
test("Q6 Symmetric Tree", (a) => isSymmetric(T(a)), [
  [[[1, 2, 2, 3, 4, 4, 3]], true], [[[1, 2, 2, null, 3, null, 3]], false],
]);
test("Q7 Diameter of Binary Tree", (a) => diameterOfBinaryTree(T(a)), [
  [[[1, 2, 3, 4, 5]], 3], [[[1, 2]], 1],
]);
test("Q8 Balanced Binary Tree", (a) => isBalanced(T(a)), [
  [[[3, 9, 20, null, null, 15, 7]], true], [[[1, 2, 2, 3, 3, null, null, 4, 4]], false], [[[]], true],
]);
test("Q9 Path Sum", (a, t) => hasPathSum(T(a), t), [
  [[[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22], true], [[[1, 2, 3], 5], false], [[[], 0], false],
]);
test("Q10 Subtree of Another Tree", (a, b) => isSubtree(T(a), T(b)), [
  [[[3, 4, 5, 1, 2], [4, 1, 2]], true], [[[3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2]], false],
]);
test("Q11 Level Order Traversal", (a) => levelOrder(T(a)), [
  [[[3, 9, 20, null, null, 15, 7]], [[3], [9, 20], [15, 7]]], [[[1]], [[1]]], [[[]], []],
]);
test("Q12 Right Side View", (a) => rightSideView(T(a)), [
  [[[1, 2, 3, null, 5, null, 4]], [1, 3, 4]], [[[1, 2, 3, 4]], [1, 3, 4]], [[[]], []],
]);
test("Q13 Validate BST", (a) => isValidBST(T(a)), [
  [[[2, 1, 3]], true], [[[5, 1, 4, null, null, 3, 6]], false], [[[5, 4, 6, null, null, 3, 7]], false], [[[2, 2, 2]], false],
]);
test("Q14 Lowest Common Ancestor of BST", (a, p, q) => {
  const root = T(a);
  const node = lowestCommonAncestor(root, findNode(root, p), findNode(root, q));
  return node ? node.val : null;
}, [
  [[[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8], 6],
  [[[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4], 2],
  [[[2, 1], 2, 1], 2],
]);
test("Q15 Kth Smallest in BST", (a, k) => kthSmallest(T(a), k), [
  [[[3, 1, 4, null, 2], 1], 1], [[[5, 3, 6, 2, 4, null, null, 1], 3], 3],
]);
test("Q16 Construct Tree from Preorder + Inorder", (pre, ino) => fromTree(buildTree(pre, ino)), [
  [[[3, 9, 20, 15, 7], [9, 3, 15, 20, 7]], [3, 9, 20, null, null, 15, 7]],
  [[[-1], [-1]], [-1]],
]);
