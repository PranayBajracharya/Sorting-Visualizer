import React from "react";

import Bar from "../Bar/Bar";
import classes from "./Main.module.css";

const Main: React.FC<{
    sortingArray: number[];
    comparing: Array<number | null>;
    swapping: Array<number | null>;
    sorted: number[];
    length: number;
}> = (props) => {
    const { sortingArray, comparing, swapping, sorted, length } = props;
    return (
        <>
            <div className={classes.main}>
                {sortingArray.map((arrayItem, index) => {
                    let color: string = "#F2ECFF";

                    if (comparing.includes(index)) {
                        color = "#ffff2a";
                    }

                    if (swapping.includes(index)) {
                        color = "red";
                    }

                    if (sorted.includes(index)) {
                        color = "#078912";
                    }
                    return (
                        <Bar
                            key={index}
                            arrayItem={arrayItem}
                            color={color}
                            length={length}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Main;
