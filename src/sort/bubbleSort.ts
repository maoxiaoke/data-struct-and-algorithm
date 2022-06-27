/**
 * Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in wrong order.
 * @param arr
 */
const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
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

