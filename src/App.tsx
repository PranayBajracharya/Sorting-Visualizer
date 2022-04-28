import { useState, useEffect } from "react";

import bubbleSort from "./algorithms/bubbleSort";
import insertionSort from "./algorithms/insertionSort";

import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

const randomizedArray = (length: number): number[] => {
    const randomArray = Array.from(Array(length + 1).keys()).slice(1);

    for (let i = randomArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i - 1));

        const temp = randomArray[i];
        randomArray[i] = randomArray[randomIndex];
        randomArray[randomIndex] = temp;
    }

    return randomArray;
};

function App() {
    const [algorithm, setAlgorithm] = useState<string>("BubbleSort");
    const [comparing, setComparing] = useState<Array<number | null>>([]);
    const [swapping, setSwapping] = useState<number[]>([]);
    const [sortedIndex, setSortedIndex] = useState<number[]>([]);
    const [speed, setSpeed] = useState<number>(20);
    const [length, setLength] = useState<number>(20);
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [sortingArray, setSortingArray] = useState<number[]>(
        randomizedArray(length)
    );
    
    const reset = (): void => {
        setSwapping([]);
        setComparing([]);
        setSortedIndex([]);
        setIsSorting(false);
    }

    const randomize = (): void => {
        reset();
        setSortingArray(randomizedArray(length));
    };

    useEffect(() => {
        setSortingArray(randomizedArray(length));
    }, [length]);

    const SortHandler = (): void => {
        reset();
        setIsSorting(true);

        const order = insertionSort(sortingArray);

        for (let i = 0; i < order.length; i++) {
            setTimeout(() => {
                const [j, k, arr, index] = order[i];
                setComparing([j, k]);
                setSwapping([]);

                if (arr !==null && j !== null && k !== null) {
                    setSortingArray(arr);
                    setSwapping([j, k]);
                }

                if (index !== null) {
                    setSortedIndex((prevState) => [...prevState, index]);
                }

                if (i === order.length - 1) {
                    setIsSorting(false);
                }
            }, i * (1000 / speed));
        }
    };

    return (
        <div className="App">
            <Header
                setStart={SortHandler}
                randomize={randomize}
                speed={speed}
                length={length}
                setSpeed={setSpeed}
                setLength={setLength}
                isSorting={isSorting}
            />
            <Main
                sortingArray={sortingArray}
                comparing={comparing}
                swapping={swapping}
                sorted={sortedIndex}
                length={length}
            />
        </div>
    );
}

export default App;
