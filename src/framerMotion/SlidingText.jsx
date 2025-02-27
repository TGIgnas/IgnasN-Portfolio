import { motion } from "framer-motion";

const SlidingText = ({ text }) => {
  return (
    <div className="overflow-hidden w-full">
      <motion.span
        initial={{ x: "100%" }}
        animate={{ x: "-130%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="whitespace-nowrap inline-block"
      >
        {text}
      </motion.span>
    </div>
  );
};

export default SlidingText;
