import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function Features() {
  const { langValue } = useLanguage();
  return (
    <section id="features" class="py-24 relative">
      <div
        class="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            'url("https://readdy.ai/api/search-image?query=Abstract%20flowing%20blue%20cyan%20digital%20waves%20and%20particles%20representing%20streaming%20data%20and%20technology%20features%20in%20dark%20space%20with%20smooth%20gradient%20effects%20modern%20minimalist%20background%20pattern&width=1920&height=1080&seq=features-bg-001&orientation=landscape")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              {langValue["featuresTitle"]}
            </h2>
            <p class="text-xl text-white/70">
              {langValue["featuresSubtitle"]}
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#1CF1FF] transition-all duration-300 group cursor-pointer">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i class="ri-palette-line text-3xl text-white"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-white mb-3">
                    {langValue["featuresModernDesign"]}
                  </h3>
                  <p class="text-white/80 leading-relaxed text-lg">
                    {langValue["featuresModernDesignDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#1CF1FF] transition-all duration-300 group cursor-pointer">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i class="ri-flashlight-line text-3xl text-white"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-white mb-3">
                    {langValue["featuresInstantAccess"]}
                  </h3>
                  <p class="text-white/80 leading-relaxed text-lg">
                    {langValue["featuresInstantAccessDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#1CF1FF] transition-all duration-300 group cursor-pointer">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i class="ri-shield-star-line text-3xl text-white"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-white mb-3">
                    {langValue["featuresSecureStable"]}
                  </h3>
                  <p class="text-white/80 leading-relaxed text-lg">
                    {langValue["featuresSecureStableDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#1CF1FF] transition-all duration-300 group cursor-pointer">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i class="ri-brain-line text-3xl text-white"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-white mb-3">
                    {langValue["featuresInteractiveIntelligence"]}
                  </h3>
                  <p class="text-white/80 leading-relaxed text-lg">
                    {langValue["featuresInteractiveIntelligenceDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#1CF1FF] transition-all duration-300 group cursor-pointer">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i class="ri-search-line text-3xl text-white"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-white mb-3">
                    {langValue["featuresSmartSearch"]}
                  </h3>
                  <p class="text-white/80 leading-relaxed text-lg">
                    {langValue["featuresSmartSearchDesc"]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
