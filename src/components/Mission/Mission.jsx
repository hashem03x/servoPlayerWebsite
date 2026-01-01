import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function Mission() {
  const { langValue } = useLanguage();
  return (
    <section id="mission" class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl mx-auto">
          <div class="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] rounded-full blur-3xl opacity-20"></div>
            <div class="relative z-10">
              <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] mb-8">
                <i class="ri-rocket-line text-4xl text-white"></i>
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
                {langValue["missionTitle"]}
              </h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#1CF1FF]/20 flex items-center justify-center mt-1">
                    <i class="ri-user-star-line text-[#1CF1FF]"></i>
                  </div>
                  <p class="text-xl text-white/90 leading-relaxed">
                    {langValue["missionText1"]}{" "}
                    <span class="text-[#1CF1FF] font-semibold">
                      {langValue["missionText1Highlight"]}
                    </span>{" "}
                    {langValue["missionText1End"]}
                  </p>
                </div>
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#1CF1FF]/20 flex items-center justify-center mt-1">
                    <i class="ri-store-line text-[#1CF1FF]"></i>
                  </div>
                  <p class="text-xl text-white/90 leading-relaxed">
                    {langValue["missionText2"]}{" "}
                    <span class="text-[#1CF1FF] font-semibold">
                      {langValue["missionText2Highlight"]}
                    </span>{" "}
                    {langValue["missionText2End"]}
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

export default Mission;
