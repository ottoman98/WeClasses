import { Route, Routes, HashRouter } from "react-router-dom";
import { DataProviderSession } from "./context/session";
import Home from "./pages/Home";
import Dashboard from "./components/dashboard/teacher/Dashboard";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Main from "./components/main/Main";
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
import SetPassword from "./components/auth/PasswordTeacher";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import TeacherInfo from "./components/descriptions/TeacherInfo";
import ClassInfo from "./components/descriptions/ClassInfo";

import RegisterSuccess from "./pages/RegisterSuccess";
import ClassPayments from "./components/classes/ClassPayments";
import CompleteRegister from "./pages/CompleteRegister";

function App() {
  const initialOptions = {
    clientId:
      "AZrs3gaQNVE5DRnWHdyNLhOdPEYDdSE3UZcCLl2mQCOsheGYDpJ6ISceyJmBF-p5gv4mBJIbfHLhuBnc",
    currency: "USD",
    intent: "capture",
  };

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <DataProviderSession>
          <DataProviderLanguage>
            <DataProviderTabs>
              <HashRouter>
                <Routes>
                  <Route path="/checkout/:id" element={<ClassPayments />} />
                  <Route path="/register/:name" element={<RegisterSuccess />} />
                  <Route
                    path="/registerComplete/:name"
                    element={<CompleteRegister />}
                  />
                  <Route element={<Home />}>
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
                    <Route path="/tutor_info/:id" element={<SetPassword />} />
                    <Route path="/classes" element={<ClassesList />} />
                    <Route path="/teacher/:id" element={<TeacherInfo />} />
                    <Route path="/class/:id" element={<ClassInfo />} />
                  </Route>
                  //*LOGIN ROUTES
                  <Route element={<ProtectedRoutes />}>
                    //*STUDENTS ROUTES
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                      //*TEACHER ROUTES
                      <Route path="/dashboard/" element={<>Stats</>} />
                    </Route>
                  </Route>
                </Routes>
              </HashRouter>
            </DataProviderTabs>
          </DataProviderLanguage>
        </DataProviderSession>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
