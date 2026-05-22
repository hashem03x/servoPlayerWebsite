import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function WhyChooseUs() {
  const { langValue } = useLanguage();
  return (
    <section id="reseller" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {langValue["whyChooseUsTitle"]}
            </h2>
            <p className="text-xl text-white/70">
              {langValue["whyChooseUsSubtitle"]}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i className="ri-settings-3-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-checkbox-circle-fill text-[#1CF1FF] text-xl"></i>
                    <h3 className="text-lg font-bold text-white">
                      {langValue["whyChooseUsFullControl"]}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {langValue["whyChooseUsFullControlDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i className="ri-24-hours-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-checkbox-circle-fill text-[#1CF1FF] text-xl"></i>
                    <h3 className="text-lg font-bold text-white">
                      {langValue["whyChooseUsSupport"]}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {langValue["whyChooseUsSupportDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-checkbox-circle-fill text-[#1CF1FF] text-xl"></i>
                    <h3 className="text-lg font-bold text-white">
                      {langValue["whyChooseUsPricing"]}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {langValue["whyChooseUsPricingDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i className="ri-gift-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-checkbox-circle-fill text-[#1CF1FF] text-xl"></i>
                    <h3 className="text-lg font-bold text-white">
                      {langValue["whyChooseUsOffers"]}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {langValue["whyChooseUsOffersDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i className="ri-star-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-checkbox-circle-fill text-[#1CF1FF] text-xl"></i>
                    <h3 className="text-lg font-bold text-white">
                      {langValue["whyChooseUsTrusted"]}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {langValue["whyChooseUsTrustedDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i className="ri-dashboard-3-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-checkbox-circle-fill text-[#1CF1FF] text-xl"></i>
                    <h3 className="text-lg font-bold text-white">
                      {langValue["whyChooseUsManagement"]}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {langValue["whyChooseUsManagementDesc"]}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#1CF1FF]/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#1CF1FF]/50 transition-all duration-300">
                  <i className="ri-shield-check-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="ri-checkbox-circle-fill text-[#1CF1FF] text-xl"></i>
                    <h3 className="text-lg font-bold text-white">
                      {langValue["whyChooseUsPerformance"]}
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {langValue["whyChooseUsPerformanceDesc"]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#0066CC]/20 to-[#1CF1FF]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#1CF1FF]/30 text-center">
            <p className="text-2xl text-white font-semibold mb-6">
              {langValue["whyChooseUsPartnership"]}
            </p>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="p-4 flex items-center justify-center mx-auto bg-gradient-to-r from-[#0066CC] to-[#1CF1FF] text-white rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:shadow-xl hover:shadow-[#1CF1FF]/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              {langValue["whyChooseUsStartPartnership"]}
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
