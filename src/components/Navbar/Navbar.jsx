import React, { useEffect, useState } from "react";
import { Link, Link as ScrollLink, animateScroll } from "react-scroll";
import {
  NavLink,
  Link as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import styles from "./Navbar.module.css";
import flagEn from "../../assets/Image/FlagKingdom.svg";
import flagAr from "../../assets/Image/egypt.png";
import flagEs from "../../assets/Image/Flag_of_Spain.svg.png";
import flagPt from "../../assets/Image/Flag_of_Portugal.svg.webp";
import { useLanguage } from "../../contexts/LanguageContext";
import logo from "../../assets/Image/logo_with_text.png";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation(); // To determine the current path
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const { selectedLanguage, langValue, changeLanguage } = useLanguage();

  const checkAuth = () => {
    const token = localStorage.getItem("authToken");
    if (token) navigate("/manageplaylist");
    return token ? true : false;
  };

  const languages = [
    {
      name: "English",
      code: "en",
      flag: `${flagEn}`,
    },
    {
      name: "Arabic",
      code: "ar",
      flag: `${flagAr}`,
    },
    {
      name: "Spanish",
      code: "es",
      flag: `${flagEs}`,
    },
    {
      name: "Portugese",
      code: "pt",
      flag: `${flagPt}`,
    },
  ];
  const handleLanguageChange = (language) => {
    changeLanguage(language.code);
  };
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const loggedIn = checkAuth();
    setIsLoggedIn(loggedIn);
  }, []);

  // Function to handle scroll and routing
  const handleScrollOrRoute = (scrollTarget) => {
    if (location.pathname === "/" || location.pathname === "") {
      animateScroll.scrollTo(
        document.getElementById(scrollTarget).offsetTop - 70
      );
      ScrollLink.scrollTo(scrollTarget);
    } else {
      navigate("/");
      setTimeout(() => {
        animateScroll.scrollTo(
          document.getElementById(scrollTarget).offsetTop - 70
        );
        ScrollLink.scrollTo(scrollTarget);
      }, 50);
    }
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-white/5"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 w-[90%]">
        <div>
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="text-white text-2xl">
              <img src={logo} className="w-14" alt="wishtv" />
            </span>
          </NavLink>
        </div>

        <div className="flex items-center  md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <div className="relative inline-block text-left">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setisDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={
                  languages.find((lang) => lang.code === selectedLanguage)?.flag
                }
                alt="Flag"
                className="w-5 h-5 rounded-sm mt-[5px] ml-[5px]"
              />
              <span className="text-gray-700 font-medium">
                {languages.find((lang) => lang.code === selectedLanguage)?.code}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {isDropdownOpen && (
              <div className="absolute mt-2 w-[7.5rem] bg-white border rounded-md shadow-lg">
                {languages.map((language) => (
                  <div
                    key={language.code}
                    className={`flex items-center p-2 cursor-pointer hover:bg-gray-100 ${
                      selectedLanguage === language.name
                        ? "bg-blue-100 text-blue-700"
                        : ""
                    }`}
                    onClick={() => handleLanguageChange(language)}
                  >
                    <img
                      src={language.flag}
                      alt={language.name}
                      className="w-5 h-5 rounded-sm mr-2"
                    />
                    <span className="text-gray-700">{language.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button
              data-collapse-toggle="navbar-language"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`p-3 items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto`}
          id="navbar-language"
        >
          <ul
            className={`${styles.header_links} flex flex-col font-medium gap-y-3 p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          >
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  handleScrollOrRoute("home");
                  setIsMenuOpen(false);
                }}
                className="text-white cursor-pointer"
              >
                {langValue["home"]}
              </ScrollLink>
            </li>
            <li>
              {!isLoggedIn && (
                <NavLink
                  to="login"
                  className="text-white cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {langValue["Login"]}
                </NavLink>
              )}
            </li>
            <li>
              <ScrollLink
                to="who-we-are"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  handleScrollOrRoute("who-we-are");
                  setIsMenuOpen(false);
                }}
                className="text-white cursor-pointer"
              >
                {langValue["WhoWeAre"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="vision"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  handleScrollOrRoute("vision");
                  setIsMenuOpen(false);
                }}
                className="text-white cursor-pointer"
              >
                {langValue["vision"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="features"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  handleScrollOrRoute("features");
                  setIsMenuOpen(false);
                }}
                className="text-white cursor-pointer"
              >
                {langValue["features"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="how-it-works"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  handleScrollOrRoute("how-it-works");
                  setIsMenuOpen(false);
                }}
                className="text-white cursor-pointer"
              >
                {langValue["howitworks"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="reseller"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  handleScrollOrRoute("reseller");
                  setIsMenuOpen(false);
                }}
                className="text-white cursor-pointer"
              >
                {langValue["reseller"]}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  handleScrollOrRoute("contact");
                  setIsMenuOpen(false);
                }}
                className="text-white cursor-pointer"
              >
                {langValue["contact"]}
              </ScrollLink>
            </li>
            <li>
              {isLoggedIn && (
                <NavLink
                  to="manageplaylist"
                  className="text-white cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {langValue["ManagePlaylistTitle"]}
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Button */}

      {/* Menu Items */}
    </nav>
  );
}
