/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class DoubleListNode {
  key: number;
  value: number;
  next: DoubleListNode | null;
  prev: DoubleListNode | null;
  constructor(
    key: number = 0,
    value: number = 0,
    next: DoubleListNode | null = null,
    prev: DoubleListNode | null = null
  ) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRUCache {
  capacity: number;
  map: Map<number, DoubleListNode>;
  dummy: DoubleListNode;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.dummy = new DoubleListNode();
    this.dummy.next = this.dummy;
    this.dummy.prev = this.dummy;
  }
  private pushFront(n: DoubleListNode) {
    n.prev = this.dummy;
    n.next = this.dummy.next;
    n.prev.next = n;
    n.next!.prev = n;
  }
  private remove(n: DoubleListNode) {
    n.prev!.next = n.next;
    n.next!.prev = n.prev;
  }
  private getNode(key: number): DoubleListNode | null {
    if (!this.map.has(key)) {
      return null;
    }
    const node = this.map.get(key)!;
    this.remove(node);
    this.pushFront(node);
    return node;
  }
  get(key: number): number {
    const node = this.getNode(key);
    return node ? node.value : -1;
  }

  put(key: number, value: number): void {
    let node = this.getNode(key);
    if (node) {
      node.value = value;
      return;
    }
    node = new DoubleListNode(key, value);
    this.map.set(key, node);
    this.pushFront(node);
    if (this.map.size > this.capacity) {
      const lastNode = this.dummy.prev!;
      this.map.delete(lastNode.key);
      this.remove(lastNode);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
