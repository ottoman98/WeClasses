import { Outlet } from "react-router-dom";
import NavBar from "../components/v1/NavBar";
import Footer2 from "../components/v1/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <main className="max-w-[150rem]  mx-auto">
        <Outlet />
      </main>
      <Footer2 />
    </>
  );
}

export default Home;
