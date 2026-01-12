import React, { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = ({ isScrolled }: { isScrolled: boolean }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-blue-500 backdrop-blur-md shadow-lg shadow-blue-600/20`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            className="flex items-center text-xl font-bold transition-all duration-200 group relative"
            href="/"
          >
            <span className="font-serif text-2xl lg:text-3xl font-bold text-white hover:text-blue-50 transition-all duration-300">
              Dat Phi
            </span>
            <div className="absolute -inset-2 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </a>

          <div className="hidden md:flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 text-blue-50 hover:text-white hover:bg-white/15 rounded-full font-medium transition-all duration-200 relative group"
            >
              Home
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </button>
            <button
              onClick={() => navigate("/movies")}
              className="px-4 py-2 text-blue-50 hover:text-white hover:bg-white/15 rounded-full font-medium transition-all duration-200 relative group"
            >
              Movies
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-4 py-2 text-blue-50 hover:text-white hover:bg-white/15 rounded-full font-medium transition-all duration-200 relative group"
            >
              About
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <a
              className="p-2.5 rounded-full text-blue-100 hover:text-white hover:bg-white/15 transition-all duration-200 hover:scale-110 relative group"
              href="https://github.com/phiquangdat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-lg"></i>
              <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            </a>
            <a
              className="p-2.5 rounded-full text-blue-100 hover:text-white hover:bg-white/15 transition-all duration-200 hover:scale-110 relative group"
              href="mailto:datqphi@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-lg"></i>
              <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            </a>
            <a
              className="p-2.5 rounded-full text-blue-100 hover:text-white hover:bg-white/15 transition-all duration-200 hover:scale-110 relative group"
              href="https://www.linkedin.com/in/phiquangdat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-lg"></i>
              <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/15 transition-all duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2 space-y-1 border-t border-white/20 mt-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <button
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="flex items-center w-full text-left px-4 py-3 text-blue-50 hover:text-white hover:bg-white/15 transition-all duration-200 rounded-lg font-medium"
            >
              <span className="mr-3">🏠</span>
              Home
            </button>
            <button
              onClick={() => {
                navigate("/movies");
                setIsMenuOpen(false);
              }}
              className="flex items-center w-full text-left px-4 py-3 text-blue-50 hover:text-white hover:bg-white/15 transition-all duration-200 rounded-lg font-medium"
            >
              <span className="mr-3">🎬</span>
              Movies
            </button>
            <button
              onClick={() => {
                navigate("/books");
                setIsMenuOpen(false);
              }}
              className="flex items-center w-full text-left px-4 py-3 text-blue-50 hover:text-white hover:bg-white/15 transition-all duration-200 rounded-lg font-medium"
            >
              <span className="mr-3">📚</span>
              Books
            </button>
            <button
              onClick={() => {
                navigate("/about");
                setIsMenuOpen(false);
              }}
              className="flex items-center w-full text-left px-4 py-3 text-blue-50 hover:text-white hover:bg-white/15 transition-all duration-200 rounded-lg font-medium"
            >
              <span className="mr-3">👤</span>
              About
            </button>

            <div className="flex items-center justify-center space-x-3 pt-4 border-t border-white/20 mt-2">
              <a
                className="p-2.5 rounded-full text-white hover:bg-white/15 transition-all duration-200"
                href="https://github.com/phiquangdat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
              <a
                className="p-2.5 rounded-full text-white hover:bg-white/15 transition-all duration-200"
                href="mailto:datqphi@gmail.com"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-lg"></i>
              </a>
              <a
                className="p-2.5 rounded-full text-white hover:bg-white/15 transition-all duration-200"
                href="https://www.linkedin.com/in/phiquangdat/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </nav>
  );
};

export default Navigation;
