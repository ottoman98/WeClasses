import { Outlet } from "react-router-dom";
import NavBarProfile from "../NavBarProfile";
import AsideProfile from "./AsideProfile";

function Profile() {
  return (
    <>
      <NavBarProfile />
      <AsideProfile />
      <Outlet />
    </>
  );
}

export default Profile;
