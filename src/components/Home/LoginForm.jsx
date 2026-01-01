import React from "react";
import classes from "./Home.module.css";

export default function LoginForm({
  macAddress,
  setMacAddress,
  deviceKey,
  setDeviceKey,
  handleLogin,
  isLoading,
  langValue,
}) {
  return (
    <section id="login" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] mb-6">
              <i className="ri-login-box-line text-4xl text-white"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {langValue["LoginPlaylist"]}
            </h2>
            <p className="text-xl text-white/70">
              {langValue["loginDescription"]}
            </p>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <form
              onSubmit={(e) =>
                handleLogin(e, "fromClick", "default", "default")
              }
              id="login-form"
              className="space-y-6"
            >
              {/* MAC Address */}
              <div>
                <label
                  htmlFor="macAddress"
                  className="block text-white font-semibold mb-3 text-lg"
                >
                  {langValue["macAddressLabel"]}
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                    <i className="ri-macbook-line text-xl"></i>
                  </div>
                  <input
                    type="text"
                    id="macAddress"
                    value={macAddress}
                    onChange={(e) => {
                      let input = e.target.value
                        .replace(/[^a-fA-F0-9]/g, "")
                        .slice(0, 12); // max 12 hex digits
                      const formatted = input.match(/.{1,2}/g)?.join(":") || "";
                      setMacAddress(formatted.toLowerCase());
                    }}
                    placeholder={langValue["macAddressPlaceholder"]}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#1CF1FF] transition-colors text-lg"
                    required
                  />
                </div>
              </div>

              {/* Device Key */}
              <div>
                <label
                  htmlFor="deviceKey"
                  className="block text-white font-semibold mb-3 text-lg"
                >
                  {langValue["deviceKeyLabel"]}
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                    <i className="ri-key-2-line text-xl"></i>
                  </div>
                  <input
                    type="text"
                    id="deviceKey"
                    value={deviceKey}
                    onChange={(e) => setDeviceKey(e.target.value)}
                    placeholder={langValue["deviceKeyPlaceholder"]}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#1CF1FF] transition-colors text-lg"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full px-8 py-4 bg-gradient-to-r from-[#0066CC] to-[#1CF1FF] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#1CF1FF]/50 transition-all duration-300 transform hover:scale-[1.02] whitespace-nowrap cursor-pointer ${classes.login_btn}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isLoading ? (
                  <i className="fas fa-spinner fa-spin text-2xl"></i>
                ) : (
                  <>
                    {langValue["Login"]}
                    <i className="ri-arrow-right-line ml-2"></i>
                  </>
                )}
              </button>
            </form>

            {/* Info Note */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <i className="ri-information-line text-[#1CF1FF] text-xl flex-shrink-0 mt-0.5"></i>
                <p>{langValue["loginInfoText"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
