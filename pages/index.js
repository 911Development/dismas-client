import Container from "@/components/Container";
import Projects from "@/components/ui/Projects";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head></Head>
      <section className="mx-auto my-12">
        <Container>
          <section className="lg:grid lg:grid-cols-12 gap-4 mt-24 mb-96">
            <section className="lg:self-end col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              <p className="text-2xl font-[200] text-center lg:text-justify whitespace-pre-line">
                Contact us for UI{"\n"}Design and Software{"\n"}Development
                Projects
              </p>
            </section>
            <section className="col-span-12 lg:col-span-4 flex flex-col justify-center lg:justify-start mb-12 lg:mb-0">
              <img
                src="/logo.png"
                alt="Dismas"
                className="w-52 lg:w-72 mx-auto mb-12"
              />
              <Link href={"#about"} className="mx-auto">
                <button className="relative px-6 py-3 text-white font-semibold uppercase tracking-wide rounded-md border border-transparent bg-transparent">
                  <span className="absolute inset-0 rounded-md border border-transparent bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300"></span>
                  <span className="absolute inset-[1px] bg-black rounded-md"></span>
                  <span className="relative">EXPLORE DISMAS</span>
                </button>
              </Link>
            </section>
            <section className="col-span-12 lg:col-span-4 text-end ms-auto">
              <p className="text-2xl font-[200] text-center lg:text-justify whitespace-pre-line">
                DISMAS is TRNC{"\n"}based design and{"\n"}Development Studio
              </p>
            </section>
          </section>
          <section id="about" className="relative mb-96">
            <section className="border rounded-full inline-block text-start px-8 py-1 mb-8">
              <span className="font-[300] text-2xl">ABOUT</span>
            </section>
            <section>
              <p className="font-[200] lg:w-[60%] text-2xl lg:text-4xl mb-8 lg:mb-0 text-justify">
                Dismas is more than our name, it’s a symbol of who we are and
                what we stand for. Historically, mottos were war-cries of
                sentiment, hope and purpose. We create mottos for our clients
                that serve as a rallying car.
              </p>
              <img
                src="/about_icon.png"
                alt="Dismas About"
                className="hidden lg:block w-40 lg:w-80 absolute bottom-0 lg:bottom-0 right-0 translate-x-1/2 translate-y-1/2"
              />
              <img
                src="/about_icon.png"
                alt="Dismas About"
                className="block lg:hidden w-40 mx-auto"
              />
            </section>
          </section>
          <section id="projects" className="mb-48">
            <Projects />
          </section>
          {/* <section id="projects" className="lg:grid lg:grid-cols-12 mb-48">
            <section className="lg:col-span-8 mb-12 lg:mb-0">
              <section className="border rounded-full inline-block px-4 py-1 mb-8">
                <span className="font-[300] text-2xl">PROJECTS</span>
              </section>
              <section>
                <p className="lg:text-3xl text-start">
                  We provide our expertise on projects of any scale, and
                  anywhere in the world.
                </p>
              </section>
            </section>
            <section className="lg:col-span-4">
              <section className="mb-12">
                <h2 className="text-xl font-bold mb-2">ELLIE 2023</h2>
                <p className="text-muted mb-2">
                  As a team, we developed this mobile application to enable
                  users to control home appliances remotely. we optimized
                  backend connections for IoT integration.
                </p>
                <Link
                  href={"https://elliesmarthome.com"}
                  className="flex items-center justify-start gap-2"
                  target="_blank"
                >
                  <span>See it Live</span>
                  <FontAwesomeIcon icon={faAngleRight} size="sm" />
                </Link>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-2">Kıbrısevim</h2>
                <p className="text-muted mb-2">
                  As a team, we developed this mobile application to enable
                  users to control home appliances remotely. we optimized
                  backend connections for IoT integration.
                </p>
              </section>
              <Link
                href={"https://kibrisevim.com/"}
                className="flex items-center justify-start gap-2"
                target="_blank"
              >
                <span>See it Live</span>
                <FontAwesomeIcon icon={faAngleRight} size="sm" />
              </Link>
            </section>
          </section> */}
          <section id="contact" className="flex items-center justify-center">
            <section className="border rounded-full inline-block text-start px-8 py-1 mb-8">
              <span className="font-[300] text-2xl">CONTACT</span>
            </section>
          </section>
          <section className="text-center">
            <a
              href="mailto:DISMAS@STUDIO.COM"
              className="text-3xl lg:text-4xl hover:opacity-80 transition-all"
            >
              DISMAS@STUDIO.COM
            </a>
          </section>
        </Container>
      </section>
    </>
  );
}
