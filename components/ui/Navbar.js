import Link from "next/link";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LINKS = [
  { text: "nav_about", href: "#about" },
  { text: "nav_services", href: "#services" },
  { text: "nav_projects", href: "#projects" },
  { text: "nav_contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [languageType, setLanguageType] = useState(null);

  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSelectLanguage = (lng) => {
    setLanguageType(lng);

    i18n.changeLanguage(lng).then(() => {
      router.replace(router.pathname, router.asPath, { locale: lng });
    });
  };

  useEffect(() => {
    if (i18n.isInitialized) setLanguageType(i18n.language);
  }, [i18n.language, i18n.isInitialized]);

  if (!languageType) return;

  return (
    <>
      <nav className="py-6 sticky top-0 bg-black z-50">
        <Container className={"flex !flex-row items-center justify-between"}>
          <Link href={"/"}>
            <h1 className="text-2xl lg:text-4xl font-bold trajan tracking-widest">
              DISMAS STUDIO
            </h1>
          </Link>
          <ul className="hidden lg:flex space-x-12">
            {LINKS.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1], scale: [0, 1] }}
                exit={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 2.75 + 0.25 * index,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={link.href}
                  className="group text-white text-medium tracking-menuSpacing font-slim hover:text-muted transition-all"
                >
                  {t(link.text)}
                  <div className="w-0 group-hover:w-full bg-white h-[0.5px] transition-all"></div>
                </Link>
              </motion.li>
            ))}
            <li
              onClick={() =>
                handleSelectLanguage(languageType === "en" ? "tr" : "en")
              }
              className="text-white text-medium tracking-menuSpacing font-slim hover:text-muted transition-all cursor-pointer"
            >
              {languageType?.toUpperCase() || "EN"}
            </li>
          </ul>
          <span className="lg:hidden ms-auto">
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="lg:hidden ms-auto"
              onClick={handleMenu}
            />
          </span>
        </Container>
      </nav>
      <Sidebar show={isMenuOpen} handleSidebar={handleMenu} />
    </>
  );
};

export default Navbar;
