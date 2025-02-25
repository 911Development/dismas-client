import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.section
        initial={{ y: -50, opacity: 0.15 }}
        whileInView={{ y: [-50, 0], opacity: [0.25, 1] }}
        transition={{
          ease: "easeOut",
          duration: 0.35,
        }}
        id="contact"
        className="flex items-center justify-center py-12"
      >
        <section className="border rounded-full inline-block text-start px-8 py-1">
          <span className="font-[300] text-2xl lg:text-4xl">CONTACT</span>
        </section>
      </motion.section>
      <motion.section
        initial={{ y: 50, opacity: 0.15 }}
        whileInView={{ y: [50, 0], opacity: [0.25, 1] }}
        transition={{
          ease: "easeOut",
          duration: 0.35,
        }}
        // viewport={{ once: true }}
        className="text-center py-12"
      >
        <a
          href="mailto:DISMAS@STUDIO.COM"
          target="_blank"
          className="text-3xl lg:text-6xl font-[300] hover:opacity-80 transition-all"
        >
          DISMAS@STUDIO.COM
        </a>
      </motion.section>
    </>
  );
};

export default Contact;
