import React, { useContext } from "react";

// Icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// Context
import { CartContext } from "../../contexts/CartContextProvider";

// Styles
import styles from "./Buttons.module.css";

const Buttons = (props) => {
    const { dispatch } = useContext(CartContext);
    return (
        <div key={props.id} className={styles.cart_buttons}>
            <span
                onClick={() =>
                    dispatch({ type: "DECREASE", payload: props.id })
                }
                className={styles.cart_minus}
            >
                <AiOutlineMinus />
            </span>
            <span className={styles.counter_number}>{props.count}</span>
            <span
                onClick={() =>
                    dispatch({ type: "INCREASE", payload: props.id })
                }
                className={styles.cart_plus}
            >
                <AiOutlinePlus />
            </span>
        </div>
    );
};

export default Buttons;
