import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar";
import Stories from "./components/stories/stories";
import Login from "./components/loginRegister/login";
import Register from "./components/loginRegister/register";
import Story from "./components/story/story";

import AdminPanel from "./components/adminPanel";
import PostStory from "./components/storiesPost";
import { DataProvider } from "./context/userAuth";
import StoriesAdmin from "./components/storiesAdmin";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" />
            <Route path="/stories" element={<Stories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="stories/storydeprueba" element={<Story />} />
            <Route path="/profile" element={<AdminPanel />} />
            <Route path="/storyPost" element={<PostStory />} />
            <Route path="/storiesList" element={<StoriesAdmin />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
