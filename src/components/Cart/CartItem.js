import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../../contexts/CartContextProvider";

// Components
import Buttons from "../Buttons/Buttons";

// Styles
import styles from "./CartItem.module.css";

const CartItem = (props) => {
    const { dispatch } = useContext(CartContext);

    return (
        <div key={props.id} className={styles.cart_item}>
            <Link to={`/${props.id}`} className={styles.cart_link}>
                <div className={styles.cart_img}>
                    <img src={props.image} alt="cart-Item" />
                </div>
                <div className={styles.cart_content}>
                    <span className={styles.cart_title}>{props.title}</span>
                    <span>
                        {(props.price * props.count).toLocaleString()} $
                    </span>
                </div>
            </Link>
            <div className={styles.cart_counter}>
                <Buttons key={props.id} {...props}/>
            </div>
            <GrClose
                onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: props.id })
                }
                className={styles.cart_remove}
            />
        </div>
    );
};

export default CartItem;
