import React, { useState, useContext } from "react";

// Context
import { CartContext } from "../../contexts/CartContextProvider";

// Styles
import styles from "./Offer.module.css"

const Offer = () => {
    const [offerInput, setOfferInput] = useState("");
    const [clickButton, setClickButton] = useState(false);
    const { state, dispatch } = useContext(CartContext);

    const inputHandler = (event) => {
        setOfferInput(event.target.value);
    };

    const checkOfferCode = () => {
        if (offerInput) {
            setClickButton(true);
            dispatch({ type: "OFFER_CODE", payload: offerInput });
        }
    };

    return (
        <div className={styles.offer_container}>
            <span>Do you have offer code?</span>
            <div className={styles.offer_box}>
                <input
                    type="text"
                    value={offerInput}
                    onChange={(event) => inputHandler(event)}
                    disabled={state.isEnterOfferCode}
                    placeholder="offer code : WXYZ"
                />
                <button
                    onClick={checkOfferCode}
                    disabled={state.isEnterOfferCode}
                >
                    Confirm
                </button>
            </div>
            {clickButton &&
                state.isEnterOfferCode && (<span className={styles.offer_true}>{state.offerMessage}</span>)}
            {clickButton &&
                !state.isEnterOfferCode && (<span className={styles.offer_false}>{state.offerMessage}</span>)}
        </div>
    );
};

export default Offer;
