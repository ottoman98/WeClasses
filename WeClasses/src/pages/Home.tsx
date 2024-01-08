import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vitae
        soluta ut nobis vel quasi fugiat aliquid repellat dolores, adipisci
        itaque quae nesciunt voluptas alias cupiditate, consequuntur iusto
        repellendus deserunt.
      </p>

      <Outlet />
    </>
  );
}

export default Home;
