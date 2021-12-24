import React from "react";
import { useSelector } from "react-redux";
import { getAuthState } from "../Features/AuthSlice";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { auth } = useSelector(getAuthState);
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoutes;
