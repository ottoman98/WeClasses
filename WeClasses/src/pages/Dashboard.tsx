import { Outlet } from "react-router-dom";
import AsideProfile from "../components/dashboard/teacher/AsideProfile";
import NavBarProfile from "../components/dashboard/NavBarProfile";
import { useContext } from "react";
import { DataContextSession } from "../context/session";

function Dashboard() {
  const { decodedToken } = useContext(DataContextSession);
  console.log(decodedToken);
  return (
    <>
      <NavBarProfile />
      <div className=" flex">
        <AsideProfile />
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
