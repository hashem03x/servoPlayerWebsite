import React, { useEffect, useState } from "react";
import logo from "../../assets/Image/logo_with_text.png";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Footer() {
  const [count, setCount] = useState(0);
  const { langValue } = useLanguage();

  useEffect(() => {}, []);

  return (
    <footer className="bg-[#0a0e1a] border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img alt="SERVO" className="h-16 w-auto mb-4" src={logo} />
            <p className="text-white/60 text-sm leading-relaxed">
              {langValue["footerDescription"]}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{langValue["quickLinks"]}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#who-we-are"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["whoWeAre"]}
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["features"]}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["howItWorks"]}
                </a>
              </li>
              <li>
                <a
                  href="#reseller"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["becomeReseller"]}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{langValue["support"]}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["contactUs"]}
                </a>
              </li>
              <li>
                <a
                  href="#manage-devices"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["manageDevices"]}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["faq"]}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["documentation"]}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{langValue["legal"]}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["privacyPolicy"]}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["termsOfService"]}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#1CF1FF] transition-colors text-sm cursor-pointer"
                >
                  {langValue["cookiePolicy"]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            {langValue["copyright"]}
          </p>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[#1CF1FF] text-sm transition-colors cursor-pointer"
          >
            {langValue["poweredBy"]}
          </a>
        </div>
      </div>
    </footer>
  );
}
