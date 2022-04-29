import { useState, useEffect } from "react";

import bubbleSort from "./algorithms/bubbleSort";
import insertionSort from "./algorithms/insertionSort";
import selectionSort from "./algorithms/selectionSort";
import mergeSort from "./algorithms/mergeSort";
import quickSort from "./algorithms/quickSort";

import Order from "./algorithms/type";

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
    const [algorithm, setAlgorithm] = useState<string>("bubbleSort");
    const [comparing, setComparing] = useState<Array<number | null>>([]);
    const [swapping, setSwapping] = useState<Array<number | null>>([]);
    const [sortedIndex, setSortedIndex] = useState<number[]>([]);
    const [speed, setSpeed] = useState<number>(10);
    const [length, setLength] = useState<number>(10);
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

    const startSorting = (order: Order): void => {
        reset();
        setIsSorting(true);

        for (let i = 0; i < order.length; i++) {
            setTimeout(() => {
                const [j, k, arr, index] = order[i];
                setComparing([j, k]);
                setSwapping([]);

                if (arr !==null) {
                    setSortingArray(arr);
                    setSwapping([j, k]);
                }

                if (index !== null) {
                    setSortedIndex((prevState) => [...prevState, index]);
                }

                if (i === order.length - 1) {
                    setIsSorting(false);
                }
            }, i * (5000 / speed));
        }
    };

    const SortHandler = () => {
        switch (algorithm) {
            case "bubbleSort":
                startSorting(bubbleSort(sortingArray));
                break;
            case "insertionSort":
                startSorting(insertionSort(sortingArray));
                break;
            case "selectionSort":
                startSorting(selectionSort(sortingArray));
                break;
            case "mergeSort":
                startSorting(mergeSort(sortingArray));
                break;
            case "quickSort":
                startSorting(quickSort(sortingArray));
                break;
            default:
                break;
        }
    } 

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
                setAlgorithm={setAlgorithm}
                reset={reset}
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
