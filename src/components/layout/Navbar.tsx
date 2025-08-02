import { useState } from "react";
import { Sparkle, Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full border-b border-amber-950 bg-white font-serif px-6 md:px-16 py-4 shadow-sm z-50"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between">
        <ul className="hidden md:flex gap-10 text-amber-950 text-lg">
          {[
            "Destinations",
            "Experiences",
            "About Us",
            "Travel Guides",
            "Contact",
          ].map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-amber-700"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-3 md:hidden">
          <Sparkle className="w-6 h-6 text-amber-950" />
          <h1 className="text-2xl font-serif text-amber-950 tracking-tight">
            NomadSphere
          </h1>
          <Sparkle className="w-6 h-6 text-amber-950" />
        </div>

        <div className="md:hidden">
          <button onClick={handleMenuToggle} aria-label="Toggle menu">
            <Menu className="text-amber-950 w-6 h-6" />
          </button>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-amber-950 text-white px-4 py-2 rounded hover:bg-amber-900 transition">
          <Sparkle size={18} />
          <span>Book Now</span>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-amber-950 text-base">
          {[
            "Destinations",
            "Experiences",
            "About Us",
            "Travel Guides",
            "Contact",
          ].map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase().replace(/\s+/g, "")}`}
                onClick={handleLinkClick}
                className="block hover:text-amber-700"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
