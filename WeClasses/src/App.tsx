import NavBar from "./components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

import Dashboard from "./pages/Dashboard";
import Leaks from "./components/Leaks";
import UserRemainingForm from "./components/UserRemainingForm";
import { DataProvider } from "./context/session";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/contact" element={<Leaks />} />
            <Route path="/data/:id" element={<UserRemainingForm />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
