"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

export default function TozzaBoutiquePage() {
  const [dark, setDark] = useState(true); // dark mode como padrão

  // Persiste a preferência de tema no HTML para o Tailwind funcionar
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggleDark = () => setDark(!dark);

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header dark={dark} toggleDark={toggleDark} />
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
