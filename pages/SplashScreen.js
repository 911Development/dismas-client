import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsVisible(false);
    }, 2700);

    return () => clearTimeout(identifier);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isVisible) body.style.overflow = "hidden";
    else body.style.overflow = "auto";

    return () => (document.body.style.overflow = "auto");
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ y: "-125%" }}
          transition={{ duration: 1 }}
          className="fixed top-0 left-0 w-screen h-[100svh] flex items-end -translate-y-6 justify-center bg-black z-50"
        >
          <div className="relative flex overflow-hidden">
            <h1 className="absolute w-[15vw] leading-none text-4xl lg:text-8xl tracking-widest font-bold text-transparent stroke-text whitespace-nowrap">
              DISMAS STUDIO
            </h1>

            <motion.h1
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-[15vw] leading-none text-4xl lg:text-8xl tracking-widest font-bold text-white overflow-hidden whitespace-nowrap"
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
