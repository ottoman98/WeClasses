import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar";
import Stories from "./components/stories/stories";
import Login from "./components/loginRegister/login";
import Register from "./components/loginRegister/register";
import Story from "./components/story/story";

import AdminPanel from "./components/adminPanel";
import PostStory from "./components/storiesPost";

function App() {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
