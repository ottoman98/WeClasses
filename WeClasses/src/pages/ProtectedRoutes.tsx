import { useContext, useEffect } from "react";
import { decodeToken } from "react-jwt";
import { DataContextSession } from "../context/session";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { cookie } = useContext(DataContextSession);
  const decoded: { level: string } | null = decodeToken(cookie as string);

  useEffect(() => {}, []);

  if (!cookie) {
    return <Navigate to="/login" />;
  } else {
    if (decoded) {
      if (decoded.level == "student") {
        return (
          <>
            <Outlet />
            <Navigate to="/profile/" />
          </>
        );
      }
      if (decoded.level == "teacher") {
        return (
          <>
            <Outlet />
            <Navigate to="/dashboard/" />
          </>
        );
      }
    }
  }
}

export default ProtectedRoutes;
