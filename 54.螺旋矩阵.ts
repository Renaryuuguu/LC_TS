/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const total = rows * cols;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const res: number[] = [];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dirIndex = 0;
  let row = 0;
  let col = 0;
  for (let i = 0; i < total; i++) {
    res[i] = matrix[row][col];
    visited[row][col] = true;
    const nextRow = row + directions[dirIndex][0];
    const nextCol = col + directions[dirIndex][1];
    if (
      nextRow < 0 ||
      nextRow >= rows ||
      nextCol < 0 ||
      nextCol >= cols ||
      visited[nextRow][nextCol]
    ) {
      dirIndex = (dirIndex + 1) % 4; // Change direction
    }
    row += directions[dirIndex][0];
    col += directions[dirIndex][1];
  }
  return res;
}
// @lc code=end
