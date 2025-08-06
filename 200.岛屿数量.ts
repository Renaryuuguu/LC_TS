/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let result = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        const queue: [number, number][] = [];
        result++;
        queue.push([r, c]);
        grid[r][c] = "0";
        while (queue.length) {
          const [row, col] = queue.pop()!;
          for (let i = 0; i < 4; i++) {
            const nextRow = row + directions[i][0];
            const nextCol = col + directions[i][1];
            if (
              nextCol >= 0 &&
              nextCol < cols &&
              nextRow >= 0 &&
              nextRow < rows &&
              grid[nextRow][nextCol] === "1"
            ) {
              queue.push([nextRow, nextCol]);
              grid[nextRow][nextCol] = "0";
            }
          }
        }
      }
    }
  }
  return result;
}
// @lc code=end
