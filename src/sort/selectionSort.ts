/**
 * Selection sort is a sorting algorithm that works by selecting the smallest element
 * @param arr
 */
const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; ++i) {
    let minIndex = i;
    // 循环，找到第 i 个最小的值
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap
    const temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

export {
  selectionSort
}
