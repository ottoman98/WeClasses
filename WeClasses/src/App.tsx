import NavBar from "./components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

import Dashboard from "./pages/Dashboard";
import Leaks from "./components/Leaks";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Leaks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
