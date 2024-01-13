import { Outlet } from "react-router-dom";
import NavBar from "../components/v1/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Home;
