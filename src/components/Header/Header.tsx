import { useState } from "react";
import classes from "./Header.module.css";

const Header: React.FC<{
    setStart: () => void;
    randomize: () => void;
    speed: number;
    length: number;
    setSpeed: (number: number) => void;
    setLength: (number: number) => void;
    setAlgorithm: (algo: string) => void;
    isSorting: boolean;
    reset: () => void;
}> = (props) => {
    const [settings, setSettings] = useState<boolean>(false);

    const {
        setStart,
        randomize,
        speed,
        length,
        setSpeed,
        setLength,
        isSorting,
        setAlgorithm,
        reset,
    } = props;

    const speedHandler = (event: any) => {
        setSpeed(event.target.valueAsNumber);
    };

    const lengthHandler = (event: any) => {
        reset();
        setLength(event.target.valueAsNumber);
    };

    const algorithmHandler = (event: any) => {
        setAlgorithm(event.target.value);
    };

    return (
        <header className={classes.header}>
            <h1>Sorting Visualizer</h1>
            <div className={classes.nav}>
                <div>
                    <select onChange={algorithmHandler} disabled={isSorting}>
                        <option value="bubbleSort">Bubble Sort</option>
                        <option value="insertionSort">Insertion Sort</option>
                        <option value="selectionSort">Selection Sort</option>
                        <option value="mergeSort">Merge Sort</option>
                        <option value="quickSort">Quick Sort</option>
                    </select>
                </div>
                <button onClick={randomize} disabled={isSorting}>
                    Randomize Array
                </button>
                <button onClick={setStart} disabled={isSorting}>
                    Start Sorting
                </button>
            </div>
            <div className={classes.settings}>
                <button onClick={() => setSettings((prevState) => !prevState)}>⚙️</button>
                {settings && (
                    <div>
                        <div className={classes.slider}>
                            <label htmlFor="speed">Speed</label>
                            <input
                                id="speed"
                                type="range"
                                min="1"
                                max="100"
                                value={speed}
                                onChange={speedHandler}
                                disabled={isSorting}
                            />
                        </div>
                        <div className={classes.slider}>
                            <label htmlFor="length">Length</label>
                            <input
                                id="length"
                                type="range"
                                min="5"
                                max="50"
                                value={length}
                                onChange={lengthHandler}
                                disabled={isSorting}
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
