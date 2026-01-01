import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function Vision() {
  const { langValue } = useLanguage();
  return (
    <section id="vision" class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] mb-8">
            <i class="ri-eye-line text-4xl text-white"></i>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
            {langValue["visionTitle"]}
          </h2>
          <p class="text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
            {langValue["visionText"]}{" "}
            <span class="text-[#1CF1FF] font-semibold">{langValue["visionTrusted"]}</span>,{" "}
            <span class="text-[#1CF1FF] font-semibold">{langValue["visionUserFriendly"]}</span>,{" "}
            <span class="text-[#1CF1FF] font-semibold">{langValue["visionFutureReady"]}</span>{" "}
            {langValue["visionTextEnd"]}
          </p>
          <div class="mt-16 grid grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-5xl font-bold text-[#1CF1FF] mb-2">01</div>
              <div class="text-white/70">{langValue["visionTrustedLabel"]}</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-[#1CF1FF] mb-2">02</div>
              <div class="text-white/70">{langValue["visionUserFriendlyLabel"]}</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-[#1CF1FF] mb-2">03</div>
              <div class="text-white/70">{langValue["visionFutureReadyLabel"]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
