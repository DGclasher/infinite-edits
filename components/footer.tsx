import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Social media icons
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-black to-zinc-950 border-t border-neutral-800 text-white py-16 flex flex-col items-center">
      <div className="mb-4 text-xl font-bold">Infinite Media</div>

      <div className="flex gap-8 mb-6 z-10">
        {/* Footer navigation links */}
        <Link href="/#about" className="hover:text-indigo-400 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-indigo-400 transition">
          Contact
        </Link>
        <Link href="/#services" className="hover:text-indigo-400 transition">
          Services
        </Link>
        <Link href="/#portfolio" className="hover:text-indigo-400 transition">
          Portfolio
        </Link>
      </div>

      {/* Social media icons */}
      <div className="flex gap-6 z-10">
        <Link
          href="https://www.youtube.com/channel/UCgqUbNoq2l2HVnqSfIICA3g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="w-6 h-6 text-red-600 hover:text-red-800 transition" />
        </Link>
        <a
          href="https://www.linkedin.com/in/infinitemedia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
        </a>
        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 text-sky-500 hover:text-sky-700 transition" />
        </a> */}
        {/* <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
        </a> */}
        <a
          href="https://www.instagram.com/infintemedias.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-700 transition" />
        </a>
      </div>

      <div className="mt-6 text-sm text-gray-400 z-10">
        © 2024 Infinite Media. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
