import classes from "./Bar.module.css";

const Bar: React.FC<{ arrayItem: number; color: string }> = (props) => {
    return (
        <div className={classes.barDiv}>
            <div
                className={classes.bar}
                style={{
                    height: `${props.arrayItem}vh`,
                    backgroundColor: props.color,
                }}
            ></div>
            <div className={classes.number}>{props.arrayItem}</div>
        </div>
    );
};

export default Bar;
