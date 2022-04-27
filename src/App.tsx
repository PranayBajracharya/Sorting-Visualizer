import React, { useState } from "react";

import bubbleSort from "./algorithms/bubbleSort";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

const randomizedArray = (): number[] => {
    const randomArray = Array.from(Array(50 + 1).keys()).slice(1);

    for (let i = randomArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i - 1))
        
        const temp = randomArray[i]
        randomArray[i] = randomArray[randomIndex]
        randomArray[randomIndex] = temp
    }

    return randomArray;
}

function App() {
    const [sortingArray, setSortingArray] = useState<number[]>(randomizedArray());
    const [comparing, setComparing] = useState<Array<number | null>>([]);
    const [swapping, setSwapping] = useState<number[]>([]);
    const [sortedIndex, setSortedIndex] = useState<number[]>([]);
    const [speed, setSpeed] = useState<number>(20);

    const randomize = () => {
        setSortingArray(randomizedArray());
    };

    const SortHandler = () => {
        const order = bubbleSort(sortingArray);

        for (let i = 0; i < order.length; i++) {
            setTimeout(() => {
                const [j, k, arr, index] = order[i];
                setComparing([j, k]);
                setSwapping([]);

                if (arr && j && k) {
                    setSortingArray(arr);
                    setSwapping([j, k]);
                }

                if (index !== null) {
                    setSortedIndex((prevState) => [...prevState, index]);
                }
            }, i * (1000 / speed));
        }
    };

    return (
        <div className="App">
            <Header setStart={SortHandler} randomize={randomize} speed={speed} setSpeed={setSpeed}/>
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
