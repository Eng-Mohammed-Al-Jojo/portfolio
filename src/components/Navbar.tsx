import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const {t, toggleLang, lang } = useLang();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const newDark = !dark;
    setDark(newDark);

    if (newDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("dark", "true");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("dark", "false");
    }
  };

  const closeMenu = () => setMenuOpen(false);

        const navItems = [
        { label: t.nav.home, href: "#hero" },
        { label: t.nav.projects, href: "#projects" },
        { label: t.nav.contact, href: "#contact" },
        ];


  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-[Lemonada]">
            {t.nav.name}
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="
                  px-4 py-2 rounded-xl
                  transition-all duration-300
                  hover:bg-blue-600 hover:text-white
                  dark:hover:bg-blue-500
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode */}
          <button
            onClick={toggleDark}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors"
          >
            {dark ? "☀️" : "🌙"}
          </button>

           <button
        onClick={toggleLang}
        className="px-3 py-1 border rounded"
      >
        {lang === "en" ? "AR" : "EN"}
      </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center"
          >
            <span className="text-2xl">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

          
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "max-h-60 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }
        bg-white dark:bg-gray-900`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 text-base font-semibold">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="
                  block w-full
                  px-4 py-3 rounded-2xl
                  transition-all duration-300
                  hover:bg-blue-600 hover:text-white
                  dark:hover:bg-blue-500
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
