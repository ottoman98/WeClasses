import { useContext } from "react";
import { DataContext } from "../context/session";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { cookie } = useContext(DataContext);

  if (!cookie) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default ProtectedRoutes;
