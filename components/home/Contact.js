import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

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
        <section className="border rounded-full inline-block text-start px-8 py-2 mb-8">
          <span className="font-[300] text-large tracking-menuSpacing">
            {t("nav_contact")}
          </span>
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
          href="mailto:contact@dismas.studio"
          target="_blank"
          className="text-xlarge tracking-menuSpacing font-slim hover:text-muted hover:opacity-80 transition-all"
        >
          CONTACT@DISMAS.STUDIO
        </a>
      </motion.section>
    </>
  );
};

export default Contact;
