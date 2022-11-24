import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const permission = false;

const AdminPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          permission ? (
            <h1>Witaj na stronie Admina!</h1>
          ) : (
            <Navigate replace to="/login" />
          )
        }
      />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AdminPage;
