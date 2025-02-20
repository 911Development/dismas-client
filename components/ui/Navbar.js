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
      <nav className="py-12 sticky top-0 bg-black z-50">
        <Container className={"flex !flex-row items-center justify-between"}>
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">DISMAS STUDIO</h1>
          </Link>
          <ul className="lg:flex items-center hidden gap-3">
            <li className="relative">
              <Link
                className="text-muted hover:text-white transition-all"
                href={"#about"}
              >
                ABOUT
              </Link>
              <div className="absolute"></div>
            </li>
            <li>
              <Link
                className="text-muted hover:text-white transition-all"
                href={"#career"}
              >
                CAREER
              </Link>
            </li>
            <li>
              <Link
                className="text-muted hover:text-white transition-all"
                href={"#career"}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                className="text-muted hover:text-white transition-all"
                href={"#career"}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="lg:hidden ms-auto"
            onClick={handleMenu}
          />
        </Container>
      </nav>
      <Sidebar show={isMenuOpen} handleSidebar={handleMenu} />
    </>
  );
};

export default Navbar;
