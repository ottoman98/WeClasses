import { useContext } from "react";
import { DataContextSession } from "../context/session";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { cookie, decodedToken } = useContext(DataContextSession);
  console.log(decodedToken);
  if (!cookie) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoutes;
