/* ============================================================================
 * 11. GRAPHS
 * Chalao: node 11_graphs.js
 * ============================================================================
 *
 * DEFINITION
 *   Graph = nodes (vertices) + unke beech connections (edges).
 *   Directed (ek taraf: course A → B) ya undirected (dono taraf: dosti).
 *   Tree bhi ek graph hai (bina cycle ka, connected).
 *
 *   Representation — ADJACENCY LIST (sabse common):
 *     const graph = Array.from({ length: n }, () => []);
 *     for (const [a, b] of edges) { graph[a].push(b); graph[b].push(a); }
 *   Grid bhi graph hai: har cell ke 4 neighbours (up, down, left, right).
 *
 * KAB LAGTA HAI
 *   Grid (islands, rotting oranges), connections (network, friends),
 *   dependencies (course schedule → topological sort).
 *
 *   BFS: shortest path (unweighted), level by level. QUEUE.
 *   DFS: saare connected parts explore. RECURSION ya STACK.
 *   VISITED hamesha track karo, warna infinite loop.
 *
 * TEMPLATE: Grid DFS
 *   function dfs(r, c) {
 *     if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== "1") return;
 *     grid[r][c] = "0";                     // visited mark
 *     dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
 *   }
 *
 * TEMPLATE: BFS (head pointer, shift() nahi)
 *   const queue = [start]; visited[start] = true;
 *   for (let head = 0; head < queue.length; head++) {
 *     const node = queue[head];
 *     for (const next of graph[node]) if (!visited[next]) { visited[next] = true; queue.push(next); }
 *   }
 *
 * TOPOLOGICAL SORT (Kahn's): indegree count karo, indegree 0 wale queue mein,
 *   pop karke neighbours ka indegree--, 0 hua toh queue mein. Saare process
 *   nahi hue → cycle hai.
 *
 * Complexity: O(V + E). Grid: O(rows · cols).
 * ========================================================================== */

const { todo, test } = require("./_runner");

/* ----------------------------------------------------------------------------
 * Q1. ⭐ Number of Islands · Medium · LeetCode 200  (sabse classic)
 * Question: "1" = land, "0" = water. Kitne islands (connected land) hain?
 * Steps: Har cell: "1" mila → count++, DFS se poora island "0" kar do (sink).
 * Target: Time O(rows · cols)
 * ------------------------------------------------------------------------- */
function numIslands(grid) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q2. Flood Fill · Easy · LeetCode 733
 * Question: (sr, sc) se shuru karke same colour wale connected cells ko `color`
 *           kar do. Image return.
 * Steps: original = image[sr][sc]. original === color → return (warna infinite).
 *        DFS: cell original hai → color karo, 4 taraf jaao.
 * ------------------------------------------------------------------------- */
function floodFill(image, sr, sc, color) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q3. Find if Path Exists in Graph · Easy · LeetCode 1971
 * Question: Undirected graph (n nodes, edges). source se destination tak path?
 * Steps: Adjacency list → BFS template → visited[destination].
 * ------------------------------------------------------------------------- */
function validPath(n, edges, source, destination) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q4. Max Area of Island · Medium · LeetCode 695
 * Question: Grid (numbers 0/1). Sabse bade island ka area.
 * Steps: DFS jo area return kare: 1 + 4 directions ka sum. Max rakho.
 * ------------------------------------------------------------------------- */
function maxAreaOfIsland(grid) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q5. ⭐ Rotting Oranges · Medium · LeetCode 994
 * Question: 0 khaali, 1 fresh, 2 rotten. Har minute rotten apne 4 neighbours
 *           ko sada deta hai. Sab sadne mein kitne minute? Impossible → -1.
 * Steps (multi-source BFS):
 *   1. Saare rotten ek saath queue mein, fresh gino.
 *   2. Level by level BFS, har level = 1 minute. Fresh sade → fresh--.
 *   3. fresh > 0 → -1, warna minutes.
 * ------------------------------------------------------------------------- */
