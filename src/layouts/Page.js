import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";

const Page = () => {
  return (
    <>
      <Routes>
        <Route errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="admin/*" element={<AdminPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
};

export default Page;
