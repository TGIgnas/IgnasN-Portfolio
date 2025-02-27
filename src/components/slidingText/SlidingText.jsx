import { motion } from "framer-motion";

const SlidingText = () => {
  return (
    <div className="relative w-full h-20 overflow-hidden bg-black flex items-center">
      <motion.div
        className="text-white text-2xl font-bold whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 5, // Adjust speed
          ease: "linear",
        }}
      >
        🚀 Welcome to My Website! Keep Moving Forward! 🚀
      </motion.div>
    </div>
  );
};

export default SlidingText;
