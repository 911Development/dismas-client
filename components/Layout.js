import Link from "next/link";
import Navbar from "./ui/Navbar";
import Container from "./Container";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <footer className="py-12">
        <Container className="flex !flex-row items-center justify-between">
          <p>2025 based in Cyprus</p>
          <nav>
            <ul className="flex items-center justify-center gap-3">
              <li>
                <Link href={"/"} className="text-xl lg:text-2xl">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-xl lg:text-2xl">
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
