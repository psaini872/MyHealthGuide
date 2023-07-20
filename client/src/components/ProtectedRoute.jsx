import React from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/appContext.js";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/register" />;
  }
  return (
    <>
      <div>{children}</div>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
