import Container from "@/components/Container";
import Projects from "@/components/home/Projects";
import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import Contact from "@/components/home/Contact";
import Services from "@/components/home/Services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

const main_words_1_en = `
Contact us for UI
Design and Software
Development Projects`;

const main_words_1_tr = `
UI Tasarımı ve Yazılım
Geliştirme projeleri için
bizimle iletişime geçin
`;

const main_words_2_en = `
DISMAS is TRNC
based design and
Development Studio
`;

const main_words_2_tr = `
DISMAS, KKTC merkezli
bir tasarım ve yazılım
geliştirme stüdyosudur
`;

const flip_words_en = [
  "Dismas is more than our name, it’s a symbol of who we are and what we stand for. Historically, mottos were war-cries of sentiment, hope and purpose. We create mottos for our clients that serve as a rallying car.",
];

const flip_words_tr = [
  "Dismas, sadece bir isim değil, kim olduğumuzun ve neyi temsil ettiğimizin bir sembolüdür. Tarih boyunca sloganlar, duygu, umut ve amaç içeren savaş naraları olmuştur. Müşterilerimiz için, onları bir araya getiren ve motive eden sloganlar oluşturuyoruz.",
];

// ! Minimum Delay: 2150 milliseconds

export default function Home() {
  const { t, i18n } = useTranslation();

  const aboutRef = useRef(null);
  const [lang, setLang] = useState(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);

  useEffect(() => {
    if (i18n.isInitialized) setLang(i18n.language);
  }, [i18n.language, i18n.isInitialized]);

  if (!lang) return;

  return (
    <>
      <Head></Head>
      <section className="my-12">
        <Container>
          <section className="lg:grid lg:grid-cols-12 gap-4 mt-16 w-full">
            <section className="lg:self-end col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              {/* <p className="text-3xl font-[200] text-center lg:text-justify whitespace-pre-line">
                Contact us for UI{"\n"}Design and Software{"\n"}Development
                Projects
              </p> */}
              <TextGenerateEffect
                words={lang === "en" ? main_words_1_en : main_words_1_tr}
              />
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
              <motion.section
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: [10, 0], opacity: [0, 1] }}
                exit={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.75, delay: 4.5 }}
                className="flex items-center justify-center py-4"
              >
                <Link href={"#about"} className="group mx-auto">
                  <button className="relative px-12 py-6 text-white font-semibold uppercase tracking-[5px] rounded-md border border-transparent bg-transparent">
                    <span className="absolute inset-0 border border-transparent bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400"></span>
                    <span className="absolute inset-[1px] bg-black"></span>
                    <span className="relative text-medium tracking-menuSpacing font-slim hover:text-muted transition-all">
                      {t("explore_dismas")}
                    </span>
                  </button>
                </Link>
              </motion.section>
            </section>
            <section className="col-span-12 lg:col-span-4 text-end ms-auto">
              {/* <p className="text-3xl font-[200] text-center lg:text-justify whitespace-pre-line">
                DISMAS is TRNC{"\n"}based design and{"\n"}Development Studio
              </p> */}
              <TextGenerateEffect
                words={lang === "en" ? main_words_2_en : main_words_2_tr}
              />
            </section>
          </section>
        </Container>
        <section className="hidden my-20 lg:flex items-center justify-center overflow-hidden whitespace-nowrap">
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
        <section ref={aboutRef} id="about" className="relative my-96">
          <Container>
            <section className="border rounded-full me-auto px-8 py-2 mb-8">
              <span className="font-[300] text-large tracking-menuSpacing">
                ABOUT
              </span>
            </section>
            <section className="font-slim leading-heroLine">
              {/* <p className="font-[200] lg:w-[60%] text-3xl lg:text-6xl mb-8 lg:mb-0 text-justify">
                Dismas is more than our name, it’s a symbol of who we are and
                what we stand for. Historically, mottos were war-cries of
                sentiment, hope and purpose. We create mottos for our clients
                that serve as a rallying car.
              </p> */}
              <FlipWords
                lang={lang}
                words={lang === "en" ? flip_words_en : flip_words_tr}
              />
            </section>
          </Container>
          <motion.img
            src="/about_icon.png"
            alt="Dismas About"
            className="hidden lg:block w-[60%] absolute -bottom-1/2 right-0 translate-x-1/4 translate-y-1/2"
            initial={{ opacity: 0 }}
            // whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ opacity }}
          />

          <motion.img
            src="/about_icon.png"
            alt="Dismas About"
            className="block lg:hidden w-[80%] mx-auto"
            initial={{ opacity: 0 }}
            // whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ opacity }}
          />
        </section>
        <Services />
        <section id="projects" className="mb-48">
          <Projects />
        </section>
        <Container>
          <Contact />
        </Container>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
