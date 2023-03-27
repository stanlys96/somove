import YouTube from "react-youtube";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import ReactPlayer from "react-player";

const Video = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };
  return (
    <div className="flex justify-center items-center mx-auto w-full w-fit relative">
      <motion.div
        className="w-fit relative"
        variants={fadeIn("right", "spring", 0 * 0.5, 3)}
      >
        <div className="w-1/2">
          {/* <ReactPlayer
            url="https://www.youtube.com/watch?v=N8X654J86QA"
            playing
          /> */}
          <YouTube
            className="w-1/2"
            videoId="N8X654J86QA"
            opts={videoOptions}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Video, "video");
