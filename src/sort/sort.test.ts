
import { describe, test, expect } from 'vitest';
import { bubbleSort } from './bubbleSort';

describe('sort-algorithm', () => {
  test('bubbleSort', () => {
    const arr = [6,26,44,4,4,32,8,12,1,10];
    const sorted = bubbleSort(arr);
    expect(sorted).toEqual([1,4,4,6,8,10,12,26,32,44]);
  })
})
