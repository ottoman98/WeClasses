import { Route, Routes, HashRouter } from "react-router-dom";

import { DataProvider } from "./context/session";

import Leaks from "./components/Leaks";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AllStories from "./components/AllStories";
import Login from "./components/Login";
import EditStory from "./components/EditStory";
import StoriesForm from "./components/StoriesForm";
import ClientStories from "./components/ClientStories";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import AllClasses from "./components/AllClasses";
import StoryBody from "./components/StoryBody";
import UserRemainingForm from "./components/UserRemainingForm";

function App() {
  return (
    <>
      <DataProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/leaks" element={<Leaks />} />
              <Route path="/story/:language" element={<ClientStories />} />
              <Route path="/story/:language/:id" element={<StoryBody />} />
              <Route path="/user/:id" element={<UserRemainingForm />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/resume" element={<>Stats</>} />
                <Route path="/dashboard/stories" element={<AllStories />} />
                <Route path="/dashboard/story" element={<StoriesForm />} />
                <Route path="/dashboard/story/:id" element={<EditStory />} />
                <Route path="/dashboard/classes" element={<AllClasses />} />
              </Route>
            </Route>
          </Routes>
        </HashRouter>
      </DataProvider>
    </>
  );
}

export default App;
