import React, { useContext } from "react";

// Contexts
import { FilterContext } from "../../contexts/FilterContextProvider";

// Components
import Card from "./Card/Card";
import Filter from "./Filter/Filter";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";

// Styles
import styles from "./Product.module.css";

const Products = () => {
    const { state } = useContext(FilterContext);

    const productList = state.filteredItems.filter((product) => {
        return product.title.includes(state.searchKey) || !state.searchKey;
    });

    return (
        <>
            <div className={styles.welcome}>
                <div className={styles.welcomeText}>
                    <span>Welcome To FastFood Shop</span>
                    <p>It's not Just Food, It's an Experience</p>
                    <a href="#foods" className={styles.guide}>
                        <button>Start To Buy</button>
                    </a>
                </div>
                <img src="images/12.png" alt="welcome" />
            </div>
            <div className={styles.search_header_small}>
                <SearchBar />
            </div>
            <Filter />
            <div className={styles.product_container} id="foods">
                {productList.length > 0 ? (
                    productList.map((product) => (
                        <Card key={product.id} {...product} />
                    ))
                ) : (
                    <div className={styles.not_products}>
                        <img
                            src=""
                            alt=""
                            className={styles.products_empty_img}
                        />
                        <span className={styles.products_empty_title}>
                            NO Match!{" "}
                        </span>
                        <span className={styles.products_empty_guide}>
                            Try again
                        </span>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Products;
