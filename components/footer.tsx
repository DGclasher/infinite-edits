import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8 flex flex-col items-center">
      <div className="mb-4 text-xl font-bold">Infinity Medias</div>
      
      <div className="flex gap-8 mb-6">
        {/* Footer navigation links */}
        <Link href="/#about" className="hover:text-indigo-400 transition">About</Link>
        <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        <Link href="/#services" className="hover:text-indigo-400 transition">Services</Link>
        <Link href="/#portfolio" className="hover:text-indigo-400 transition">Portfolio</Link>
      </div>
      
      {/* Social media icons */}
      <div className="flex gap-6">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-6 h-6 hover:text-indigo-400 transition" />
        </Link>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-6 h-6 hover:text-indigo-400 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 hover:text-indigo-400 transition" />
        </a>
      </div>
      
      <div className="mt-6 text-sm text-gray-400">© 2024 Infinity Medias. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
