import React, { useContext } from "react";
import { sendPrice } from "../../offer";

// Context
import { CartContext } from "../../contexts/CartContextProvider";

// Styles
import styles from "./ShippingPrice.module.css";

const SendProducts = () => {
    const { state } = useContext(CartContext);
    return (
        <div className={styles.send_products}>
            <div className={styles.send_info_price}>
                <span>Shipping Fee </span>
                <span> | </span>
                <span>
                    {state.totalPrice - state.offerPrice <= 100
                        ? `${sendPrice.toLocaleString()} $`
                        : "Free"}
                </span>
            </div>
            {state.totalPrice - state.offerPrice > 100 && (
                <div>
                    <img
                        src="images/free.jpg"
                        alt="free"
                        className={styles.send_free_image}
                    />
                </div>
            )}
        </div>
    );
};

export default SendProducts;
