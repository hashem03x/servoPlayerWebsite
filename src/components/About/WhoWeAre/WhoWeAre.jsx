import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

function WhoWeAre() {
  const { langValue } = useLanguage();
  return (
    <section id="who-we-are" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text Section */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {langValue["whoWeAreTitle"]}
              </h2>
              <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                <p>
                  {langValue["whoWeAreText1"]}{" "}
                  <span className="text-[#1CF1FF] font-semibold">
                    {langValue["whoWeAreText2"]}
                  </span>
                  {langValue["whoWeAreText3"]}
                </p>
                <p>
                  {langValue["whoWeAreText4"]}
                </p>
                <p className="text-xl font-medium text-white">
                  {langValue["whoWeAreText5"]}
                </p>
                <p>
                  {langValue["whoWeAreText6"]}
                </p>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="Who We Are"
                  className="w-full h-full object-cover"
                  src="https://readdy.ai/api/search-image?query=Modern%20professional%20team%20working%20with%20streaming%20technology%20and%20digital%20interfaces%20in%20sleek%20contemporary%20office%20environment%20with%20blue%20cyan%20accent%20lighting%20showing%20innovation%20and%20collaboration%20clean%20minimalist%20aesthetic%20representing%20technology%20company%20culture&width=800&height=600&seq=who-we-are-001&orientation=landscape"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
