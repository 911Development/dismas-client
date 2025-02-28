import Link from "next/link";
import Navbar from "./ui/Navbar";
import Container from "./Container";
import SplashScreen from "@/pages/SplashScreen";
import { useTranslation } from "react-i18next";
import Arrow from "../public/TRY.svg";

const Layout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <SplashScreen />
      <main className="select-none">{children}</main>
      <footer className="py-12">
        <Container className="flex !flex-row items-center justify-between px-0">
          <p className="hidden lg:block text-medium tracking-menuSpacing font-slim hover:text-muted transition-all">
            {t("footer_desc")}
          </p>
          {/* <p className="lg:hidden text-xl">{t("footer_desc_2")}</p> */}
          <nav>
            <ul className="flex items-center justify-center gap-1 lg:gap-8">
              <li>
                <div className="flex flex-row  items-center">
                  <Link
                    href={"/"}
                    className="text-medium tracking-menuSpacing font-slim hover:text-muted transition-all"
                  >
                    LINKEDIN
                  </Link>
                  <Arrow width="23" height="25" />
                </div>
              </li>
              <li>
                <div className="flex flex-row  items-center">
                  <Link
                    href={"/"}
                    className="text-medium tracking-menuSpacing font-slim hover:text-muted transition-all"
                  >
                    INSTAGRAM
                  </Link>
                  <Arrow width="23" height="25" />
                </div>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
