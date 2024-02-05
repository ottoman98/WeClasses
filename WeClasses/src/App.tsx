import { Route, Routes, HashRouter } from "react-router-dom";

import { DataProviderSession } from "./context/session";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AllStories from "./components/AllStories";
import StoriesForm from "./components/StoriesForm";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import EditStory from "./components/EditStory";
import AllClasses from "./components/AllClasses";
import ClassesForm from "./components/partials/ClassesForm";
import EditClassesForm from "./components/partials/EditClassForm";
import Main from "./components/v1/pages/Main";
import Register from "./components/Register";
import UserRemainingForm from "./components/UserRemainingForm";
import Login from "./components/Login";
import { DataProviderLanguage } from "./context/language";

function App() {
  return (
    <>
      <HashRouter>
        <DataProviderLanguage defaultLanguage="english">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user/:id" element={<UserRemainingForm />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </DataProviderLanguage>
        <DataProviderSession>
          //TODO: LOGIN ROUTES
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/resume" element={<>Stats</>} />
                <Route path="/dashboard/stories" element={<AllStories />} />
                <Route path="/dashboard/story" element={<StoriesForm />} />
                <Route path="/dashboard/story/:id" element={<EditStory />} />
                <Route path="/dashboard/classes" element={<AllClasses />} />
                <Route path="/dashboard/addclass" element={<ClassesForm />} />
                <Route
                  path="/dashboard/editclass/:id"
                  element={<EditClassesForm />}
                />
              </Route>
            </Route>
          </Routes>
        </DataProviderSession>
      </HashRouter>
    </>
  );
}

export default App;
