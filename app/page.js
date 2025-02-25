"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkTheme(true);
    } else {
      setIsDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkTheme]);

  return (
    <>
      <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Header isDarkTheme={isDarkTheme} />
      <About isDarkTheme={isDarkTheme} />
      <Skills isDarkTheme={isDarkTheme} />
      <Projects isDarkTheme={isDarkTheme} />
      <Contact isDarkTheme={isDarkTheme} />
      <Footer isDarkTheme={isDarkTheme} />
    </>
  );
}
