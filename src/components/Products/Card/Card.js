import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { FiShoppingCart } from "react-icons/fi";

// Components
import Interest from "./Interest";

// Context
import { CartContext } from "../../../contexts/CartContextProvider";

// Styles
import styles from "./Card.module.css";

const Card = (props) => {
    const { dispatch } = useContext(CartContext);

    const [isAddToCart, setIsAddToCart] = useState(false);
    const handleClick = () => {
        dispatch({ type: "ADD_ITEM", payload: props.id });
        setIsAddToCart(true);

        setTimeout(() => {
            setIsAddToCart(false);
        }, 1000);
    };

    return (
        <div key={props.id} className={styles.box}>
            <Link to={`/${props.id}`}>
                <div className={styles.img_container}>
                    <img
                        src={props.image}
                        alt="product"
                        className={styles.products_img}
                    />
                </div>
            </Link>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>
                        <Link to={`/${props.id}`}>{props.title} </Link>
                    </span>
                </div>
                <div className={styles.price}>
                    <span>{props.price.toLocaleString()} $</span>
                </div>
                <button
                    onClick={handleClick}
                    className={`${styles.products_button} ${
                        isAddToCart ? styles.add_button : styles.buy_button
                    }`}
                >
                    {isAddToCart ? "Item Added" : "Buy"}
                    <FiShoppingCart className={styles.buy_icon} />
                </button>
            </div>

            <Interest
                interest={props.isInterest}
                id={props.id}
                key={props.id}
            />
        </div>
    );
};

export default Card;
