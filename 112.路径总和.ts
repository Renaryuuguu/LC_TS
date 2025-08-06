/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function traverseTree(root: TreeNode | null, currentSum: number): boolean {
    if (!root) {
      return false;
    }
    currentSum += root.val;
    if (!root.left && !root.right) {
      return currentSum === targetSum;
    }
    return (
      traverseTree(root.left, currentSum) ||
      traverseTree(root.right, currentSum)
    );
  }
  return traverseTree(root, 0);
}
// @lc code=end
