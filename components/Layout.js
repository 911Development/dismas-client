import Link from "next/link";
import Navbar from "./ui/Navbar";
import Container from "./Container";
import SplashScreen from "@/pages/SplashScreen";
import { useTranslation } from "react-i18next";

const Layout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <SplashScreen />
      <main className="select-none">{children}</main>
      <footer className="py-12">
        <Container className="flex !flex-row items-center justify-between px-0">
          <p className="lg:text-xl">{t("footer_desc")}</p>
          {/* <p className="lg:hidden text-xl">{t("footer_desc_2")}</p> */}
          <nav>
            <ul className="flex items-center justify-center gap-1 lg:gap-3">
              <li>
                <Link href={"/"} className="text-lg lg:text-2xl">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-lg lg:text-2xl">
                  Instragram
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
