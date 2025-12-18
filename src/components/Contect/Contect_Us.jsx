import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative bg-[#E9EFEC] py-16 sm:py-20 lg:py-24 px-4 overflow-hidden" id="contact">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C4DAD2 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Decorative blur */}
      <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#16423C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#6A9C89]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-[#16423C]" />
            <span className="text-xs sm:text-sm text-[#16423C] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold">
              Contact
            </span>
            <div className="w-8 sm:w-12 h-px bg-[#16423C]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#16423C] mb-3 sm:mb-4 px-4">Get In Touch</h2>
          <p className="text-[#16423C]/70 text-sm sm:text-base max-w-xl mx-auto px-4">
            Feel free to connect with me to discuss potential projects,
            collaborations, or opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-[#C4DAD2] shadow-sm hover:shadow-xl transition-all"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-[#16423C]">Contact Information</h3>
            
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-3 text-[#16423C]/80">
                <span className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#16423C]/10 flex items-center justify-center text-[#16423C] flex-shrink-0">
                  <FaPhone className="text-sm sm:text-base" />
                </span>
                <span className="font-medium text-sm sm:text-base break-all">+92 (317) 9369076</span>
              </div>
              <div className="flex items-center gap-3 text-[#16423C]/80">
                <span className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#16423C]/10 flex items-center justify-center text-[#16423C] flex-shrink-0">
                  <FaEnvelope className="text-sm sm:text-base" />
                </span>
                <span className="font-medium text-sm sm:text-base break-all">maqddusbutool102@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#16423C]/80">
                <span className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#16423C]/10 flex items-center justify-center text-[#16423C] flex-shrink-0">
                  <FaMapMarkerAlt className="text-sm sm:text-base" />
                </span>
                <span className="font-medium text-sm sm:text-base">Rawalpindi, Pakistan</span>
              </div>
            </div>

            <iframe
              title="Google Map"
              className="w-full h-36 sm:h-44 lg:h-52 rounded-xl sm:rounded-2xl border border-[#C4DAD2]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8053272875955!2d73.04788227544992!3d33.68442003815047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951df79148c7%3A0xc5c0b68550f6372!2sRawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698165547210!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="mt-4 sm:mt-6">
              <p className="mb-2 sm:mb-3 font-bold text-[#16423C] text-sm sm:text-base">Connect with me:</p>
              <div className="flex gap-2 sm:gap-3">
                <a 
                  href="https://github.com/MaqddusButool-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#16423C]/10 flex items-center justify-center text-[#16423C] hover:bg-[#16423C] hover:text-white transition-all"
                >
                  <FaGithub className="text-lg sm:text-xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/maqddus-butool-82297b303/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#16423C]/10 flex items-center justify-center text-[#16423C] hover:bg-[#16423C] hover:text-white transition-all"
                >
                  <FaLinkedin className="text-lg sm:text-xl" />
                </a>
                <a 
                  href="mailto:maqddusbutool102@gmail.com"
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#16423C]/10 flex items-center justify-center text-[#16423C] hover:bg-[#16423C] hover:text-white transition-all"
                >
                  <FaEnvelope className="text-lg sm:text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-[#C4DAD2] shadow-sm hover:shadow-xl transition-all"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-[#16423C]">Send a Message</h3>
            <form className="space-y-3 sm:space-y-4 lg:space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#E9EFEC] text-[#16423C] text-sm sm:text-base border border-[#C4DAD2] focus:outline-none focus:border-[#16423C] transition-colors placeholder:text-[#16423C]/50 font-medium"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#E9EFEC] text-[#16423C] text-sm sm:text-base border border-[#C4DAD2] focus:outline-none focus:border-[#16423C] transition-colors placeholder:text-[#16423C]/50 font-medium"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-[#E9EFEC] text-[#16423C] text-sm sm:text-base border border-[#C4DAD2] focus:outline-none focus:border-[#16423C] transition-colors placeholder:text-[#16423C]/50 resize-none font-medium"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#16423C] hover:bg-[#1a524a] text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
