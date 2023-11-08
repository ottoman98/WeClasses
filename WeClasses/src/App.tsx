import NavBar from "./components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Dashboard from "./pages/Dashboard";
import Leaks from "./components/Leaks";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Leaks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaks" element={<Leaks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
