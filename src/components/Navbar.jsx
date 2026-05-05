import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/services", label: "SERVICE" },
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/contact", label: "CONTACT" },
];

const Logo = () => (
  <Link to="/" className="flex items-center gap-2 group" data-testid="navbar-logo">
    <span className="relative">
      <span
        className="text-2xl font-extrabold tracking-tight"
        style={{ color: "#F5C24A", letterSpacing: "-0.02em" }}
      >
        JAVIX
      </span>
      <svg
        viewBox="0 0 60 12"
        className="absolute -bottom-2 left-0 w-full h-2"
        aria-hidden="true"
      >
        <path
          d="M2 8 C 18 -2, 42 14, 58 4"
          stroke="url(#g)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#4F29B8" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </Link>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6"
      data-testid="navbar"
    >
      <nav
        className={`mx-auto max-w-6xl javix-glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all ${
          scrolled ? "shadow-lg" : ""
        }`}
        aria-label="Primary"
      >
        <Logo />

        <ul className="hidden lg:flex items-center gap-8" data-testid="navbar-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `text-[13px] font-semibold tracking-wider transition-colors ${
                    isActive ? "text-[#4F29B8]" : "text-[#0a1230] hover:text-[#3B82F6]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="javix-cta inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold"
            data-testid="navbar-cta-schedule-demo"
          >
            Schedule Demo
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg text-[#0a1230] hover:bg-black/5"
          aria-label="Toggle menu"
          data-testid="navbar-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          className="lg:hidden mx-auto max-w-6xl mt-2 javix-glass rounded-2xl p-4"
          data-testid="navbar-mobile-menu"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-lg text-sm font-semibold tracking-wider ${
                      isActive
                        ? "bg-[#4F29B8]/10 text-[#4F29B8]"
                        : "text-[#0a1230] hover:bg-black/5"
                    }`
                  }
                  data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                className="javix-cta block text-center px-5 py-3 rounded-full text-sm font-semibold"
                data-testid="navbar-mobile-cta-schedule-demo"
              >
                Schedule Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;