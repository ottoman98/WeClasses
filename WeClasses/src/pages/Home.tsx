import { Outlet } from "react-router-dom";
import NavBar from "../components/main/NavBar";
import Footer2 from "../components/main/Footer";

function Home() {
  return (
    <div className="font-main">
      <NavBar />
      <main className="max-w-[150rem]  mx-auto">
        <Outlet />
      </main>
      <Footer2 />
    </div>
  );
}

export default Home;
