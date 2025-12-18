import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#E9EFEC] py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#6A9C89]" />
            <span className="text-sm text-[#6A9C89] uppercase tracking-[0.2em] font-medium">
              Contact
            </span>
            <div className="w-12 h-px bg-[#6A9C89]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#16423C] mb-4">Get In Touch</h2>
          <p className="text-[#6A9C89] max-w-xl mx-auto">
            Feel free to connect with me to discuss potential projects,
            collaborations, or opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-[#C4DAD2] shadow-sm hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#16423C]">Contact Information</h3>
            <div className="space-y-4 mb-6">
              <p className="flex items-center gap-3 text-[#16423C]/70">
                <span className="w-10 h-10 rounded-full bg-[#6A9C89]/10 flex items-center justify-center text-[#6A9C89]">📞</span>
                +92 (317) 9369076
              </p>
              <p className="flex items-center gap-3 text-[#16423C]/70">
                <span className="w-10 h-10 rounded-full bg-[#6A9C89]/10 flex items-center justify-center text-[#6A9C89]">📧</span>
                maqddusbutool102@gmail.com
              </p>
            </div>

            <iframe
              title="Google Map"
              className="w-full h-52 rounded-2xl border border-[#C4DAD2]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8053272875955!2d73.04788227544992!3d33.68442003815047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951df79148c7%3A0xc5c0b68550f6372!2sRawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698165547210!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="mt-6">
              <p className="mb-3 font-medium text-[#16423C]">Connect with me:</p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/MaqddusButool-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#6A9C89]/10 flex items-center justify-center text-[#6A9C89] hover:bg-[#6A9C89] hover:text-white transition-all"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/maqddus-butool-82297b303/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#6A9C89]/10 flex items-center justify-center text-[#6A9C89] hover:bg-[#6A9C89] hover:text-white transition-all"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="mailto:maqddusbutool102@gmail.com"
                  className="w-12 h-12 rounded-full bg-[#6A9C89]/10 flex items-center justify-center text-[#6A9C89] hover:bg-[#6A9C89] hover:text-white transition-all"
                >
                  <FaEnvelope className="text-xl" />
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
            className="bg-white p-8 rounded-3xl border border-[#C4DAD2] shadow-sm hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#16423C]">Send a Message</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-[#E9EFEC] text-[#16423C] border border-[#C4DAD2] focus:outline-none focus:border-[#6A9C89] transition-colors placeholder:text-[#6A9C89]/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-[#E9EFEC] text-[#16423C] border border-[#C4DAD2] focus:outline-none focus:border-[#6A9C89] transition-colors placeholder:text-[#6A9C89]/50"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-[#E9EFEC] text-[#16423C] border border-[#C4DAD2] focus:outline-none focus:border-[#6A9C89] transition-colors placeholder:text-[#6A9C89]/50 resize-none"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#6A9C89] hover:bg-[#5a8a79] text-white py-4 rounded-xl font-semibold transition-colors duration-300"
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
