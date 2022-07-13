import React, { useContext } from "react";

// Styles
import styles from "./SearchBar.module.css";

// Icons
import { FiSearch } from "react-icons/fi";

// Context
import { FilterContext } from "../../contexts/FilterContextProvider";

const SearchBar = () => {
    const { dispatch } = useContext(FilterContext);

    const searchKeywordHandler = (e) => {
        dispatch({ type: "SEARCH_KEYWORD", payload: e.target.value });
    };

    return (
        <div className={styles.searchBar_box}>
            <input
                type="text"
                onChange={(e) => searchKeywordHandler(e)}
                placeholder="Search"
            />
            <button>
                <FiSearch />
            </button>
        </div>
    );
};

export default SearchBar;
