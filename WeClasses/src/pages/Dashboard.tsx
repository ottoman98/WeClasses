import { Outlet } from "react-router-dom";
import AsideProfile from "../components/AsideProfile";
import NavBarProfile from "../components/NavBarProfile";

function Dashboard() {
  return (
    <>
      <NavBarProfile />
      <AsideProfile />
      <Outlet />
    </>
  );
}

export default Dashboard;
