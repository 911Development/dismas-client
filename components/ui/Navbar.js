import Link from "next/link";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            <li className="relative">
              <Link
                className="text-white text-medium tracking-menuSpacing font-slim hover:text-muted transition-all"
                href={"#about"}
              >
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                className="text-white text-medium tracking-menuSpacing font-slim hover:text-muted transition-all"
                href={"#services"}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-medium tracking-menuSpacing font-slim hover:text-muted transition-all"
                href={"#projects"}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-medium tracking-menuSpacing font-slim hover:text-muted transition-all"
                href={"#contact"}
              >
                CONTACT
              </Link>
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
