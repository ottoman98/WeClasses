import { Route, Routes, HashRouter } from "react-router-dom";

import { DataProviderSession } from "./context/session";

import Home from "./pages/Home";
import Dashboard from "./components/dashboard/teacher/Dashboard";
import AllStories from "./components/dashboard/teacher/AllStories";
import StoriesForm from "./components/dashboard/teacher/StoriesForm";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import EditStory from "./components/dashboard/teacher/EditStory";
import AllClasses from "./components/dashboard/teacher/AllClasses";
import ClassesForm from "./components/dashboard/teacher/ClassesForm";
import EditClassesForm from "./components/dashboard/teacher/EditClassForm";
import Main from "./components/main/Main";
import Register from "./components/auth/Register";
import UserRemainingForm from "./components/auth/UserRemainingForm";
import Login from "./components/auth/Login";
import { DataProviderLanguage } from "./context/language";
import Profile from "./components/dashboard/student/Profile";
//import PrivilegesRoutes from "./pages/PrivilegesRoutes";

function App() {
  return (
    <>
      <DataProviderSession>
        <DataProviderLanguage>
          <HashRouter>
            <Routes>
              <Route element={<Home />}>
                <Route path="/" element={<Main />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user/:id" element={<UserRemainingForm />} />
                <Route path="/login" element={<Login />} />
              </Route>
              //*LOGIN ROUTES
              <Route element={<ProtectedRoutes />}>
                //*STUDENTS ROUTES
                <Route path="/profile" element={<Profile />}>
                  <Route path="/profile/resume" element={<>identic</>} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />}>
                  //*TEACHER ROUTES
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
        </DataProviderLanguage>
      </DataProviderSession>
    </>
  );
}

export default App;
