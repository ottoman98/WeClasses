import { Outlet } from "react-router-dom";
import AsideProfile from "../components/AsideProfile";
import NavBarProfile from "../components/NavBarProfile";

function Dashboard() {
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
