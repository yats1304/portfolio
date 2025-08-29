"use client"
import React from 'react';
import emailjs from "@emailjs/browser";
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if (!form.current) return;

    emailjs.sendForm(
        'service_cc7mwi7',    // Your Service ID
        'template_j4540t4',   // Your Template ID
        form.current!,
        '6C7aq-b38dUZmjhmK'  // Your Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div id="contact" className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>
          <p className="mt-6 text-gray-400 text-base sm:text-lg">
            Reach out me today and let&apos;s discuss how I can help you achieve your goals.
          </p>
          {/* Info */}
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="h-9 w-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">+91 8551994340</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="h-9 w-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">chaubaly@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="h-9 w-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">Palghar, India</p>
            </div>
          </div>
          {/* social icons */}
          <div className="flex items-center mt-8 space-x-3">
            <a
              href="https://www.linkedin.com/in/yatish-chaubal-03331b206/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0A66C2] transition-all duration-300"
            >
              <FaLinkedin className="text-white h-6 w-6" />
            </a>
            <a
              href="https://github.com/yats1304"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300"
            >
              <FaGithub className="text-white h-6 w-6" />
            </a>
            <a
              href="https://x.com/Yatish17948398"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1DA1F2] transition-all duration-300"
            >
              <FaSquareXTwitter className="text-white h-6 w-6" />
            </a>
            <a
              href="https://wa.me/918551994340"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#25D366] transition-all duration-300"
            >
              <FaWhatsapp className="text-white h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="px-4 py-3.5 bg-[#363669] text-white outline-none rounded-md w-full placeholder:text-white/70"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="px-4 py-3.5 mt-6 bg-[#363669] text-white outline-none rounded-md w-full placeholder:text-white/70"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            className="px-4 py-3.5 mt-6 bg-[#363669] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="px-4 py-3.5 mt-6 bg-[#363669] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
