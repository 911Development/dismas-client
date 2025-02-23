import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(identifier);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-screen h-[100svh] flex items-center justify-center bg-black z-50"
        >
          <div className="relative flex overflow-hidden">
            <h1 className="absolute text-5xl tracking-widest font-bold text-transparent stroke-text whitespace-nowrap">
              DISMAS STUDIO
            </h1>

            <motion.h1
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-5xl tracking-widest font-bold text-white overflow-hidden whitespace-nowrap"
            >
              DISMAS STUDIO
            </motion.h1>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
