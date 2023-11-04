import NavBar from "./components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Dashboard from "./pages/dasboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
