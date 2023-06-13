import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../context/Context";

const PublicRoute = ({ children }) => {
  const { user } = useContext(Context);
  return user && user.access_token ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
