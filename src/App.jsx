import { BrowserRouter } from "react-router-dom";

import {
  About,
  Hero,
  Navbar,
  Tech,
  Tools,
  StarsCanvas,
  Blog,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="relative z-0">
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Tech />
        <Tools />
        <Blog />
      </div>
    </BrowserRouter>
  );
};

export default App;
