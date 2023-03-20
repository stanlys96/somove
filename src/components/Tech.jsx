import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
            <BallCanvas icon={technology.icon} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
