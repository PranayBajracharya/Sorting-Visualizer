import React from "react";
import classes from "./Header.module.css";

const Header: React.FC<{
    setStart: () => void;
    randomize: () => void;
    speed: number;
    length: number;
    setSpeed: (number: number) => void;
    setLength: (number: number) => void;
    isSorting: boolean;
}> = (props) => {
    const {
        setStart,
        randomize,
        speed,
        length,
        setSpeed,
        setLength,
        isSorting,
    } = props;

    const speedHandler = (event: any) => {
        setSpeed(event.target.valueAsNumber);
    };

    const lengthHandler = (event: any) => {
        setLength(event.target.valueAsNumber);
    };

    return (
        <header className={classes.header}>
            <h1>Sorting Visualizer</h1>
            <div className={classes.settings}>
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
                <button onClick={randomize} disabled={isSorting}>
                    Randomize Array
                </button>
                <button onClick={setStart} disabled={isSorting}>
                    Start Sorting
                </button>
            </div>
        </header>
    );
};

export default Header;
