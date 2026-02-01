
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";



export default function Footer() {
  return (
     <footer className="bg-gray-100 border-t border-gray-200 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <span className="font-bold text-lg">MAYHOOD</span>
          </div>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Capturing the ephemeral. A portfolio of light, shadow, and the human condition.
          </p>
          <div>
            <p className="text-sm font-semibold mb-3">Subscribe for print drops</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div>
          <h3 className="font-semibold mb-4">Portfolio</h3>
          <ul className="space-y-2">
            <li>
              <a href="#editorial" className="text-sm text-gray-600 hover:text-black transition-colors">
                Editorial
              </a>
            </li>
            <li>
              <a href="#landscape" className="text-sm text-gray-600 hover:text-black transition-colors">
                Landscape
              </a>
            </li>
            <li>
              <a href="#portraiture" className="text-sm text-gray-600 hover:text-black transition-colors">
                Portraiture
              </a>
            </li>
            <li>
              <a href="#architecture" className="text-sm text-gray-600 hover:text-black transition-colors">
                Architecture
              </a>
            </li>
            <li>
              <a href="#experimental" className="text-sm text-gray-600 hover:text-black transition-colors">
                Experimental
              </a>
            </li>
          </ul>
        </div>

        {/* Studio Section */}
        <div>
          <h3 className="font-semibold mb-4">Studio</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-sm text-gray-600 hover:text-black transition-colors">
                About Mayhood
              </a>
            </li>
            <li>
              <a href="#equipment" className="text-sm text-gray-600 hover:text-black transition-colors">
                Equipment
              </a>
            </li>
            <li>
              <a href="#workshops" className="text-sm text-gray-600 hover:text-black transition-colors">
                Workshops
              </a>
            </li>
            <li>
              <a href="#licensing" className="text-sm text-gray-600 hover:text-black transition-colors">
                Licensing
              </a>
            </li>
            <li>
              <a href="#shop" className="text-sm text-gray-600 hover:text-black transition-colors">
                Print Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 text-sm">📍</span>
              <span className="text-sm text-gray-600">London, UK</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 text-sm">📞</span>
              <span className="text-sm text-gray-600">+44 (0) 20 7123 4567</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 text-sm">📅</span>
              <span className="text-sm text-gray-600">Bookings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 text-sm">✉️</span>
              <a href="mailto:hello@mayhood.studio" className="text-sm text-gray-600 hover:text-black transition-colors">
                hello@mayhood.studio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
