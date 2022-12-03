import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProductPage } from "../Components/ProductPage";
import { ProductDetailsPage } from "../Components/ProductDetailsPage";
import { CartPage } from "../Components/CartPage";
import { OrderPage } from "../Components/OrderPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
