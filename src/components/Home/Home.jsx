import { useEffect, useRef, useState } from "react";
import classes from "./Home.module.css";
import Contact from "../Contact/Contact";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Loader from "../Loader/Loader.jsx";
import { useLanguage } from "../../contexts/LanguageContext";
import logo from "../../assets/Image/logo_with_text.png";
import { useLocation, useNavigate } from "react-router-dom";
import WhoWeAre from "../About/WhoWeAre/WhoWeAre.jsx";
import Vision from "../Vision/Vision.jsx";
import Mission from "../Mission/Mission.jsx";
import Features from "../Features/Features.jsx";
import Values from "../Values/Values.jsx";
import HowItWorks from "../HowItWorks/HowItWorks.jsx";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs.jsx";
import { Lang } from "../../lang.jsx";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoader, setIsLoader] = useState(true);
  const [showNotice, setShowNotice] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const queryMacAddress = query.get("macAddress");
  const queryDeviceKey = query.get("deviceKey");

  const { langValue, selectedLanguage } = useLanguage();
  const textRef = useRef();

  const checkAuth = () => {
    const token = localStorage.getItem("authToken");
    return token ? true : false;
  };

  useEffect(() => {
    const loggedIn = checkAuth();
    setIsLoggedIn(loggedIn);
    setTimeout(() => setIsLoader(false), 1000);
  }, []);

  useEffect(() => {
    // Redirect to login page if query parameters are present
    if (queryMacAddress && queryDeviceKey) {
      navigate(`/login?macAddress=${queryMacAddress}&deviceKey=${queryDeviceKey}`);
    }
  }, [queryMacAddress, queryDeviceKey, navigate]);

  useEffect(() => {
    const handleLoad = () => {
      const element = textRef.current;
      if (!element) return;

      const highlightPhrases = {
        en: "fast performance powered by AI",
        ar: "أداء ذكي وسريع مدعوم بالذكاء الاصطناعي",
        es: "rendimiento inteligente y rápido impulsado por IA",
        pt: "desempenho inteligente e rápido alimentado por IA",
      };

      const phrase = highlightPhrases[selectedLanguage];
      const fullText = Lang[selectedLanguage]?.heroText || "";

      if (!fullText) return;

      const highlighted = fullText.replace(
        phrase,
        `<span style="font-weight:bold; color:#00bbff;">${phrase}</span>`
      );

      element.innerHTML = highlighted;
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [selectedLanguage, langValue]);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <section className={classes.home} id="home">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/60 via-[#0a0e1a]/80 to-[#0a0e1a]">
              <div className="relative z-[10] text-white h-full lg:h-screen p-6 lg:p-16 text-center flex justify-center items-center flex-col">
                <img className="w-[160px]" src={logo} alt="ServoPlayer" />
                <h1
                  className={`${classes.managePlaylist_title} text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight`}
                >
                  {langValue["FEELTHEFLOW"]}
                </h1>
                <div
                  className={`container h-full ${isLoggedIn
                    ? `text-center lg:mt-44 ${classes.wish_responive}`
                    : ""
                    }`}
                >
                  <div className={`${classes.parent_title}`}>
                    {/* <h1
                      className={`text-xl md:text-2xl text-white/90 mb-4 font-light`}
                    >
                      {langValue["heroSubTitle"]}
                    </h1> */}
                    <p
                      ref={textRef}
                      className="text-xl md:text-2xl text-white/90 mb-4 font-light"
                      dangerouslySetInnerHTML={{
                        __html: langValue["heroText"],
                      }}
                    ></p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a
                        href="#how-it-works"
                        class="px-8 py-4 bg-gradient-to-r from-[#0066CC] to-[#1CF1FF] text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#1CF1FF]/50 transition-all duration-300 whitespace-nowrap cursor-pointer"
                      >
                        Get Started Now
                      </a>
                      <a
                        href="#reseller"
                        class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/20 hover:border-[#1CF1FF] transition-all duration-300 whitespace-nowrap cursor-pointer"
                      >
                        Become a Reseller
                      </a>
                    </div>
                  </div>
                </div>
             
              </div>
            </div>
              {showNotice && (
  <div
    className="
      absolute
      bottom-4 md:bottom-8
      right-2 md:right-6 lg:right-10
      z-20
      w-[95%]
      sm:w-[90%]
      md:w-[80%]
      lg:w-3/4
      max-w-5xl
    "
  >
    <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-b from-[#0066cc]/60 via-[#1cf1ff]/80 to-[#0066cc] text-white p-4 sm:p-6 md:p-8 lg:p-10">

      <button
        onClick={() => setShowNotice(false)}
        className="
          absolute
          top-3 right-3
          md:top-4 md:right-4
          w-8 h-8 md:w-10 md:h-10
          flex items-center justify-center
          rounded-full
          text-2xl md:text-3xl
          text-white
          hover:bg-white/10
          transition
        "
      >
        ×
      </button>

      <p className="pr-10 md:pr-14 text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed font-medium">
        <span className="font-bold">SERVO PLAYER</span> does not provide,
        sell, or distribute any content, channels, playlists, or
        subscriptions. SERVO Player is a media player application only and
        does not include any preloaded content. Users must obtain and manage
        their content from authorized sources. SERVO Player is not
        responsible for the content accessed or used within the application.
        A valid license is required after the trial period. All purchases
        are final and non-refundable.
      </p>

    </div>
  </div>
)}
            <FloatingWhatsApp
              phoneNumber="+1234567890" // Replace with your WhatsApp number
              accountName={langValue["whatsappAccountName"]} // Customize with your name or business name
              avatar={logo} // Optional avatar or logo image
              statusMessage={langValue["whatsappStatusMessage"]}
              chatMessage={langValue["whatsappChatMessage"]}
              allowEsc
              allowClickAway
              className="text-black w-[18rem]"
              placeholder={langValue["whatsappPlaceholder"]}
            />

          </section>


          <WhoWeAre />
          <Vision />
          <Mission />
          <Values />
          <Features />
          <HowItWorks />
          <WhyChooseUs />
          <Contact />
        </>
      )}
    </>
  );
}
