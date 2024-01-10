import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  console.log(import.meta.env.VITE_URL);
  return (
    <>
      <NavBar />
      AAAA
      <Outlet />
    </>
  );
}

export default Home;
