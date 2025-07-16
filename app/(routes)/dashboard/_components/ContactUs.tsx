import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function ContactUs() {
  return (
    <div className="bg-green-300 py-10 px-6 mt-20 md:px-20 w-full text-green-900 border rounded-xl">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="./logo_1.png"
                alt="Logo"
                className="h-auto w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] rounded-2xl border"
              />
            </div>
    
            {/* Socials */}
            <div className="flex gap-4 text-2xl">
              <a className="hover:text-white transition-colors duration-200">
                <FaFacebookF />
              </a>
              <a className="hover:text-white transition-colors duration-200">
                <FaTwitter />
              </a>
              <a className="hover:text-white transition-colors duration-200">
                <FaInstagram />
              </a>
              <a className="hover:text-white transition-colors duration-200">
                <FaLinkedin />
              </a>
            </div>
    
            {/* Contact Info */}
            <div className="text-sm text-center md:text-right">
              <p>📞 +91 70585 93626</p>
              <p>✉️ support@voicecure.ai</p>
            </div>
          </div>
        </div>
  )
}

export default ContactUs
