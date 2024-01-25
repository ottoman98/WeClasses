import { Outlet } from "react-router-dom";
import NavBar from "../components/v1/NavBar";
import Footer2 from "../components/v1/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer2 />
    </>
  );
}

export default Home;
