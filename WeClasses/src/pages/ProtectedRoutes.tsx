import { useContext } from "react";
import { DataContextSession } from "../context/session";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { cookie } = useContext(DataContextSession);

  if (!cookie) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default ProtectedRoutes;
