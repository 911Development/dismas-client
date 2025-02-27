import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import Button from "./ui/Button";
// import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const SidebarHeader = ({ handleSidebar }) => {
  //   const { t } = useTranslation();

  return (
    <section className="offcanvas-header bg-white dark:bg-black flex items-center sticky top-0 px-4 z-10 shadow-sm py-6">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">DISMAS STUDIO</h1>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="28"
        height="28"
        viewBox="0 0 50 50"
        style={{ fill: "#fff" }}
        className="ms-auto"
        onClick={handleSidebar}
      >
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
      </svg>
    </section>
  );
};

const SidebarBody = ({ handleSidebar }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const [languageType, setLanguageType] = useState(null);

  const { pathname } = router;

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
    <div className="offcanvas-body flex overflow-x-hidden mb-auto">
      <section className="min-w-full py-6 px-4">
        {/* <hr className="border-gray-600 my-4" /> */}
        <ul className="space-y-3 mb-12">
          <li>
            <h3 className="font-semibold px-4">{t("menu")}</h3>
          </li>
          <li>
            <Link
              href={"#about"}
              className={`flex items-center gap-2 rounded py-3 px-4 text-sm text-muted ${
                pathname === "/about" && "bg-light dark:bg-dark text-primary"
              }`}
              onClick={() => handleSidebar()}
            >
              {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
              <span className="text-lg">{t("nav_about")}</span>
            </Link>
          </li>

          <li>
            <Link
              href={"#services"}
              className={`flex items-center gap-2 rounded py-3 px-4 text-sm text-muted ${
                pathname === "/teams" && "bg-light dark:bg-dark text-primary"
              }`}
              onClick={handleSidebar}
            >
              {/* <FontAwesomeIcon icon={faUsers} /> */}
              <span className="text-lg">{t("nav_services")}</span>
            </Link>
          </li>
          <li>
            <Link
              href={"#projects"}
              className={`flex items-center gap-2 rounded py-3 px-4 text-sm text-muted ${
                pathname === "/projects" && "bg-light dark:bg-dark text-primary"
              }`}
              onClick={handleSidebar}
            >
              {/* <FontAwesomeIcon icon={faProjectDiagram} /> */}
              <span className="text-lg">{t("nav_projects")}</span>
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              className={`flex items-center gap-2 rounded py-3 px-4 text-sm text-muted ${
                pathname === "/projects" && "bg-light dark:bg-dark text-primary"
              }`}
              onClick={handleSidebar}
            >
              {/* <FontAwesomeIcon icon={faProjectDiagram} /> */}
              <span className="text-lg">{t("nav_contact")}</span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-3 mb-12">
          <li>
            <h3 className="font-semibold px-4">{t("socials")}</h3>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/"}
              className={`flex items-center gap-2 rounded py-3 px-4 text-sm text-muted ${
                pathname === "/about" && "bg-light dark:bg-dark text-primary"
              }`}
              target="_blank"
              onClick={() => handleSidebar()}
            >
              {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
              <span className="text-lg">LINKEDIN</span>
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.instagram.com"}
              className={`flex items-center gap-2 rounded py-3 px-4 text-sm text-muted ${
                pathname === "/projects" && "bg-light dark:bg-dark text-primary"
              }`}
              target="_blank"
              onClick={handleSidebar}
            >
              {/* <FontAwesomeIcon icon={faProjectDiagram} /> */}
              <span className="text-lg">INTAGRAM</span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-3">
          <li>
            <h3 className="font-semibold px-4">{t("language")}</h3>
          </li>
          <li className="flex items-center gap-3">
            <span
              className={`flex items-center gap-2 ${
                languageType !== "tr" && "font-slim"
              } rounded py-3 px-4 text-lg text-muted`}
              onClick={function () {
                handleSelectLanguage("tr");

                handleSidebar();
              }}
            >
              TR
            </span>
            <span
              className={`flex items-center gap-2 ${
                languageType !== "en" && "font-slim"
              } rounded py-3 px-4 text-lg text-muted`}
              onClick={function () {
                handleSelectLanguage("en");

                handleSidebar();
              }}
            >
              EN
            </span>
          </li>
        </ul>
        {/* <hr className="border-gray-600 my-4" /> */}
      </section>
    </div>
  );
};

const SidebarFooter = () => {
  const { t } = useTranslation();

  return (
    <div className="offcanvas-footer mt-auto p-4">
      <p className="text-sm lg:hidden">{t("all_rights_reserved")}</p>
    </div>
  );
};

const Sidebar = ({ show, handleSidebar }) => {
  const [mounted, setMounted] = useState(false);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100svh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [show]);

  useEffect(() => {
    if (show) {
      setDisplay("block");
    } else {
      setTimeout(() => {
        setDisplay("none");
      }, 300);
    }
  }, [show]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      id="sidebar-overlay"
      className="fixed top-0 left-0 w-screen h-[100svh] overflow-y-scroll z-50"
      style={{ display }}
    >
      <motion.div
        initial={{ translateX: "100%" }}
        animate={{ translateX: show ? "0%" : "100%" }}
        transition={{ duration: 0.3 }} // Ensure animation timing is smooth
        className="offcanvas h-full bg-black text-white flex flex-col"
      >
        <SidebarHeader handleSidebar={handleSidebar} />
        <SidebarBody handleSidebar={handleSidebar} />
        <SidebarFooter />
      </motion.div>
    </div>,
    document.getElementById("sidebar-backdrop")
  );
};

export default Sidebar;
