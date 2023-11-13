import NavBar from "./components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

import Dashboard from "./pages/Dashboard";
import Leaks from "./components/Leaks";
import UserRemainingForm from "./components/UserRemainingForm";
import { DataProvider } from "./context/session";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import StoriesForm from "./components/StoriesForm";
import AllStories from "./components/AllStories";
import EditStory from "./components/editStory";

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
              <Route path="/classes" element={<StoriesForm />} />
              <Route path="/allStories" element={<AllStories />} />
              <Route path="/editstory/:id" element={<EditStory />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
