import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Use relative path for Vercel deployment (no CORS needed)
    // Falls back to localhost for local development
    const API_URL = import.meta.env.VITE_API_URL || "";

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          phone: formData.phone || undefined,
          company: formData.company || undefined,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error("Failed to parse response:", jsonError);
        setStatus("❌ Invalid response from server. Please try again later.");
        return;
      }

      if (response.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus(`❌ ${data.message || "Failed to send message. Please try again later."}`);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        setStatus("❌ Cannot connect to server. Please ensure the backend is running.");
      } else {
        setStatus("❌ Failed to send message. Please check your connection and try again.");
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-bold text-yellow-500 uppercase tracking-wider bg-yellow-500/10 px-4 py-2 rounded-full mb-6">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-black">
            Let's Start a{" "}
            <span className="text-yellow-500">Conversation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need industrial spares, supply chain solutions, or partnership opportunities — our global team is ready to help.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl font-bold mb-2 text-black">
                Send us a message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll respond within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition text-black placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition text-black placeholder-gray-400"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition text-black placeholder-gray-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition text-black placeholder-gray-400"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition resize-none text-black placeholder-gray-400"
                    placeholder="Tell us about your sourcing needs, project requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 text-lg"
                >
                  Send Message
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>

            </div>
          </motion.div>

          {/* Quick Contact Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-8 text-black shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:info@urbancraftglobal.com"
                      className="text-sm hover:underline"
                    >
                      info@urbancraftglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-sm">+1 (226) 989-3966</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Support Hours</p>
                    <p className="text-sm">24/7 Global Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-2 text-black">
                  Fast Response
                </h4>
                <p className="text-gray-600 text-sm">
                  Average response time under 24 hours for all inquiries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Status Modal */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setStatus("")}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setStatus("")}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                {status.includes("✅") ? (
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                ) : status.includes("❌") ? (
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-yellow-600 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="text-center">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    status.includes("✅")
                      ? "text-green-600"
                      : status.includes("❌")
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {status.includes("✅")
                    ? "Success!"
                    : status.includes("❌")
                    ? "Error"
                    : "Sending..."}
                </h3>
                <p className="text-gray-700 text-base">
                  {status.replace("✅ ", "").replace("❌ ", "")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}