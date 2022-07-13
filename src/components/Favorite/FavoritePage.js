import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import FavoriteCard from "./FavoriteCard";

// Context
import { CartContext } from "../../contexts/CartContextProvider";

// Styles
import styles from "./FavoritePage.module.css"

const FavoritePage = () => {
    const { state, dispatch } = useContext(CartContext);
    return (
        <>
            <div className={styles.favorite_container_linkBar}>
                <div className={styles.favorite_linkBar}>
                    <Link to={"/"} className={styles.favorite_backLink}>
                        <HiArrowLeft className={styles.backIcon}/>
                        Back to Products
                    </Link>
                    <span>Favorites</span>
                </div>
            </div>
            <div className={styles.favorite_wrapper}>
                {state.favorites.length > 0 ? (
                    <>
                        <div className={styles.favorite_remove_container}>
                            <button
                                onClick={() =>
                                    dispatch({ type: "REMOVE_ALL_FAVORITES" })
                                }
                                className={styles.favorite_removeAll}
                            >
                                Remove All
                            </button>
                        </div>
                        <div className={styles.favorite_container}>
                            {state.favorites.map((product) => (
                                <FavoriteCard key={product.id} {...product} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={styles.favorite_empty}>
                        <img src="images/favorites_empty.webp" alt="favorites empty" className={styles.favorite_empty_img}/>
                        <span className={styles.favorite_empty_title}>favorites are empty</span>
                    </div>
                )}
            </div>
        </>
    );
};

export default FavoritePage;
