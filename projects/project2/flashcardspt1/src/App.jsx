import "./App.css";
import { useState } from "react";

const carddeck = [
  {
    front: "What is the: average case time complexity of insertion sort",
    back: "O(n^2)",
  },
  {
    front:
      "What algorithm is this: We pass through the list from left to right. If we encounter an entry which is smaller than some of its predecessors then we need to move it as far left as is appropriate. We shift as many elements to the right as needed to make room for it and then insert it",
    back: "Insertion Sort",
  },
  {
    front: "What is the: average case time complexity of binary search",
    back: "O(lgn)",
  },
  {
    front:
      "What algorithm is this The algorithm first looks at the middle of the list. If if element is not there then it knows by comparison if the element is on the left or the right of that middle element and so it concentrates its search to half the list and repeats. It keeps repeating this process either until it  nds the element or the sublist it is looking at shrinks to length 1 and the element is not found. ",
    back: "Binary Search",
  },
  {
    front: "Why do we use recurrence trees",
    back: "We can use a recursively generated tree to find an explicit formula for T(n).",
  },
  {
    front: "Why do we use recurrence relations",
    Back: "A recurrence relation for T(n) tells us how to calculate T(n) for various n in a recursive manner.",
  },
  {
    front: "Case 1 of master theorem",
    back: "f(n) = O(n^c) and log_b a > c, then T(n) = Theta(n^log_b a)",
  },
  {
    front: "Case 2 of master theorem",
    back: "f(n) = Theta(n^c) and log_b a = c, then T(n) = Theta((n^log_b a) lgn)",
  },
  {
    front:
      "What algorithm is this: the list is subdivided repeatedly in half. Each half is then divided in half again and so on until each sublist has size 1 and is obviously sorted. Pairs of sublists are then merged to preserve the sort.",
    back: "Merge sort",
  },
  { front: "What is the time complexity of merge sort", back: "O(n lg n)" },
  {
    front: "If the parent node is at index i what index are its children",
    back: "Left child = 2i, Right child = 2i+1",
  },
  {
    front: "What is a max heap",
    back: "A complete binary tree in which each node's value is greater than or equal to that node's children's value if that node has children.",
  },
];


// const [cards, setCards] = useState(carddeck);
const numcards = Object.keys(carddeck).length;

const flipped = () => {
 setCards(!cards);
};

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>CMSC351 Exam 2 Concepts</h1>
        <h2>Practice for the CMSC351 Exam on 3/16</h2>
        <h3>
          Content: Insertion Sort, Binary Search, Recursion Trees, Master
          Theorem, Mergesort, Heaps and Heapsort
        </h3>
        <h4>Number of Cards : {numcards}</h4>
      </div>
      <div className="card">
        

      </div>
    </div>
  );
};

export default App;
