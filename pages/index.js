import Container from "@/components/Container";
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
          <section className="lg:grid lg:grid-cols-12 lg:justify-center gap-4 mb-72">
            <section className="lg:self-end col-span-12 lg:col-span-3 mb-12 lg:mb-0">
              <p className="text-lg text-center lg:text-start lg:w-[175px]">
                Contact us for UI Design and Software Development projects
              </p>
            </section>
            <section className="col-span-12 lg:col-span-6 flex flex-col justify-center lg:justify-start mb-12 lg:mb-0">
              <img
                src="/logo.png"
                alt="Dismas"
                className="w-72 mx-auto mb-12"
              />
              <Link
                href={"#about"}
                className="border p-2 rounded mx-auto bg-none hover:bg-gray-900 transition-all"
              >
                EXPLORE DISMAS
              </Link>
            </section>
            <section className="col-span-12 lg:col-span-3">
              <p className="text-center lg:text-end lg:ms-auto text-lg lg:w-[175px]">
                DISMAS is TRNC based design and a development studio
              </p>
            </section>
          </section>
          <section id="about" className="mb-96">
            <section className="border rounded-full inline-block text-start px-4 py-1 mb-8">
              <span className="text-xl">About</span>
            </section>
            <section className="relative">
              <p className="lg:w-[60%] text-xl">
                Dismas is more than our name, it’s a symbol of who we are and
                what we stand for. Historically, mottos were war-cries of
                sentiment, hope and purpose. We create mottos for our clients
                that serve as a rallying car.
              </p>
              <img
                src="/about_icon.png"
                alt="Dismas About"
                className="w-40 lg:w-80 absolute -bottom-24 lg:bottom-0 right-0 translate-x-1/2 translate-y-1/2"
              />
            </section>
          </section>
          <section id="projects" className="lg:grid lg:grid-cols-12 mb-96">
            <section className="lg:col-span-8 mb-12 lg:mb-0">
              <section className="border rounded-full inline-block px-4 py-1 mb-8">
                <span className="text-xl">Projects</span>
              </section>
              <section>
                <p className="text-xl text-start">
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
          </section>
          <section id="contact" className="flex items-center justify-center">
            <Link
              href={"/"}
              className="border rounded-full flex items-center justify-center px-4 py-1 mb-8"
            >
              <span className="text-xl">CONTACT</span>
            </Link>
          </section>
          <section className="text-center">
            <p className="text-xl">DISMAS@STUDIO.COM</p>
          </section>
        </Container>
      </section>
    </>
  );
}
