import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../context/Context";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(Context);
  return user && user.access_token ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
