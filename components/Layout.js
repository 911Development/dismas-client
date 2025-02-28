import Link from "next/link";
import Navbar from "./ui/Navbar";
import Container from "./Container";
import SplashScreen from "@/pages/SplashScreen";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Navbar />
      <SplashScreen />
      <main className="select-none">{children}</main>
      <footer className="py-12">
        <Container className="flex !flex-row items-center justify-between px-0">
          {isClient ? (
            <>
              <p className="text-xl">{t("footer_desc")}</p>
              {/* <p className="lg:hidden text-xl">{t("footer_desc_2")}</p> */}
            </>
          ) : (
            <p className="text-xl">&nbsp;</p>
          )}
          <nav>
            <ul className="flex items-center justify-center gap-2 lg:gap-3">
              <li>
                <Link href={"/"} className="text-lg lg:text-2xl">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-lg lg:text-2xl">
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
