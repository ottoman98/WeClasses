import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      22
      <Outlet />
    </>
  );
}

export default Home;
