import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <Leaf
            size={30}
            className="text-green-600"
          />

          <div>
            <h1 className="text-lg font-bold text-green-700">
              Nguồn gốc số
            </h1>

            <p className="text-xs text-gray-500">
              Digital Traceability
            </p>
          </div>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="font-medium hover:text-green-600"
          >
            Trang chủ
          </Link>

          <a
            href="#features"
            className="font-medium hover:text-green-600"
          >
            Chức năng
          </a>

          <a
            href="#about"
            className="font-medium hover:text-green-600"
          >
            Giới thiệu
          </a>

          {!isLogin && !isAdmin && (
            <Link
              to="/login"
              className="rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t bg-white md:hidden">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            Trang chủ
          </Link>

          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            Chức năng
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block px-6 py-4 hover:bg-green-50"
          >
            Giới thiệu
          </a>

          {!isLogin && !isAdmin && (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="block bg-green-600 px-6 py-4 text-white"
            >
              Login
            </Link>
          )}

        </div>
      )}
    </header>
  );
};

export default Navbar;