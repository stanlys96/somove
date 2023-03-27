import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Blog } from "./components";
import { MainPage } from "./components/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
