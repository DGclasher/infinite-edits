import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-black to-zinc-900 text-white py-8 flex flex-col items-center">
      <div className="mb-4 text-xl font-bold">Infinity Media</div>
      
      <div className="flex gap-8 mb-6">
        {/* Footer navigation links */}
        <Link href="/#about" className="hover:text-indigo-400 transition">About</Link>
        <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        <Link href="/#services" className="hover:text-indigo-400 transition">Services</Link>
        <Link href="/#portfolio" className="hover:text-indigo-400 transition">Portfolio</Link>
      </div>
      
      {/* Social media icons */}
      <div className="flex gap-6">
        <Link href="https://Youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="w-6 h-6 text-rose-400 hover:text-rose-800 transition" />
        </Link>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="w-6 h-6 text-blue-400 hover:text-blue-800 transition" />
        </a>
        
      </div>
      
      <div className="mt-6 text-sm text-gray-400">© 2024 Infinite Media. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
