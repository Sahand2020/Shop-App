import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

// Context
import { CartContext } from "../../contexts/CartContextProvider";

// Components
import CartItem from "./CartItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import ShippingPrice from "./ShippingPrice";

// Styles
import styles from "./Cart.module.css";

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    return (
        <div>
            <div className={styles.favorite_container_linkBar}>
                <div className={styles.favorite_linkBar}>
                    <Link to={"/"} className={styles.favorite_backLink}>
                        <HiArrowLeft />
                        Back to Products
                    </Link>
                    <span>Cart</span>
                </div>
                {state.cart.length > 0 && (
                    <div className={styles.favorite_linkBar}>
                        <div className={styles.free_send_title}>
                            <img
                                src="images/discount.png"
                                alt="discount"
                                className={styles.discount}
                            />
                            <span>Sending Fee above 100$ is free</span>
                        </div>
                    </div>
                )}
            </div>
            {state.cart.length > 0 ? (
                <div className={styles.cart_container}>
                    <div className={styles.cart_itemBox}>
                        {state.cart.map((product) => (
                            <CartItem key={product.id} {...product} />
                        ))}
                    </div>
                    <div className={styles.cart_priceBox}>
                        <OfferBadge />
                        <div className={styles.cart_price}>
                            <span>Total Price</span>
                            <span>|</span>
                            <span>{state.totalPrice.toLocaleString()} $</span>
                        </div>
                        {state.totalPriceAfterOffer > 0 && (
                            <div className={styles.cart_offer}>
                                <span>Price with discount </span>
                                <span>
                                    {state.totalPriceAfterOffer.toLocaleString()}{" "}
                                    $
                                </span>
                            </div>
                        )}
                        <Offer />
                        <ShippingPrice />
                        <div className={styles.cart_send}>
                            <span>Total amount payable : </span>
                            <span>
                                {state.totalPriceFinal.toLocaleString()} $
                            </span>
                        </div>
                        <button
                            onClick={() => dispatch({ type: "CHECKOUT" })}
                            className={styles.cart_button_buy}
                        >
                            Continue to Pay
                        </button>
                        <button
                            onClick={() => dispatch({ type: "CLEAR_ALL" })}
                            className={styles.cart_button_remove}
                        >
                            Clear {state.cart.length} products from cart
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.favorite_empty}>
                    <img
                        src="images/empty-cart.webp"
                        alt="empty"
                        className={styles.cart_empty_img}
                    />
                    <span className={styles.favorite_empty_title}>
                        Cart is Empty
                    </span>
                    {state.checkout && (
                        <div className={styles.checkout}>
                            <h2>Checked Out Successfully</h2>
                            <Link to="/">Buy More</Link>
                        </div>
                    )}

                    {!state.checkout && state.cart.length === 0 && (
                        <div className={styles.goToStore}>
                            <h2>Want to buy?</h2>
                            <Link to="/">Go to Store</Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
