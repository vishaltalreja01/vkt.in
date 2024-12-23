import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import LoadingBar from "react-top-loading-bar";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Set scrolled to true if the page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener on component unmount
  }, []);

  useEffect(() => {
    // Simulate a loading bar when the location changes
    if (loadingBarRef.current) {
      loadingBarRef.current.staticStart();
      setTimeout(() => loadingBarRef.current.complete(), 500); // Simulate loading completion
    }
  }, [location]);

  const navItem = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Stats", path: "/stats" },
    { name: "Utilities", path: "/utilities" },
    { name: "Blogs", path: "/blogs" },
    { name: "Certificates", path: "/certificates" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <>
      <LoadingBar
        color={theme === "light" ? "#3b82f6" : "#10b981"} // Change color based on theme
        ref={loadingBarRef}
        height={3}
      />
      <div
        className={`fixed w-full dark:text-white top-0 flex items-center justify-between px-4 py-[10px] sm:px-6 z-50 print:hidden transition-all duration-0 ${
          scrolled
            ? "bg-white/80 dark:bg-[#25282A]/80 shadow-md border-b border-gray-200 dark:border-gray-700 backdrop-blur-lg"
            : "dark:bg-[#181a1b]"
        }`}
      >
        <div>
          <a className="mr-3" aria-label="Link to Home Page" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
              fill="none"
              className="relative hidden w-8 h-8 sm:inline-flex"
            >
              <path
                d="M18 0V380.671L260.5 495.5L498 385.055V0M67 17.5H431V126H85V81"
                stroke="currentColor"
                strokeWidth="35"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
              ></path>
              <path
                d="M67.5 327.5L258 416L431.5 341.5V264H84.5V183.5H449"
                stroke="currentColor"
                strokeWidth="35"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
              ></path>
            </svg>
            <div className="w-full sm:!hidden">
              <p
                className="font-sarina"
                style={{
                  opacity: 1,
                  display: "inline-flex",
                  transform: "none",
                }}
              >
                Jatin Sharma
              </p>
            </div>
          </a>
        </div>
        <nav className="z-10 hidden sm:flex md:inset-0 md:justify-center">
          <div className="flex items-center md:gap-2">
            {navItem.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-gray-600 dark:text-gray-300 sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-black/10 dark:hover:bg-neutral-700/50 rounded-md ${
                  location.pathname === item.path
                    ? "font-bold text-black dark:text-white"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-1 rounded-md hover:bg-black/10 dark:hover:bg-neutral-700/50"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>
      </div>
    </>
  );
}
