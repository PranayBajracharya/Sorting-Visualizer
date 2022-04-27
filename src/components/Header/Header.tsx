import React from "react";
import classes from "./Header.module.css";

const Header: React.FC<{
    setStart: () => void;
    randomize: () => void;
    speed: number;
    setSpeed: (number: number) => void;
}> = (props) => {
    const { setStart, randomize, speed, setSpeed } = props;

    const speedHandler = (event: any) => {
        setSpeed(event.target.valueAsNumber);
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
                        min="10"
                        max="100"
                        value={speed}
                        onChange={speedHandler}
                    />
                </div>
                <button onClick={randomize}>Randomize Array</button>
                <button onClick={setStart}>Start Sorting</button>
            </div>
        </header>
    );
};

export default Header;
