import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function Values() {
  const { langValue } = useLanguage();
  return (
    <section id="values" class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              {langValue["valuesTitle"]}
            </h2>
            <p class="text-xl text-white/70">
              {langValue["valuesSubtitle"]}
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                <i class="ri-layout-line text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">{langValue["valuesSimplicity"]}</h3>
              <p class="text-white/70 leading-relaxed">
                {langValue["valuesSimplicityDesc"]}
              </p>
            </div>
            <div class="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                <i class="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">{langValue["valuesTrust"]}</h3>
              <p class="text-white/70 leading-relaxed">
                {langValue["valuesTrustDesc"]}
              </p>
            </div>
            <div class="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                <i class="ri-lightbulb-line text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">{langValue["valuesInnovation"]}</h3>
              <p class="text-white/70 leading-relaxed">
                {langValue["valuesInnovationDesc"]}
              </p>
            </div>
            <div class="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                <i class="ri-heart-line text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">{langValue["valuesComfort"]}</h3>
              <p class="text-white/70 leading-relaxed">
                {langValue["valuesComfortDesc"]}
              </p>
            </div>
            <div class="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                <i class="ri-eye-line text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">{langValue["valuesTransparency"]}</h3>
              <p class="text-white/70 leading-relaxed">
                {langValue["valuesTransparencyDesc"]}
              </p>
            </div>
            <div class="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                <i class="ri-customer-service-line text-3xl text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3">{langValue["valuesSupport"]}</h3>
              <p class="text-white/70 leading-relaxed">
                {langValue["valuesSupportDesc"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
