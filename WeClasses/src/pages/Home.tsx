import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <Link to="/user/12323">link</Link>
      <Outlet />
    </>
  );
}

export default Home;
