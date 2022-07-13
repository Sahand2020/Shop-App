import React, { useContext } from "react";

// Context
import { FilterContext } from "../../../contexts/FilterContextProvider";

// Styles
import styles from "./Filter.module.css";

const Filter = () => {
    const { dispatch } = useContext(FilterContext);
    return (
        <div className={styles.filter_container}>
            <div className={styles.filter_btnBox}>
                <button
                    onClick={() => dispatch({ type: "ALL" })}
                    className={styles.filter_btn}
                >
                    All
                </button>
                <button
                    onClick={() => dispatch({ type: "PIZZA" })}
                    className={styles.filter_btn}
                >
                    Pizza
                </button>
                <button
                    onClick={() => dispatch({ type: "BURGER" })}
                    className={styles.filter_btn}
                >
                    Burger
                </button>
            </div>
        </div>
    );
};

export default Filter;
