import React, { useContext } from "react";

// Icons
import { BsHeart, BsHeartFill } from "react-icons/bs";

// Context
import { CartContext } from "../../../contexts/CartContextProvider";

// Styles
import styles from "./Interest.module.css";

const Interest = (props) => {
    const { state, dispatch } = useContext(CartContext);
    const isAddFavorite = state.allProducts.find(
        (product) => product.id === props.id
    );

    return (
        <div
            onClick={() =>
                dispatch({ type: "ADD_FAVORITE", payload: props.id })
            }
            className={styles.interest}
            key={props.id}
        >
            {isAddFavorite.isInterest ? (
                <BsHeartFill className={styles.heart_fill} />
            ) : (
                <BsHeart className={styles.heart} />
            )}
        </div>
    );
};

export default Interest;
