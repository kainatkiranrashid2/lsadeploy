import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const Heading = ({ mainText }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2.33 1"],
  });
  return (
    <motion.div
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="container  mt-[144px]  mb-[104px] letter tracking-tight	  mx-auto flex justify-center items-center ">
      <div className="relative inline-block mx-auto">
        <p
          className=" -tracking-2 text-h1 font-PP_Mori text-dark text-center"
          style={{ lineHeight: "68.75px", letterSpacing: "-2px" }}>
          {mainText}
        </p>
      </div>
    </motion.div>
  );
};

export default Heading;
Heading.propTypes = {
  mainText: PropTypes.string.isRequired, // Adjust the type and requirement as needed
  // subText: PropTypes.string.isRequired, // Adjust the type and requirement as needed
};
