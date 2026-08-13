import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";

function ProtectedRoute({ isAuthenticated }) {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
