import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#121212] py-16 px-4 text-[#EAEAEA] " id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#FF3B3B]">GET IN TOUCH</h2>
          <p className="text-[#A1A1A1] mt-2 max-w-xl mx-auto">
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
            className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg border border-[#333333]"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">
              <span className="text-[#FF3B3B]">📞</span> +92 (317) 9369076
            </p>
            <p className="mb-4">
              <span className="text-[#FF3B3B]">📧</span> maqddusbutool102@gmail.com
            </p>

            <iframe
              title="Google Map"
              className="w-full h-52 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8053272875955!2d73.04788227544992!3d33.68442003815047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951df79148c7%3A0xc5c0b68550f6372!2sRawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698165547210!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="mt-6">
              <p className="mb-2 font-medium">Connect with me on social media:</p>
              <div className="flex gap-4 text-[#FF3B3B] text-xl">
                <a href="https://github.com/MaqddusButool-dev" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/maqddus-butool-82297b303/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:maqddusbutool102@gmail.com">
                  <FaEnvelope className="hover:scale-110 transition-transform" />
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
            className="bg-[#1E1E1E] p-6 rounded-xl shadow-lg border border-[#333333]"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-[#2A2A2A] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#FF3B3B]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-[#2A2A2A] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#FF3B3B]"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-[#2A2A2A] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#FF3B3B]"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#FF3B3B] hover:bg-[#e93030] text-white py-3 rounded-md font-semibold transition-colors duration-300"
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

