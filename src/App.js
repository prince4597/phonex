import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Cart from "./components/Cart/Cart";
import AppContext from "./utils/context";
import { useEffect } from "react";
import axios from "axios";


function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:category" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;