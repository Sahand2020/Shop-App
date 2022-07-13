import React, { useReducer, createContext } from "react";

import allProducts from "../services/Data";

import { sendPrice, offerCode } from "../offer";

export const CartContext = createContext();

const initialState = {
    allProducts,
    favorites: [],
    cart: [],
    totalPrice: 0,
    totalPriceAfterOffer: 0,
    itemsCounter: 0,
    offerPrice: 0,
    totalPriceFinal: 0,
    isFavorite: false,
    isEnterOfferCode: false,
    offerMessage: "",
    checkout: false,
};

const sumItems = (items, isOffer) => {
    const itemsCounter = items.reduce(
        (total, product) => total + product.count,
        0
    );
    const totalPrice = items.reduce(
        (total, product) => total + product.price * product.count,
        0
    );
    if (isOffer) {
        const offerPrice = (totalPrice * offerCode.disCount) / 100;
        const totalPriceAfterOffer = totalPrice - offerPrice;

        return {
            totalPrice,
            itemsCounter,
            offerPrice,
            totalPriceAfterOffer,
            ...sumPriceWithSend(totalPrice, offerPrice),
        };
    } else {
        return { totalPrice, ...sumPriceWithSend(totalPrice) };
    }
};

const sumPriceWithSend = (totalPrice, offerPrice = 0) => {
    let totalPriceFinal = null;

    if (totalPrice - offerPrice <= 100) {
        totalPriceFinal = totalPrice + sendPrice - offerPrice;
    } else {
        totalPriceFinal = totalPrice - offerPrice;
    }

    return { totalPriceFinal };
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const hasProduct = state.cart.some(
                (product) => product.id === action.payload
            );
            if (!hasProduct) {
                const mainItem = state.allProducts.find(
                    (product) => product.id === action.payload
                );
                state.cart.push(mainItem);
            }
            return {
                ...state,
                ...sumItems(state.cart, state.isEnterOfferCode),
                checkout: false,
            };
        case "ADD_FAVORITE":
            state.allProducts.forEach((product) => {
                if (product.id === action.payload) {
                    product.isInterest = !product.isInterest;
                    state.favorites = allProducts.filter(
                        (product) => product.isInterest
                    );
                    state.isFavorite = !state.isFavorite;
                }
            });
            return {
                ...state,
            };
        case "REMOVE_ALL_FAVORITES":
            state.favorites = [];
            state.allProducts.forEach((product) => {
                product.isInterest = false;
            });
            return {
                ...state,
            };
        case "REMOVE_ITEM":
            const indexRemove = state.cart.findIndex(
                (product) => product.id === action.payload
            );
            state.cart[indexRemove].count = 1;
            state.cart = state.cart.filter(
                (product) => product.id !== action.payload
            );
            return {
                ...state,
                ...sumItems(state.cart, state.isEnterOfferCode),
            };
        case "INCREASE":
            const indexI = state.cart.findIndex(
                (product) => product.id === action.payload
            );
            state.cart[indexI].count++;
            return {
                ...state,
                ...sumItems(state.cart, state.isEnterOfferCode),
            };
        case "DECREASE":
            const indexD = state.cart.findIndex(
                (product) => product.id === action.payload
            );
            if (state.cart[indexD].count > 1) {
                state.cart[indexD].count--;
            }
            return {
                ...state,
                ...sumItems(state.cart, state.isEnterOfferCode),
            };
        case "CLEAR_ALL":
            state.cart = [];
            return {
                ...state,
                totalPrice: 0,
                totalPriceAfterOffer: 0,
                itemsCounter: 0,
                offerPrice: 0,
                totalPriceFinal: 0,
                isFavorite: false,
                isEnterOfferCode: false,
                checkout: false,
            };
        case "CHECKOUT":
            state.cart = [];
            return {
                ...state,
                totalPrice: 0,
                totalPriceAfterOffer: 0,
                itemsCounter: 0,
                offerPrice: 0,
                totalPriceFinal: 0,
                isFavorite: false,
                isEnterOfferCode: false,
                checkout: true,
            };
        case "REMOVE_CLASS":
            state.isFavorite = false;
            return {
                ...state,
            };
        case "OFFER_CODE":
            if (offerCode.code === action.payload) {
                state.isEnterOfferCode = true;
                state.offerMessage = "Offer Confirmed";
            } else {
                state.offerMessage = "Code is invalid";
            }
            return {
                ...state,
                ...sumItems(state.cart, state.isEnterOfferCode),
            };
        default:
            return state;
    }
};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
