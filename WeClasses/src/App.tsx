import { Route, Routes, BrowserRouter } from "react-router-dom";

import { DataProvider } from "./context/session";

import Leaks from "./components/Leaks";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AllStories from "./components/AllStories";
import Login from "./components/Login";
import EditStory from "./components/EditStory";
import StoriesForm from "./components/StoriesForm";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/leaks" element={<Leaks />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/stories" element={<AllStories />} />
              <Route path="/dashboard/editstory/:id" element={<EditStory />} />
              <Route path="/dashboard/addstory" element={<StoriesForm />} />
              <Route path="/dashboard/resume" element={<>Stats</>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
