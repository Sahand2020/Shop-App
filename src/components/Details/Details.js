/* eslint-disable eqeqeq */
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Icons
import { HiArrowLeft } from "react-icons/hi";

// Components
import Buttons from "../Buttons/Buttons";

// Context
import { CartContext } from "../../contexts/CartContextProvider";

// Styles
import styles from "./Details.module.css"

const Details = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(CartContext);
    const params = useParams();
    const data = state.allProducts.find((product) => product.id == params.id);
    const checkCart = state.cart.some((product) => product.id == params.id);

    return (
        <div className={styles.details_container}>
            <div className={styles.details_linkBar}>
                <span onClick={() => navigate(-1)} className={styles.details_backLink}>
                    <HiArrowLeft />
                    Back
                </span>
                <span>Details</span>
            </div>
            <div className={styles.details_card}>
                <div className={styles.image_box}>
                    <img src={data.image} alt="card" className={styles.card_image} />
                </div>
                <div className={styles.main_content_box}>
                    <span className={styles.card_category}>{data.category}</span>
                    <div className={styles.card_content}>
                        <span className={styles.card_title}>{data.title}</span>
                        <span> | </span>
                        <span className={styles.card_price}>{data.price.toLocaleString()} $</span>
                    </div>
                    <div className={styles.card_information}>
                        <ul>
                            <li>Recipe :</li>
                            <li>Size :</li>
                        </ul>
                    </div>
                    {checkCart && <Buttons {...data} />}
                    {!checkCart && (
                        <button
                            onClick={() =>
                                dispatch({ type: "ADD_ITEM", payload: data.id })
                            }
                            className={styles.card_buy}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;

