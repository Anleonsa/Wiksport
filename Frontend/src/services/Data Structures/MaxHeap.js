class MaxHeap {
  constructor() {
    this.heap = [{ Dificultad: 0 }];
  }
  size() {
    return this.heap.length - 1;
  }
  empty() {
    return (this.heap.length === 1);
  }
  heapSwap(aidx, bidx) {
    const atemp = this.heap[aidx];
    this.heap[aidx] = this.heap[bidx];
    this.heap[bidx] = atemp;
  }
  siftUp(idx) {
    while (1 < idx && this.heap[idx].Dificultad > this.heap[idx >> 1].Dificultad) {
      this.heapSwap(idx, idx >> 1);
      idx >>= 1;
    }
  }
  siftDown(idx) {
    let lastIdx = this.heap.length - 1;

    let l_child = (2 * idx <= lastIdx) ? (2 * idx) : idx;
    let r_child = (2 * idx + 1 <= lastIdx) ? (2 * idx + 1) : idx;

    while (this.heap[l_child].Dificultad > this.heap[idx].Dificultad || this.heap[r_child].Dificultad > this.heap[idx].Dificultad) {
      if (this.heap[l_child].Dificultad > this.heap[idx].Dificultad && this.heap[l_child].Dificultad > this.heap[r_child].Dificultad) {
        this.heapSwap(l_child, idx);
        idx = l_child;
      }
      else if (this.heap[r_child].Dificultad > this.heap[idx].Dificultad) {
        this.heapSwap(r_child, idx);
        idx = r_child;
      }
      l_child = (2 * idx <= lastIdx) ? (2 * idx) : idx;
      r_child = (2 * idx + 1 <= lastIdx) ? (2 * idx + 1) : idx;
    }
  }
  push(v) {
    this.heap.push(v);
    const idx = this.heap.length - 1;
    this.siftUp(idx);
  }
  pop() {
    const last = this.heap.length - 1;
    this.heapSwap(1, last);
    this.heap.pop();
    if (this.heap.length > 1) this.siftDown(1);
  }
  top() {
    if (this.heap.length <= 1) return null;
    return this.heap[1];
  }
}
export default MaxHeap;
