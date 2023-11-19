import { Route, Routes, HashRouter } from "react-router-dom";

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
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/leaks" element={<Leaks />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/stories" element={<AllStories />} />
              <Route path="/dashboard/story/:id" element={<EditStory />} />
              <Route path="/dashboard/story" element={<StoriesForm />} />
              <Route path="/dashboard/resume" element={<>Stats</>} />
            </Route>
          </Routes>
        </HashRouter>
      </DataProvider>
    </>
  );
}

export default App;
