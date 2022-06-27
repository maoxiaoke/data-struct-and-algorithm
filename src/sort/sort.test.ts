
import { describe, test, expect, beforeEach } from 'vitest';
import { bubbleSort } from './bubbleSort';
import { selectionSort } from './selectionSort';
import { quickSort } from './quickSort';

describe('sort-algorithm', () => {
  test('bubbleSort', () => {
    const arr = [6,26,44,4,4,32,8,12,1,10];
    const sorted = bubbleSort(arr);
    expect(sorted).toEqual([1,4,4,6,8,10,12,26,32,44]);
  });

  test('selectionSort', () => {
    const arr = [6,26,44,4,4,32,8,12,1,10];
    const sorted = selectionSort(arr);
    expect(sorted).toEqual([1,4,4,6,8,10,12,26,32,44]);
  })

  test('quickSort', () => {
    const arr = [6,26,44,4,4,32,8,12,1,10];
    const sorted = quickSort(arr);
    expect(sorted).toEqual([1,4,4,6,8,10,12,26,32,44]);
  })
})
