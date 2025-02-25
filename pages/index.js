import Container from "@/components/Container";
import Projects from "@/components/ui/Projects";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01.",
    title: "FRONT-END DEVELOPMENT",
    description:
      "We are a team specialized in enhancing the user interface and experience of your website. With our Front-End Development service, we use technologies such as HTML, CSS and JavaScript to create modern and impressive user interfaces. We aim to ensure that your site is fast loading, responsive and compatible across browsers so that your users have a seamless experience.",
  },
  {
    number: "02.",
    title: "BACK-END DEVELOPMENT",
    description:
      "We are here to ensure that your website has a strong infrastructure. With our Back-End Development service, we develop customized web applications to meet the specific requirements of your business. Using technologies such as database management, server-side programming languages and API integration, we ensure the efficient operation, security and scalability of your site.",
  },
  {
    number: "03.",
    title: "UI / UX DESIGN",
    description:
      "We ensure your website has a user-friendly and visually appealing design. With our UI/UX design service, we create an aesthetic and functional experience that resonates with your target audience. Our user-centric designs make the interaction process simple, intuitive, and enjoyable for visitors. Additionally, we provide responsive designs that work flawlessly across all devices, ensuring the best experience for both mobile and desktop users.",
  },
  {
    number: "04.",
    title: "TECHNICAL CONSULTING",
    description:
      "With our technical consulting service, we are here to understand the technological needs of your business and find the most viable solutions. Our team of experts provides you with strategic guidance by analyzing your business’ growth goals and operational challenges. We keep abreast of the latest technologies and trends in the industry and recommend and implement best practices.",
  },
  {
    number: "05.",
    title: "MOBILE APP DEVELOPMENT",
    description:
      "We offer mobile app development services to help you manage your business effortlessly on the go. Specializing in creating user-friendly and functional mobile applications, we design solutions tailored to your business or product needs. We focus on seamless user experiences and all required features your business or product needs like task management, payment processing, and notifications to ensure your mobile app simplifies operations and enhances efficiency.",
  },
  {
    number: "06.",
    title: "BRAND IDENTITY",
    description:
      "We ensure your brand identity stands out in a strong and impactful way. We offer a customized identity design based on your brand’s vision, values, and target audience. Through logo design, color palettes, typography, and other graphic elements, we create a consistent and memorable representation of your brand. A strong brand identity is not just about visual design, but also about effectively communicating your brand’s personality and message.",
  },
];

// ! Minimum Delay: 2150 milliseconds

