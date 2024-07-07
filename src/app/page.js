"use client";
import ContactMe from "@/components/contact-me";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { LandingPage } from "@/components/landing-page";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <LandingPage />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <ContactMe />
      <hr />
      <Footer />
      <hr />
    </>
  );
}
