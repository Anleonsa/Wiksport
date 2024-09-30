class HashTable {
  constructor(size) {
    this.m = size;
    this.count = 0;
    this.table = new Array(size);
  }

  hashFunction(key) {
    let hash = 0;
    const p = 1000000007;
    const a = 31;
    const b = 53;

    for (let i = 0; i < key.length; i++) {
      hash = (hash * a + key.charCodeAt(i)) % p;
    }
    hash = (hash * b) % p;
    return hash % this.m;
  }

  add(key, value) {
    const index = this.hashFunction(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          throw new Error("Key already exists");
        }
      }
    } else {
      this.table[index] = [];
    }
    this.table[index].push({ key, value });
    this.count++;
    if (this.count >= this.m * 0.9) {
      this.resize(this.m * 2);
    }
  }

  get(key) {
    const index = this.hashFunction(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          return this.table[index][i].value;
        }
      }
    }
    throw new Error("Key not found");
  }

  find(key) {
    const index = this.hashFunction(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          return true;
        }
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hashFunction(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          this.table[index].splice(i, 1);
          this.count--;
          return;
        }
      }
    }
    throw new Error("Key not found");
  }

  resize(newSize) {
    const oldTable = this.table;
    this.m = newSize;
    this.table = new Array(newSize);
    this.count = 0;
    for (let i = 0; i < oldTable.length; i++) {
      if (oldTable[i]) {
        for (let j = 0; j < oldTable[i].length; j++) {
          this.add(oldTable[i][j].key, oldTable[i][j].value);
        }
      }
    }
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }
}
export default HashTable;
