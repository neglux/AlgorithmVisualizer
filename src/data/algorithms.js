import { bubbleSort, insertionSort, selectionSort } from "./codes";

export default [
  {
    id: 1,
    name: "bubblesort",
    title: "BubbleSort",
    run: bubbleSort,
    code: `function bubbleSort(array)
            for (let i = 0; i < array.length - 1; i++) {
              for (let j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) swap(j, j + 1);
              }
            }
      return array
      `,
  },
  {
    id: 2,
    name: "selectionsort",
    title: "SelectionSort",
    run: selectionSort,
    code: `function selectionSort(arr) 
            for (let i = 0; i < arr.length; i++) {
                let smallest = { index: i, value: arr[i] }

                for (let j = i; j < arr.length; j++) {
                  if (arr[j] < smallest.value) smallest = { index: j, value: arr[j] }
                }
                if (i !== smallest.index) swap(i, smallest.index)
            }
      return arr`,
  },
  {
    id: 3,
    name: "insertionsort",
    title: "InsertionSort",
    run: insertionSort,
    code: `function insertionSort(arr) 
            for (let i = 1; i < arr.length; i++) {
              let cur = arr[i]
              for (let j = i - 1; j >= 0; j--) {
                if (cur < arr[j]) swap(j, j + 1)
              }
            }
      return arr`,
  },
];
