import { useLanguage } from "../../contexts/LanguageContext";

export default function Contact() {
  const { langValue } = useLanguage();
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {langValue["contactTitle"]}
            </h2>
            <p className="text-xl text-white/70">
              {langValue["contactSubtitle"]}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 h-full">
                <h3 className="text-2xl font-bold text-white mb-8">
                  {langValue["contactGetInTouch"]}
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center">
                      <i className="ri-mail-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">
                        {langValue["contactEmail"]}
                      </div>
                      <div className="text-white font-semibold">
                        support@servo.com
                      </div>
                    </div>
                  </div>

                  {/* Support */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center">
                      <i className="ri-customer-service-2-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">
                        {langValue["contactSupport"]}
                      </div>
                      <div className="text-white font-semibold">
                        {langValue["contactSupportAvailable"]}
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#1CF1FF] flex items-center justify-center">
                      <i className="ri-time-line text-2xl text-white"></i>
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">
                        {langValue["contactResponseTime"]}
                      </div>
                      <div className="text-white font-semibold">
                        {langValue["contactResponseTimeValue"]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                {/* <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-white font-semibold mb-4">
                    {langValue["contactFollowUs"]}
                  </h4>
                  <div className="flex gap-3">
                    {[
                      "ri-facebook-fill",
                      "ri-twitter-x-line",
                      "ri-instagram-line",
                      "ri-linkedin-fill",
                    ].map((icon) => (
                      <button
                        key={icon}
                        className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#0066CC] hover:to-[#1CF1FF] flex items-center justify-center transition-all duration-300 cursor-pointer"
                      >
                        <i className={`${icon} text-xl text-white`}></i>
                      </button>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-semibold mb-2"
                    >
                      {langValue["contactName"]}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={langValue["contactNamePlaceholder"]}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#1CF1FF] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-semibold mb-2"
                    >
                      {langValue["contactEmail"]}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={langValue["contactEmailPlaceholder"]}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#1CF1FF] transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-white font-semibold mb-2"
                    >
                      {langValue["contactSubject"]}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder={langValue["contactSubjectPlaceholder"]}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#1CF1FF] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-semibold mb-2"
                    >
                      {langValue["contactMessage"]}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder={langValue["contactMessagePlaceholder"]}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#1CF1FF] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#0066CC] to-[#1CF1FF] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#1CF1FF]/50 transition-all duration-300 transform hover:scale-[1.02] whitespace-nowrap cursor-pointer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {langValue["contactSendMessage"]}
                    <i className="ri-send-plane-fill ml-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
