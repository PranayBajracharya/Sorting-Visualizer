import React from "react";
import classes from "./Header.module.css";

const Header: React.FC<{ setStart: () => void; randomize: () => void; }> = (props) => {

    const {setStart, randomize} = props;
    return <header className={classes.header}>
        <h1>Sorting Visualizer</h1>
        <div>
            <button onClick={randomize}>Randomize Array</button>
            <button onClick={props.setStart}>Start Sorting</button>
        </div>
    </header>;
};

export default Header;
