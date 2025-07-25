/*
 * @lc app=leetcode.cn id=295 lang=typescript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
// 待优化
class MedianFinder {
  private arr: number[];
  constructor() {
    this.arr = [];
  }

  addNum(num: number): void {
    if (this.arr.length === 0) {
      this.arr.push(num);
      return;
    } else {
      let l = 0;
      let r = this.arr.length - 1;
      while (l <= r) {
        let mid = ((r - l) >> 1) + l;
        if (this.arr[mid] === num) {
          this.arr.splice(mid, 0, num);
          return;
        } else if (this.arr[mid] > num) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }
      this.arr.splice(l, 0, num);
    }
  }

  findMedian(): number {
    if (this.arr.length === 0) {
      throw new Error("No elements present");
    } else {
      const n = this.arr.length;
      if (n % 2 === 1) {
        return this.arr[Math.floor(n / 2)];
      } else {
        return (this.arr[n / 2] + this.arr[n / 2 - 1]) / 2;
      }
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
