import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import AboutUs from '../components/common/AboutUs';
import ContactUs from '../components/common/ContactUs';

const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/ContactUs" element={<ContactUs/>} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;
