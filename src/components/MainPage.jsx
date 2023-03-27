import Hero from "./Hero";
import { StarsCanvas } from "./canvas";
import About from "./About";
import Video from "./Video";
import Tech from "./Tech";
import Tools from "./Tools";
import Footer from "./Footer";

export const MainPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative z-0">
        <Hero />
        <StarsCanvas />
      </div>
      <About />
      <Video />
      <Tech />
      <Tools />
      <Footer />
    </div>
  );
};
