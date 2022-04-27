import classes from "./Bar.module.css";

const Bar: React.FC<{ arrayItem: number; color: string; length: number; }> = (props) => {
    const { arrayItem, color, length } = props;

    return (
        <div className={classes.barDiv}>
            <div
                className={classes.bar}
                style={{
                    height: `${arrayItem / length * 100}%`,
                    backgroundColor: color,
                }}
            ></div>
            <div className={classes.number}>{arrayItem}</div>
        </div>
    );
};

export default Bar;
