import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedText } from "../AnimatedText/AnimatedText";
// import Cloud from "../reuseable_components/Cloud";
// import CloudScene from "./CloudScene";

const Hero = () => {
  const [currentText, setCurrentText] = useState("On The Land");
  const textOptions = ["On The Land", "At Sea", "In The Air"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = textOptions.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % textOptions.length;
        return textOptions[nextIndex];
      });
    }, 2000); // Change text every second

    return () => clearInterval(interval);
  }, [textOptions]);
  const cloudAnimation = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="mx-auto px-0 text-center mb-5 mt-[150px] ">
      {/* <div className="dark:hidden absolute top-0 left-10 ">
        <Cloud />
      </div> */}
      <div className="container">
        <div className="z-0 md:z-10 w-[954px] mx-auto items-center  ">
          {/* Top left image */}

          <motion.h1
            className="text-center  font-PP_Mori z-0 md:z-10 box-border  text-wrap  font-bold  overflow-y-hidden gap-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <motion.span className="text-h1 text-black dark:text-white ">
              Take payments anytime, anywhere
            </motion.span>

            <motion.div
              key={currentText}
              className="ml-2  text-h1 rounded-2xl !h-[95px] py-0 px-0 bg-primary font-PP_Mori text-nowrap   text-white border-4 border-[#65D008] inline-block  "
              style={{ lineHeight: "69px !important" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}>
              <motion.p
                className=" text-h1 inline-block !h-full my-0 px-6   font-PP_Mori"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}>
                {currentText}
              </motion.p>
            </motion.div>
          </motion.h1>
          <AnimatedText
            className="text-body w-[662px]  font-PP_Mori text-dark dark:text-white  mt-[27px] max-w-2xl mx-auto"
            text="Acceptify enables your applications to accept worldwide, secure,
          certified, online/offline payments while removing all of your security
          concerns."
          />
        </div>
      </div>
      {/* <motion.div
        className="flex justify-center flex-col items-center sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-4 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}>
        <motion.button
          className="primary-btn text-sm box-border border border-primary w-[200px] max-width-[300px] sm:w-auto rounded-lg"
          whileHover={{
            scale: 1.2,
            marginRight: "10px",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}>
          Request a Demo
        </motion.button>
        <motion.button
          className="primary-btn rounded-lg text-sm box-border bg-transparent text-light_purple px-6 py-2 border border-light_purple w-[200px] max-width-[300px] sm:w-auto"
          whileHover={{
            scale: 1.2,
            marginRight: "10px",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}>
          Watch Video
        </motion.button>
      </motion.div> */}
      {/* <SequenceImages /> */}
      <div className="relative isolate w-[100%] px-0">
        <div className="relative isolate">
          {/* <CloudScene className="absolute dark:hidden w-full max-w-6xl left-[25%]  z-20" /> */}
          <img
            src="/assets/cloud.png"
            className="absolute dark:hidden w-30 max-w-6xl top-4 left-[55%]  z-20"
          />
          <motion.video
            src="/assets/hero/half_globe_19_sep.webm"
            alt="Global map"
            className="w-full z-20 max-w-full mx-auto relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      {/* Bottom right image */}
    </div>
  );
};

export default Hero;
