import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function HowItWorks() {
  const { langValue } = useLanguage();
  return (
    <section id="how-it-works" class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              {langValue["howItWorksTitle"]}
            </h2>
            <p class="text-xl text-white/70">
              {langValue["howItWorksSubtitle"]}
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div class="relative">
              <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1CF1FF] transition-all duration-300 h-full">
                <div class="flex flex-col items-center text-center">
                  <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center mb-6 shadow-lg shadow-[#1CF1FF]/30">
                    <i class="ri-download-cloud-line text-4xl text-white"></i>
                  </div>
                  <div class="text-6xl font-bold text-[#1CF1FF]/20 mb-4">1</div>
                  <h3 class="text-2xl font-bold text-white mb-4">
                    {langValue["howItWorksStep1Title"]}
                  </h3>
                  <p class="text-white/80 leading-relaxed mb-4">
                    {langValue["howItWorksStep1Desc"]}
                  </p>
                  <p class="text-sm text-[#1CF1FF] font-semibold mb-2">
                    {langValue["howItWorksStep1Note"]}
                  </p>
                  <p class="text-sm text-white/60">
                    {langValue["howItWorksStep1ComingSoon"]}
                  </p>
                </div>
              </div>
              <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <i class="ri-arrow-right-line text-3xl text-[#1CF1FF]"></i>
              </div>
            </div>
            <div class="relative">
              <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1CF1FF] transition-all duration-300 h-full">
                <div class="flex flex-col items-center text-center">
                  <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center mb-6 shadow-lg shadow-[#1CF1FF]/30">
                    <i class="ri-key-line text-4xl text-white"></i>
                  </div>
                  <div class="text-6xl font-bold text-[#1CF1FF]/20 mb-4">2</div>
                  <h3 class="text-2xl font-bold text-white mb-4">
                    {langValue["howItWorksStep2Title"]}
                  </h3>
                  <p class="text-white/80 leading-relaxed mb-4">
                    {langValue["howItWorksStep2Desc"]}
                  </p>
                </div>
              </div>
              <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <i class="ri-arrow-right-line text-3xl text-[#1CF1FF]"></i>
              </div>
            </div>
            <div class="relative">
              <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1CF1FF] transition-all duration-300 h-full">
                <div class="flex flex-col items-center text-center">
                  <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center mb-6 shadow-lg shadow-[#1CF1FF]/30">
                    <i class="ri-play-circle-line text-4xl text-white"></i>
                  </div>
                  <div class="text-6xl font-bold text-[#1CF1FF]/20 mb-4">3</div>
                  <h3 class="text-2xl font-bold text-white mb-4">
                    {langValue["howItWorksStep3Title"]}
                  </h3>
                  <p class="text-white/80 leading-relaxed mb-4">
                    {langValue["howItWorksStep3Desc"]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 class="text-2xl font-bold text-white mb-6 text-center">
              {langValue["howItWorksAvailablePlatforms"]}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div class="flex flex-col items-center justify-center p-4 rounded-xl border bg-gradient-to-br from-[#0066CC]/20 to-[#1CF1FF]/20 border-[#1CF1FF]/50">
                <div class="w-12 h-12 flex items-center justify-center mb-2 text-[#1CF1FF]">
                  <i class="ri-tv-line text-3xl"></i>
                </div>
                <div class="text-sm font-medium text-white">Samsung</div>
              </div>
              <div class="flex flex-col items-center justify-center p-4 rounded-xl border bg-gradient-to-br from-[#0066CC]/20 to-[#1CF1FF]/20 border-[#1CF1FF]/50">
                <div class="w-12 h-12 flex items-center justify-center mb-2 text-[#1CF1FF]">
                  <i class="ri-tv-2-line text-3xl"></i>
                </div>
                <div class="text-sm font-medium text-white">LG</div>
              </div>
              <div class="flex flex-col items-center justify-center p-4 rounded-xl border bg-white/5 border-white/10">
                <div class="w-12 h-12 flex items-center justify-center mb-2 text-white/40">
                  <i class="ri-android-line text-3xl"></i>
                </div>
                <div class="text-sm font-medium text-white/40">Android TV</div>
                <div class="text-xs text-white/40 mt-1">{langValue["howItWorksComingSoon"]}</div>
              </div>
              <div class="flex flex-col items-center justify-center p-4 rounded-xl border bg-white/5 border-white/10">
                <div class="w-12 h-12 flex items-center justify-center mb-2 text-white/40">
                  <i class="ri-apple-line text-3xl"></i>
                </div>
                <div class="text-sm font-medium text-white/40">iOS</div>
                <div class="text-xs text-white/40 mt-1">{langValue["howItWorksComingSoon"]}</div>
              </div>
              <div class="flex flex-col items-center justify-center p-4 rounded-xl border bg-white/5 border-white/10">
                <div class="w-12 h-12 flex items-center justify-center mb-2 text-white/40">
                  <i class="ri-windows-line text-3xl"></i>
                </div>
                <div class="text-sm font-medium text-white/40">Windows</div>
                <div class="text-xs text-white/40 mt-1">{langValue["howItWorksComingSoon"]}</div>
              </div>
              <div class="flex flex-col items-center justify-center p-4 rounded-xl border bg-white/5 border-white/10">
                <div class="w-12 h-12 flex items-center justify-center mb-2 text-white/40">
                  <i class="ri-apple-line text-3xl"></i>
                </div>
                <div class="text-sm font-medium text-white/40">Apple TV</div>
                <div class="text-xs text-white/40 mt-1">{langValue["howItWorksComingSoon"]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
