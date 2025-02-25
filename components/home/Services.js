import { motion } from "framer-motion";
import Container from "../Container";

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

const Services = () => {
  return (
    <Container>
      <section id="services" className="w-full mb-96 select-none">
        <section className="border rounded-full inline-block text-start px-8 py-1 mb-8">
          <span className="font-[300] text-2xl lg:text-4xl">SERVICES</span>
        </section>
        <section className="border rounded bg-[#0f0f0f]">
          {services.map((service) => (
            <motion.section
              initial={{ y: 150, opacity: 0.15 }}
              whileInView={{ y: [50, 0], opacity: [0.25, 0.5, 0.75, 1] }}
              transition={{
                ease: "easeOut",
                duration: 0.35,
              }}
              className="lg:grid lg:grid-cols-12 lg:items-center gap-4 p-10 border-b last:border-b-0"
            >
              <section className="col-span-1 text-3xl">
                {service.number}
              </section>
              <section className="col-span-4 text-3xl mb-4 last:mb-0 lg:mb-0">
                {service.title}
              </section>
              <section className="col-span-7 text-justify text-muted">
                {service.description}
              </section>
            </motion.section>
          ))}
        </section>
      </section>
    </Container>
  );
};

export default Services;
