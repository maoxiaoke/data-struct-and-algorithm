import { describe, expect, test } from 'vitest';
import { BSTree } from './two-tree.js';

describe('two-tree', () => {
  test('traverse', () => {
    const nums = new BSTree();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);

    let orders = nums.inOrder();
    expect(orders).toEqual([3, 16, 22, 23, 37, 45, 99]);

    orders = nums.preOrder();
    expect(orders).toEqual([23, 16, 3, 22, 45, 37, 99]);

    orders = nums.postOrder();
    expect(orders).toEqual([3, 22, 16, 37, 99, 45, 23]);
  })
})