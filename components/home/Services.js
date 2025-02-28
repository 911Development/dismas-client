import { motion } from "framer-motion";
import Container from "../Container";
import { useTranslation } from "react-i18next";

const services = [
  {
    number: "01.",
    title: "services_title_01",
    description: "services_01_desc",
  },
  {
    number: "02.",
    title: "services_title_02",
    description: "services_02_desc",
  },
  {
    number: "03.",
    title: "services_title_03",
    description: "services_03_desc",
  },
  {
    number: "04.",
    title: "services_title_04",
    description: "services_04_desc",
  },
  {
    number: "05.",
    title: "services_title_05",
    description: "services_05_desc",
  },
  {
    number: "06.",
    title: "services_title_06",
    description: "services_06_desc",
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section id="services" className="w-full mb-96 select-none">
        <section className="flex items-center justify-start mb-10">
          <section className="border rounded-full inline-block text-start px-8 py-2">
            <span className="font-[300] text-large tracking-menuSpacing">
              SERVICES
            </span>
          </section>
        </section>
        <section className="border rounded glass">
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
                {t(service.title)}
              </section>
              <section className="col-span-7 text-justify text-muted">
                {t(service.description)}
              </section>
            </motion.section>
          ))}
        </section>
      </section>
    </Container>
  );
};

export default Services;
