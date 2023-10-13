import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar";
import Stories from "./components/stories/stories";
import LoginRegister from "./components/loginRegister/loginRegister";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/stories" element={<Stories />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
