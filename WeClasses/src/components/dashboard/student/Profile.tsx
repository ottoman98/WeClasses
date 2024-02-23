import { Outlet } from "react-router-dom";

import AsideProfile from "./AsideProfile";
import NavBarProfileStudent from "./NavbarProfileStudent";

function Profile() {
  return (
    <>
      <NavBarProfileStudent />
      <AsideProfile />
      <Outlet />
    </>
  );
}

export default Profile;
