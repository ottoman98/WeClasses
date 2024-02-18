import { Outlet } from "react-router-dom";
import NavBar from "../components/main/NavBar";
import Footer2 from "../components/main/Footer";

function Home() {
  return (
    <div className="font-main text-xs  text-slate-500">
      <NavBar />
      <main className="max-w-[80rem]  mx-auto">
        <Outlet />
      </main>
      <Footer2 />
    </div>
  );
}

export default Home;
