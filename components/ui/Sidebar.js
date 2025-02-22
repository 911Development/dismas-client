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
  //   const { t, i18n } = useTranslation();

  const { pathname } = router;

  //   const handleSelectLanguage = (lng) => {
  //     handleSidebar();
  //     // setLanguageType(lng);

  //     i18n.changeLanguage(lng).then(() => {
  //       router.replace(router.pathname, router.asPath, { locale: lng });
  //     });
  //   };

  return (
    <div className="offcanvas-body flex overflow-x-hidden mb-auto">
      <section className="min-w-full py-6 px-4">
        {/* <section className="grid grid-cols-12 gap-3">
          <Link
            href={process.env.NEXT_PUBLIC_FACEBOOK}
            target="_blank"
            className="col-span-6 bg-white shadow rounded p-4"
          >
            <section className="flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-100 bg-clip-text text-transparent rounded mb-1">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
              <span className="font-semibold">Facebook</span>
            </section>
            <p className="text-xs text-muted dark:text-muted-dark">
              {t("follow_on_facebook")}
            </p>
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_INSTAGRAM}
            target="_blank"
            className="col-span-6 bg-white shadow rounded p-4"
          >
            <section className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent rounded mb-1">
              <FontAwesomeIcon icon={faInstagram} className="text-purple-500" />
              <span className="font-semibold">Instagram</span>
            </section>
            <p className="text-xs text-muted dark:text-muted-dark">
              {t("follow_on_instagram")}
            </p>
          </Link>
        </section> */}
        {/* <hr className="border-gray-600 my-4" /> */}
        <ul className="space-y-3 mb-12">
          <li>
            <h3 className="font-semibold px-4">MENU</h3>
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
              <span className="text-lg">ABOUT</span>
            </Link>
          </li>
          <li>
            <Link
              href={"#career"}
              className={`flex items-center gap-2 rounded py-3 px-4 text-sm text-muted ${
                pathname === "/teams" && "bg-light dark:bg-dark text-primary"
              }`}
              onClick={handleSidebar}
            >
              {/* <FontAwesomeIcon icon={faUsers} /> */}
              <span className="text-lg">CAREER</span>
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
              <span className="text-lg">PROJECTS</span>
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
              <span className="text-lg">CONTACT</span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-3">
          <li>
            <h3 className="font-semibold px-4">SOCIALS</h3>
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
        {/* <hr className="border-gray-600 my-4" /> */}
      </section>
    </div>
  );
};

const SidebarFooter = () => {
  //   const { t } = useTranslation();

  return (
    <div className="offcanvas-footer mt-auto p-4">
      <p className="text-sm lg:hidden">
        © Dismas Studio {new Date().getFullYear()}, all rights reserved.
      </p>
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
