import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      AAAA
      <Outlet />
    </>
  );
}

export default Home;
