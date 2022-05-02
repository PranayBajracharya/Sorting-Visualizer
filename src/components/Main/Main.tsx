import React, { useState, useEffect, useRef } from "react";
import { MdOutlineTimer } from "react-icons/md";

import Bar from "../Bar/Bar";
import classes from "./Main.module.css";

const Main: React.FC<{
    sortingArray: number[];
    comparing: Array<number | null>;
    swapping: Array<number | null>;
    sorted: number[];
    length: number;
    isSorting: boolean;
}> = (props) => {
    const timerRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [timer, setTimer] = useState<number>(0);
    const { sortingArray, comparing, swapping, sorted, length, isSorting } =
        props;

    useEffect(() => {
        const startTime = new Date().getTime();
        if (isSorting) {
            timerRef.current = setInterval(() => {
                setTimer(new Date().getTime() - startTime);
            });
        } else {
            clearInterval(timerRef.current as NodeJS.Timeout);
        }
    }, [isSorting]);

    return (
        <>
            <div className={classes.timer}>
                <MdOutlineTimer />
                <span>{(timer / 1000).toFixed(3)}s</span>
            </div>
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
