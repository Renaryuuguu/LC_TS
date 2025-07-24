/*
 * @lc app=leetcode.cn id=572 lang=typescript
 *
 * [572] 另一棵树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function getTraverseString(root: TreeNode): string {
  const result: string[] = [];
  function Travserse(root: TreeNode): void {
    result.push("num_" + String(root.val));
    if (root.left) Travserse(root.left);
    else result.push("lNull");
    if (root.right) Travserse(root.right);
    else result.push("rNull");
  }
  Travserse(root);
  console.log(result.join(","));
  return result.join(",");
}
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  return getTraverseString(root).includes(getTraverseString(subRoot));
}
// @lc code=end
