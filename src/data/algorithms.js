import { bubbleSort, insertionSort, selectionSort } from "./codes";

const data = [57, 17, 34, 21, 25, 44, 10, 13];

export default [
  {
    id: 1,
    name: "bubblesort",
    title: "BubbleSort",
    data: [...data],
    run: bubbleSort,
  },
  {
    id: 2,
    name: "selectionsort",
    title: "SelectionSort",
    data: [...data],
    run: selectionSort,
  },
  {
    id: 3,
    name: "insertionsort",
    title: "InsertionSort",
    data: [...data],
    run: insertionSort,
  },
  {
    id: 4,
    name: "mergesort",
    title: "MergeSort",
    data: [...data],
  },
  {
    id: 5,
    name: "quicksort",
    title: "QuickSort",
    data: [...data],
  },
];
