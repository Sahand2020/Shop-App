import React, { createContext, useReducer } from "react";
import allProducts from "../services/Data";

const initialState = {
    filteredItems: [...allProducts],
    searchKey: "",
};

const filteredItemsHandler = (key) => {
    const filteredItems = allProducts.filter((product) => {
        return product.category === key;
    });

    return { filteredItems };
};

const filterReduce = (state, action) => {
    switch (action.type) {
        case "SEARCH_KEYWORD":
            state.searchKey = action.payload;
            return {
                ...state,
            };
        case "ALL":
            state.filteredItems = [...allProducts];
            return {
                ...state,
            };
        case "PIZZA":
            return {
                ...filteredItemsHandler("Pizza"),
            };
        case "BURGER":
            return {
                ...filteredItemsHandler("Burger"),
            };
        default:
            return state;
    }
};

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReduce, initialState);

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterContextProvider;
