import { Outlet } from "react-router-dom";
import NavBar from "../components/main/NavBar";
import Footer2 from "../components/main/Footer";

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
