import { bubbleSort, insertionSort, selectionSort } from "./codes";

export default [
  {
    id: 1,
    name: "bubblesort",
    title: "BubbleSort",
    run: bubbleSort,
  },
  {
    id: 2,
    name: "selectionsort",
    title: "SelectionSort",
    run: selectionSort,
  },
  {
    id: 3,
    name: "insertionsort",
    title: "InsertionSort",
    run: insertionSort,
  },
  {
    id: 4,
    name: "quicksort",
    title: "QuickSort",
  },
];
