import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// Icons
import { AiOutlineShopping } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

// Context
import { CartContext } from "../../contexts/CartContextProvider";

// Components
import SearchBar from "../SearchBar/SearchBar";

// Styles
import styles from "./Header.module.css";

const Header = () => {
    const { state } = useContext(CartContext);

    const location = useLocation();
    const { pathname } = location;

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to={"/"} className={styles.logo}>
                    Fast Food
                </Link>
                <div className={styles.search_header}>
                    {pathname === "/" && <SearchBar />}
                </div>

                <div className={styles.icon_Shopping_box}>
                    <Link to={"/cart"} className={styles.shop_icon_box}>
                        <AiOutlineShopping className={styles.shop_icon} />
                        {state.cart.length > 0 && (
                            <span className={styles.badge_shop}>
                                {state.cart.length}
                            </span>
                        )}
                    </Link>
                    <Link
                        to={"/favorite"}
                        className={`${styles.mark_icon_box} ${
                            state.isFavorite ? styles.tada : ""
                        }`}
                    >
                        <BsFillBookmarkHeartFill className={styles.mark_icon} />
                        {state.favorites.length > 0 && (
                            <span className={styles.badge_mark}>
                                {state.favorites.length}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
