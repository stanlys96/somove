import { SectionWrapper } from "../hoc";
import { walao, walao1, walao2, walao3, walao4 } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Blog = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <motion.div variants={fadeIn("", "spring", 0.5, 0.75)}>
        <img src={walao} alt="project_image" className="w-full " />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative h-full">
        <motion.div
          className="col-span-2"
          variants={fadeIn("", "spring", 0.75, 0.75)}
        >
          <div className="h-full relative">
            <img src={walao1} alt="project_image" className="w-full h-full" />
            <span className="absolute text-base left-[10px] top-[10px] bg-tertiary p-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              General News
            </span>
            <div className="absolute left-[10px] bottom-[10px]">
              <p className="text-gray mb-[10px] text-xs md:text-base font-bold">
                17/03/2023 13:03
              </p>
              <p className="text-sm md:text-xl text-white font-bold">
                The Minister of Finance said that the decline in exports will
                continue...
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-y-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full relative">
            <motion.div
              variants={fadeIn("", "spring", 1, 0.75)}
              className="relative h-full w-full"
            >
              <div className="relative h-full w-full">
                <img
                  src={walao3}
                  alt="project_image"
                  className="w-full h-full"
                />
                <span className="absolute text-[10px] left-[10px] top-[10px] bg-tertiary py-2 px-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
                  General News
                </span>
                <div className="absolute left-[10px] bottom-[10px]">
                  <p className="text-gray mb-[10px] text-xs font-bold">
                    17/03/2023 13:03
                  </p>
                  <p className="text-[14px] text-white font-bold">
                    China maintains a strong growth
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn("", "spring", 1.25, 0.75)}>
              <div className="relative w-full h-full">
                <img
                  src={walao4}
                  alt="project_image"
                  className="w-full h-full"
                />
                <span className="absolute text-[10px] left-[10px] top-[10px] bg-tertiary py-2 px-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
                  General News
                </span>
                <div className="absolute left-[10px] bottom-[10px]">
                  <p className="text-gray mb-[10px] text-xs font-bold">
                    17/03/2023 13:03
                  </p>
                  <p className="text-[14px] text-white font-bold">
                    The New Washington Council on China hol...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            variants={fadeIn("", "spring", 1.5, 0.75)}
          >
            <div classname="relative">
              <img src={walao2} alt="project_image" className="w-full" />
              <span className="absolute text-[10px] top-[10px] left-[10px] bg-tertiary py-2 px-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
                General News
              </span>
              <div className="absolute left-[10px] bottom-[10px]">
                <p className="text-gray mb-[10px] text-sm font-bold">
                  17/03/2023 13:03
                </p>
                <p className="text-base text-white font-bold">
                  US Commitees decided to make relations with Taiwan
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, "blog");