function orangesRotting(grid) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q6. Clone Graph · Medium · LeetCode 133
 * Question: Connected undirected graph ka deep copy. Node: { val, neighbors: [] }
 * Steps: Map old → new. dfs(node): map mein hai → return copy.
 *        Copy banao, map mein daalo (PEHLE, cycle ke liye), phir
 *        copy.neighbors = node.neighbors.map(dfs).
 * ------------------------------------------------------------------------- */
function GraphNode(val, neighbors = []) {
  this.val = val;
  this.neighbors = neighbors;
}
function cloneGraph(node) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q7. ⭐ Course Schedule · Medium · LeetCode 207
 * Question: numCourses, prerequisites [a, b] = a karne se pehle b. Sab ho sakte?
 *           (yaani directed graph mein cycle hai ya nahi)
 * Steps: Topological sort (Kahn's). Graph b → a, indegree[a]++.
 *        Process hue count === numCourses → true.
 * Target: O(V + E)
 * ------------------------------------------------------------------------- */
function canFinish(numCourses, prerequisites) {
  todo();
}

/* ----------------------------------------------------------------------------
 * Q8. Pacific Atlantic Water Flow · Medium · LeetCode 417
 * Question: Paani barabar ya neeche height pe behta hai. Pacific = top + left
 *           edge, Atlantic = bottom + right edge. Kin cells se dono tak jaata hai?
 * Steps (ULTA socho): Ocean se upar chadho (next height >= current).
 *   1. Pacific edges se DFS → pacific visited.
 *   2. Atlantic edges se DFS → atlantic visited.
 *   3. Dono mein true wale cells [r, c].
 * ------------------------------------------------------------------------- */
function pacificAtlantic(heights) {
  todo();
}

/* ============================== TESTS ===================================== */
test("Q1 Number of Islands", numIslands, [
  [[[["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]], 1],
  [[[["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]], 3],
]);
test("Q2 Flood Fill", floodFill, [
  [[[[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2], [[2, 2, 2], [2, 2, 0], [2, 0, 1]]],
  [[[[0, 0, 0], [0, 0, 0]], 0, 0, 0], [[0, 0, 0], [0, 0, 0]]],
]);
test("Q3 Find if Path Exists", validPath, [
  [[3, [[0, 1], [1, 2], [2, 0]], 0, 2], true],
  [[6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5], false],
]);
test("Q4 Max Area of Island", maxAreaOfIsland, [
  [[[[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]], 6],
  [[[[0, 0, 0, 0, 0, 0, 0, 0]]], 0],
]);
test("Q5 Rotting Oranges", orangesRotting, [
  [[[[2, 1, 1], [1, 1, 0], [0, 1, 1]]], 4], [[[[2, 1, 1], [0, 1, 1], [1, 0, 1]]], -1], [[[[0, 2]]], 0],
]);
test("Q6 Clone Graph", (adj) => {
  if (!adj.length) return cloneGraph(null) === null ? [] : "null aana chahiye";
  const nodes = adj.map((_, i) => new GraphNode(i + 1));
  adj.forEach((ns, i) => { nodes[i].neighbors = ns.map((v) => nodes[v - 1]); });
  const copy = cloneGraph(nodes[0]);
  const seen = new Map(), stack = [copy];
  while (stack.length) {
    const n = stack.pop();
    if (!n || seen.has(n.val)) continue;
    if (nodes.includes(n)) return "original node reuse kiya, deep copy nahi";
    seen.set(n.val, n.neighbors.map((x) => x.val));
    stack.push(...n.neighbors);
  }
  return adj.map((_, i) => seen.get(i + 1));
}, [
  [[[[2, 4], [1, 3], [2, 4], [1, 3]]], [[2, 4], [1, 3], [2, 4], [1, 3]]],
  [[[[]]], [[]]],
  [[[]], []],
]);
test("Q7 Course Schedule", canFinish, [
  [[2, [[1, 0]]], true], [[2, [[1, 0], [0, 1]]], false], [[4, [[1, 0], [2, 1], [3, 2]]], true],
]);
test("Q8 Pacific Atlantic Water Flow", pacificAtlantic, [
  [[[[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]],
    [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]],
  [[[[1]]], [[0, 0]]],
], { unordered: "outer" });
