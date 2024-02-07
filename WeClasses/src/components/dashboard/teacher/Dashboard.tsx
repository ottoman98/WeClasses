import { Outlet } from "react-router-dom";
import AsideProfile from "./AsideProfile";
import NavBarProfile from "../NavBarProfile";

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