export default function Home() {
  return (
    <>
      <Head></Head>
      <section className="my-12">
        <Container>
          <section className="lg:grid lg:grid-cols-12 gap-4 mt-16 w-full">
            <section className="lg:self-end col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              <p className="text-3xl font-[200] text-center lg:text-justify whitespace-pre-line">
                Contact us for UI{"\n"}Design and Software{"\n"}Development
                Projects
              </p>
            </section>
            <section className="col-span-12 lg:col-span-4 flex flex-col justify-center lg:justify-start mb-12 lg:mb-0">
              <motion.img
                src="/logo.png"
                alt="Dismas"
                className="w-52 lg:w-96 mx-auto mb-12"
                initial={{ scale: 1.25 }}
                animate={{ scale: [1.25, 1] }}
                exit={{ scale: 1 }}
                transition={{ delay: 2.5, ease: "easeOut", type: "tween" }}
              />
              <Link href={"#about"} className="mx-auto">
                <button className="relative px-6 py-3 text-white font-semibold uppercase tracking-wide rounded-md border border-transparent bg-transparent">
                  <span className="absolute inset-0 border border-transparent bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300"></span>
                  <span className="absolute inset-[1px] bg-black"></span>
                  <span className="relative">EXPLORE DISMAS</span>
                </button>
              </Link>
            </section>
            <section className="col-span-12 lg:col-span-4 text-end ms-auto">
              <p className="text-3xl font-[200] text-center lg:text-justify whitespace-pre-line">
                DISMAS is TRNC{"\n"}based design and{"\n"}Development Studio
              </p>
            </section>
          </section>
        </Container>
        <section className="hidden my-40 lg:flex items-center justify-center overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex items-center space-x-[50vw] sm:space-x-10 text-7xl font-[300]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <span>CREATIVE & DEVELOPMENT</span>
            <img src="/Vector.png" width={96} height={96} alt="icon" />
            <span>CREATIVE & DEVELOPMENT</span>

            <span>CREATIVE & DEVELOPMENT</span>
            <img src="/Vector.png" width={96} height={96} alt="icon" />
            <span>CREATIVE & DEVELOPMENT</span>
          </motion.div>
        </section>
        <section className="flex my-40 lg:hidden items-center justify-center overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex items-center space-x-[20vw] sm:space-x-10 text-4xl sm:text-7xl font-[300]"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <span className="me-16">CREATIVE & DEVELOPMENT</span>
            <img
              src="/Vector.png"
              width={64}
              height={64}
              alt="icon"
              className="mx-auto"
            />
            <span>CREATIVE & DEVELOPMENT</span>
            <span>CREATIVE & DEVELOPMENT</span>
            <img
              src="/Vector.png"
              width={64}
              height={64}
              alt="icon"
              className="mx-auto"
            />
            <span>CREATIVE & DEVELOPMENT</span>
          </motion.div>
        </section>
        <section id="about" className="relative my-96">
          <Container>
            <section className="border rounded-full me-auto px-8 py-1 mb-8">
              <span className="font-[300] text-2xl lg:text-4xl text-start">
                ABOUT
              </span>
            </section>
            <section className="">
              <p className="font-[200] lg:w-[60%] text-3xl lg:text-6xl mb-8 lg:mb-0 text-justify">
                Dismas is more than our name, it’s a symbol of who we are and
                what we stand for. Historically, mottos were war-cries of
                sentiment, hope and purpose. We create mottos for our clients
                that serve as a rallying car.
              </p>
            </section>
          </Container>
          <img
            src="/about_icon.png"
            alt="Dismas About"
            className="hidden lg:block w-[60%] absolute -bottom-20 right-0 translate-x-1/4 translate-y-1/2"
          />
          <img
            src="/about_icon.png"
            alt="Dismas About"
            className="block lg:hidden w-[80%] mx-auto"
          />
        </section>
        <Container>
          <section id="services" className="w-full mb-96 select-none">
            <section className="border rounded-full inline-block text-start px-8 py-1 mb-8">
              <span className="font-[300] text-2xl lg:text-4xl">SERVICES</span>
            </section>
            <section className="border rounded bg-[#0f0f0f]">
              {services.map((service) => (
                <section className="lg:grid lg:grid-cols-12 lg:items-center gap-4 p-10 border-b last:border-b-0">
                  <section className="col-span-1 text-3xl">
                    {service.number}
                  </section>
                  <section className="col-span-4 text-3xl mb-4 last:mb-0 lg:mb-0">
                    {service.title}
                  </section>
                  <section className="col-span-7 text-justify text-muted">
                    {service.description}
                  </section>
                </section>
              ))}
            </section>
          </section>
          <section id="projects" className="mb-48">
            <Projects />
          </section>
          <section
            id="contact"
            className="flex items-center justify-center mb-24"
          >
            <section className="border rounded-full inline-block text-start px-8 py-1">
              <span className="font-[300] text-2xl lg:text-4xl">CONTACT</span>
            </section>
          </section>
          <section className="text-center">
            <a
              href="mailto:DISMAS@STUDIO.COM"
              className="text-3xl lg:text-6xl font-[300] hover:opacity-80 transition-all"
            >
              DISMAS@STUDIO.COM
            </a>
          </section>
        </Container>
      </section>
    </>
  );
}
