import classes from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={classes.footer}>
            <div>Labels: </div>
            <div>
                <div
                    className={classes.colorBox}
                    style={{
                        backgroundColor: "#ffff2a",
                    }}
                ></div>
                <span>Comparing</span>
            </div>
            <div>
                <div
                    className={classes.colorBox}
                    style={{
                        backgroundColor: "red",
                    }}
                ></div>
                <span>Swapping</span>
            </div>
            <div>
                <div
                    className={classes.colorBox}
                    style={{
                        backgroundColor: "#078912",
                    }}
                ></div>
                <span>Sorted</span>
            </div>
        </footer>
    );
};

export default Footer;
