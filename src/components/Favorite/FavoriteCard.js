import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../../contexts/CartContextProvider";

// Styles
import styles from "./FavoriteCard.module.css";

const FavoriteCard = (props) => {
    const { dispatch } = useContext(CartContext);
    return (
        <div className={styles.favorite_card}>
            <Link to={`/${props.id}`}>
                <div className={styles.favorite_img_container}>
                    <img
                        src={props.image}
                        alt="favorite"
                        className={styles.favorite_img}
                    />
                </div>
            </Link>
            <div className={styles.favorite_content}>
                <div className={styles.favorite_title}>
                    <span>{props.title}</span>
                </div>
                <button
                    onClick={() =>
                        dispatch({ type: "ADD_FAVORITE", payload: props.id })
                    }
                    className={styles.favorite_button}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default FavoriteCard;
