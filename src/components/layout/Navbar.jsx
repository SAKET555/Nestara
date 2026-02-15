import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Building2, User } from "lucide-react";
import { themeChange } from "theme-change";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate('/');
    await signOut();
  };

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-base-100/70 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="navbar py-3">

          {/* LEFT SECTION */}
          <div className="navbar-start">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-ghost btn-circle"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-semibold tracking-wide text-primary"
            >
              <Building2 className="w-6 h-6" />
              <span className="uppercase tracking-wider">Nestara</span>
            </Link>
          </div>

          {/* CENTER NAVIGATION */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8 font-medium text-sm tracking-wide">
              <li>
                <Link to="/" className="hover:text-primary transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/agents" className="hover:text-primary transition duration-300">
                  Agents
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div className="navbar-end gap-3">

            {/* Theme Toggle */}
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle"
              >
                <Sun className="w-5 h-5" />
              </button>

              <ul className="dropdown-content mt-4 p-2 shadow-xl bg-base-100 rounded-xl w-40 text-sm border border-base-300">
                <li><button data-set-theme="light">Light</button></li>
                <li><button data-set-theme="dark">Dark</button></li>
                <li><button data-set-theme="luxury">Luxury</button></li>
                <li><button data-set-theme="corporate">Corporate</button></li>
                <li><button data-set-theme="business">Business</button></li>
              </ul>
            </div>

            {/* Auth Buttons */}
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {user.user_metadata?.full_name ? user.user_metadata.full_name[0].toUpperCase() : <User className="h-6 w-6" />}
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/dashboard" className="justify-between">
                      Dashboard
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li><Link to="/settings">Settings</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-ghost hidden sm:inline-flex text-sm font-medium"
                >
                  Log In
                </Link>

                <Link
                  to="/signup"
                  className="btn btn-primary text-white px-6 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="menu bg-base-100 rounded-xl shadow-lg border border-base-300 p-4 space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/agents">Agents</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

