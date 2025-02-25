import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import themeIcon from "../assets/night-mode.png";
import hamburgerIcon from "../assets/menu.png";
import whiteHamburgerIcon from "../assets/menu-white.png";
import closeIcon from "../assets/cross.png";
import sunIcon from "../assets/sun_icon.png";
import bgHeader from "../assets/header-bg-color.png";
import closeWhite from "../assets/close-white.png";

const Navbar = ({ isDarkTheme, setIsDarkTheme }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, [setIsDarkTheme]);

  return (
    <>
      {/* Background Header Effect */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={bgHeader} alt="bg-header" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] pb-2 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <Link href="#top">
          <Image src={logo} alt="logo" className="w-28 cursor-pointer mr-14" />
        </Link>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {["Home", "About me", "Projects", "Tech Stack", "Contact me"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  className="font-ovo"
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="md:mr-6">
            <Image
              src={isDarkTheme ? sunIcon : themeIcon}
              alt="theme-change-icon"
              className="w-7"
            />
          </button>

          {/* Contact Button (Desktop) */}
          <Link
            className="hidden lg:flex items-center px-5 py-2 border border-gray-500 rounded-full ml-3 font-ovo dark:border-white/50"
            href="#contact"
          >
            Contact ↗️
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="block md:hidden ml-3 mr-6"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image
              src={isDarkTheme ? whiteHamburgerIcon : hamburgerIcon}
              alt="menu-icon"
              className="w-7"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 right-0 w-64 h-screen bg-rose-50 dark:bg-darkHover dark:text-white transition-transform duration-500 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-64"
          } flex flex-col gap-4 py-20 px-10 z-50`}
        >
          {/* Close Button */}
          <button
            className="absolute right-6 top-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={isDarkTheme ? closeWhite : closeIcon}
              alt="cross-icon"
              className="w-6"
            />
          </button>

          {/* Menu Links */}
          {["Home", "About me", "Projects", "Tech Stack", "Contact me"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  className="font-ovo"
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
