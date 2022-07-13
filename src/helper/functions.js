const isInCart = (state, id) => {
    const result = state.cart.find((item) => item.id === id);
    return result;
};

// const countCount = (state, id) => {
//     const index = state.cart.findIndex((item) => item.id === id);
//     if (index === -1) {
//         return false;
//     } else {
//         return state.cart[index].count;
//     }
// };

export { isInCart};
