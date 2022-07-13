import { Route, Routes, Navigate } from "react-router-dom";

// Context
import CartContextProvider from "./contexts/CartContextProvider";
import FilterContextProvider from "./contexts/FilterContextProvider";

// Components
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import FavoritePage from "./components/Favorite/FavoritePage";

function App() {
    return (
        <CartContextProvider>
            <FilterContextProvider>
                <Header />
                <Routes id="theme">
                    <Route path="/" element={<Products />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                    <Route path="/:id" element={<Details />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorite" element={<FavoritePage />} />
                </Routes>
            </FilterContextProvider>
        </CartContextProvider>
    );
}

export default App;
