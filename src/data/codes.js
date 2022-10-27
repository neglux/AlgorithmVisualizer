export async function bubbleSort(array, animator) {
  animator.start();
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      await animator.setCur(j);
      if (array[j] > array[j + 1]) {
        let m = array[j];
        array[j] = array[j + 1];
        array[j + 1] = m;
        await animator.setSwap(j, j + 1);
      }
    }
  }
  animator.stop();
  return array;
}

export async function selectionSort(arr, animator) {
  const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  animator.start();
  for (let i = 0; i < arr.length; i++) {
    let smallest = { index: i, value: arr[i] };
    for (let j = i; j < arr.length; j++) {
      await animator.setCur(j);
      if (arr[j] < smallest.value) smallest = { index: j, value: arr[j] };
    }
    if (i !== smallest.index) {
      swap(arr, i, smallest.index);
      await animator.setSwap(i, smallest.index);
    }
  }
  animator.stop();
  return arr;
}

export async function insertionSort(arr, animator) {
  const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };
  animator.start();
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      await animator.setCur(j);
      if (cur < arr[j]) {
        swap(arr, j, j + 1);
        await animator.setSwap(j, j + 1);
      } else break;
    }
  }
  animator.stop();
  return arr;
}
