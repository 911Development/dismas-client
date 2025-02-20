import Link from "next/link";
import Container from "../Container";

const Navbar = () => {
  return (
    <nav className="py-12">
      <Container className={"flex items-center justify-between"}>
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">DISMAS STUDIO</h1>
        </Link>
        <ul className="flex items-center gap-3">
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
      </Container>
    </nav>
  );
};

export default Navbar;
