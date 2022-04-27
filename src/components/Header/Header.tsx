import React from "react";
import classes from "./Header.module.css";

const Header: React.FC<{ setStart: () => void; }> = (props) => {

    return <header className={classes.header}>
        <h1>Sorting Visualizer</h1>
        <button onClick={props.setStart}>Start Sorting</button>
    </header>;
};

export default Header;
