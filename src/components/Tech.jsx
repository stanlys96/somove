import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={fadeIn("right", "spring", 0 * 0.5, 3)}>
        <h2 className={styles.sectionHeadText}>Our Sponsors</h2>
      </motion.div>

      <div className="md:grid md:grid-cols-2 gap-y-10 gap-x-10 mt-[55px] justify-center items-center mx-auto">
        <Tilt>
          <motion.div variants={fadeIn("right", "spring", 1 * 0.5, 3)}>
            <img
              className="w-2/3 mx-auto md:mb-0 mb-[80px]"
              src="/img/sponsor-1.png"
            />
          </motion.div>
        </Tilt>
        <Tilt>
          <motion.div variants={fadeIn("right", "spring", 2 * 0.5, 3)}>
            <img className="w-2/3 mx-auto" src="/img/sponsor-2.png" />
          </motion.div>
        </Tilt>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
