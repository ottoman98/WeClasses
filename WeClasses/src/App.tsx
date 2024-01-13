import { Route, Routes, HashRouter } from "react-router-dom";

import { DataProvider } from "./context/session";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AllStories from "./components/AllStories";
import StoriesForm from "./components/StoriesForm";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import EditStory from "./components/EditStory";
import AllClasses from "./components/AllClasses";
import ClassesForm from "./components/partials/ClassesForm";
import EditClassesForm from "./components/partials/EditClassForm";

function App() {
  return (
    <>
      <DataProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            //TODO: LOGIN ROUTES
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
        </HashRouter>
      </DataProvider>
    </>
  );
}

export default App;
