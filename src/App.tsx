import { Route, Routes, HashRouter } from "react-router-dom";
import { DataProviderSession } from "./context/session";
import Home from "./pages/Home";
import Dashboard from "./components/dashboard/teacher/Dashboard";
import ProtectedRoutes from "./pages/ProtectedRoutes";
//import Main from "./components/main/Main";
import Register from "./components/auth/RegisterStudent";
import UserRemainingForm from "./components/auth/UserRemainingForm";
import Login from "./components/auth/Login";
import { DataProviderLanguage } from "./context/language";
import Profile from "./components/dashboard/student/Profile";
import Recover from "./components/auth/Recover";
import ChangePassword from "./components/auth/ChangePassword";
import { DataProviderTabs } from "./context/studentsTab";
import RegisterTeachers from "./components/auth/RegisterTeachers";
import ClassesList from "./components/classes/ClassesList";
import TeacherRemainingForm from "./components/auth/TeacherRemainingForm";
import TeacherInfo from "./components/descriptions/TeacherInfo";
import ClassInfo from "./components/descriptions/ClassInfo";
import RegisterSuccess from "./pages/RegisterSuccess";
import ClassPayments from "./components/classes/ClassPayments";
import CompleteRegister from "./pages/CompleteRegister";
import RegisterSuccessTeacher from "./pages/RegisterSuccessTeacher";
import AdmissionTeacher from "./pages/AdmissionTeacher";
import { DataProviderTabsSettings } from "./context/settings/settings";
import Panel from "./components/dashboard/admin/Panel";
import NotFound from "./pages/NotFound";
import Main from "./components/v3/main/Main";
import StoriesMain from "./components/stories/StoriesMain";
import Story from "./components/stories/Story";
import AllStories from "./components/stories/AllStories";
import { DataProviderStoriesLanguage } from "./context/stories/storiesLanguage";

function App() {
  return (
    <>
      <DataProviderSession>
        <DataProviderLanguage>
          <DataProviderTabs>
            <DataProviderStoriesLanguage>
              <DataProviderTabsSettings>
                <HashRouter>
                  <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/checkout/:id" element={<ClassPayments />} />
                    <Route
                      path="/register/:name"
                      element={<RegisterSuccess />}
                    />
                    <Route
                      path="/registerTeacher/:name"
                      element={<RegisterSuccessTeacher />}
                    />
                    <Route path="/admission/" element={<AdmissionTeacher />} />
                    <Route
                      path="/registerComplete/:name"
                      element={<CompleteRegister />}
                    />
                    <Route element={<Home />}>
                      <Route element={<StoriesMain />}>
                        <Route path="/story/:id" element={<Story />} />
                        <Route path="/stories" element={<AllStories />} />
                      </Route>
                      <Route path="/" element={<Main />} />
                      <Route path="/register" element={<Register />} />
                      <Route
                        path="/register_tutor"
                        element={<RegisterTeachers />}
                      />
                      <Route path="/user/:id" element={<UserRemainingForm />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/recover" element={<Recover />} />
                      <Route path="/recover/:id" element={<ChangePassword />} />
                      <Route
                        path="/tutor_info/:id"
                        element={<TeacherRemainingForm />}
                      />
                      <Route path="/classes" element={<ClassesList />} />
                      <Route path="/teacher/:id" element={<TeacherInfo />} />
                      <Route path="/class/:id" element={<ClassInfo />} />
                    </Route>
                    //*LOGIN ROUTES
                    <Route element={<ProtectedRoutes />}>
                      //*STUDENTS ROUTES
                      <Route path="/profile" element={<Profile />} />
                      //*TEACHER ROUTES
                      <Route path="/dashboard" element={<Dashboard />} />
                      //*ADMIN ROUTES
                      <Route path="/admin" element={<Panel />} />
                    </Route>
                  </Routes>
                </HashRouter>
              </DataProviderTabsSettings>
            </DataProviderStoriesLanguage>
          </DataProviderTabs>
        </DataProviderLanguage>
      </DataProviderSession>
    </>
  );
}

export default App;
