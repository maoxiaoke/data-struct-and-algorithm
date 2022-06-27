/**
 * Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in wrong order.
 * @param arr
 */
const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; ++i) {
    // 第一轮需要比较 n - 1 次；第二轮需要比较 n - 2；第 i 轮需要比较 n - i - 次
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

  }

  return arr;
};

export {
  bubbleSort,
}

