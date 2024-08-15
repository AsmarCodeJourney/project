import React, { useContext } from "react";
import { TokenContext } from "../context/TokenProvider";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { decoded } = useContext(TokenContext);
  return decoded.role === "Admin" ? <Outlet /> : <Navigate to={"*"} />;
}

export default PrivateRoute;
