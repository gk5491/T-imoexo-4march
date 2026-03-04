import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const basePath = "/ganesh";

  const navItems = [
    // { name: "Home", path: "/" },
    { name: "What We Do", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Products", path: "/products" },
  ];

  const isActive = (path: string) => location.pathname === basePath + path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ---------- Logo ---------- */}
        <Link to="/" className="flex items-center group">
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: [0, -3, 3, 0],
              transition: {
                rotate: { duration: 0.4 },
                scale: { duration: 0.2 },
              },
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -2, 0] }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="flex items-center relative"
          >
            <img
              src="/img/logo/t-imoexo-logo.png"
              alt="T-IMOEXO International"
              className="h-10 sm:h-12 w-auto relative z-10"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-cyan-400/0 blur-xl rounded-full"
              animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </Link>

        {/* ---------- Desktop Navigation ---------- */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative font-medium transition-colors ${isActive(item.path)
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ---------- Contact Button + Menu Icon (Always Visible) ---------- */}
        <div className="flex items-center gap-3">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg text-lg lg:text-base px-3.5 py-2 bg-blue-900 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
            >
              Contact 
            </motion.button>
          </Link>

          {/* ---------- Mobile Menu Button ---------- */}
          <button
            className="lg:hidden flex items-center justify-center text-gray-800 rounded-md p-2 transition hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-blue-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-blue-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ---------- Mobile Navigation Menu ---------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 space-y-3 border-t border-gray-200 pt-4 pb-4 px-4"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${isActive(item.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
