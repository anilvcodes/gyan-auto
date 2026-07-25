import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Cpu } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="bg-cyan-500 p-2 rounded-xl">
              <Cpu className="text-white" size={28} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                Automation
              </h1>
              <p className="text-xs text-cyan-400">
                PLC • HMI • SCADA
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-300">

            <Link
              to="/"
              className="hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-cyan-400 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </Link>

            <Link
              to="/blogs"
              className="hover:text-cyan-400 transition"
            >
              Blogs
            </Link>

            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-xl text-white font-semibold transition">
              Get Started
            </button>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">

            <nav className="flex flex-col gap-4 text-white">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                Contact
              </Link>

              <Link
                to="/blogs"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                Blogs
              </Link>

              <button className="bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl mt-3 font-semibold">
                Get Started
              </button>

            </nav>

          </div>
        )}
      </div>
    </header>
  );
}

export default Header;