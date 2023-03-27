import { SectionWrapper } from "../hoc";
import { BsTelegram, BsDiscord } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-x-10">
        <motion.div variants={fadeIn("right", "spring", 0.25 * 0.5, 3)}>
          <a
            href="https://t.me/ZabavaGamers"
            target="_blank"
            className="cursor-pointer"
          >
            <BsTelegram className="w-[40px] h-[40px]" />
          </a>
        </motion.div>
        <motion.div variants={fadeIn("right", "spring", 0.5 * 0.5, 3)}>
          <a
            href="https://discord.gg/yHABFpyFCM"
            target="_blank"
            className="cursor-pointer"
          >
            <BsDiscord className="w-[40px] h-[40px]" />
          </a>
        </motion.div>
        <motion.div variants={fadeIn("right", "spring", 0.75 * 0.5, 3)}>
          <a
            href="https://twitter.com/zabavalabs"
            target="_blank"
            className="cursor-pointer"
          >
            <AiFillTwitterCircle className="w-[40px] h-[40px]" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
