import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Blog,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        <Blog />
        {/* <Feedbacks /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
