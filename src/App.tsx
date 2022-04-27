import React, { useState } from "react";

import bubbleSort from "./algorithms/bubbleSort";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

const array = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 500 + 1)
);
// console.log(array);

function App() {
    const [sortingArray, setSortingArray] = useState<number[]>(array);
    const [comparing, setComparing] = useState<number[]>([]);
    const [swapping, setSwapping] = useState<number[]>([]);
    const [sortedIndex, setSortedIndex] = useState<number[]>([]);

    const SortHandler = () => {
        const order = bubbleSort(array);
        // console.log(order);

        for (let i = 0; i < order.length; i++) {
            const [j, k, arr, index] = order[i];
            setTimeout(() => {
                if (j !== null && k !== null) {
                    setComparing([j, k]);
                    setSwapping([]);
                }

                if (arr && j && k) {
                    setSortingArray(arr);
                    setSwapping([j, k]);
                }

                if (index !== null) {
                    setSortedIndex((prevState) => [...prevState, index]);
                }
            }, i * 1500);
        }
    };

    return (
        <div className="App">
            <Header setStart={SortHandler} />
            <Main
                sortingArray={sortingArray}
                comparing={comparing}
                swapping={swapping}
                sorted={sortedIndex}
            />
        </div>
    );
}

export default App;
