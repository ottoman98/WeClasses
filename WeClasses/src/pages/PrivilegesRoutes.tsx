import { useContext } from "react";
import { DataContextSession } from "../context/session";
import { Navigate, Outlet } from "react-router-dom";
import { sessionCookie } from "../types/cookies";

function PrivilegesRoutes() {
  const { decodedToken } = useContext(DataContextSession);

  if ((decodedToken as sessionCookie).level === "student") {
    return (
      <>
        <Navigate to="/profile/resume" />
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        <Navigate to="/dashboard/resume" />
        <Outlet />
      </>
    );
  }
}

export default PrivilegesRoutes;
