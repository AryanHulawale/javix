import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import logo from "../assets/cropped.png";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed! Welcome to the JAVIX newsletter.");
    setEmail("");
  };

  // SVG Icons
  const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );

  const GithubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  return (
    <footer className="javix-bg text-white pt-20 pb-8 mt-24" data-testid="site-footer">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Newsletter */}
        {/* <div
          className="rounded-3xl p-8 md:p-10 mb-14 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
          data-testid="footer-newsletter"
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Subscribe to Newsletter
            </h3>
            <p className="text-white/70 mt-1 text-sm md:text-base">
              Get product updates, engineering insights, and case studies — once a month.
            </p>
          </div>
          <form
            onSubmit={onSubscribe}
            className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="px-5 py-3 rounded-full bg-white text-[#0a1230] placeholder:text-[#0a1230]/50 outline-none ring-2 ring-transparent focus:ring-[#3B82F6] min-w-[260px]"
              data-testid="footer-newsletter-input"
            />
            <button
              type="submit"
              className="javix-cta px-6 py-3 rounded-full font-semibold whitespace-nowrap"
              data-testid="footer-newsletter-submit"
            >
              Subscribe
            </button>
          </form>
        </div> */}

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="text-2xl font-extrabold tracking-tight" style={{ color: "#F5C24A" }}>
              <img src={logo} alt="" width={120} />
            </div>
            <p className="text-white/70 mt-4 text-sm leading-relaxed">
              Enterprise software craftsmanship — strategy, design, and engineering for
              ambitious teams.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://linkedin.com/company/javix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="linkedin"
                data-testid="footer-social-linkedin"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://twitter.com/javix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="twitter"
                data-testid="footer-social-twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://github.com/javix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="github"
                data-testid="footer-social-github"
              >
                <GithubIcon />
              </a>
              <a
                href="https://facebook.com/javix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="facebook"
                data-testid="footer-social-facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white/80 mb-4">COMPANY</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white" data-testid="footer-link-about">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white" data-testid="footer-link-services">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white" data-testid="footer-link-portfolio">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white/80 mb-4">SOLUTIONS</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/services/web-application-development" className="hover:text-white" data-testid="footer-solution-web">Web Application Development</Link></li>
              <li><Link to="/services/ai-data-engineering" className="hover:text-white" data-testid="footer-solution-ai">AI / Data Engineering</Link></li>
              <li><Link to="/services/mobile-engineering" className="hover:text-white" data-testid="footer-solution-mobile">Mobile Engineering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white/80 mb-4">CONTACT</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <MapPinIcon />
                <a href="https://maps.google.com/?q=Mumbai,Maharashtra,India" target="_blank" rel="noopener noreferrer" className="hover:text-white mt-0.5" data-testid="footer-contact-address">Mumbai, Maharashtra, India</a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon />
                <a href="mailto:javixagency@gmail.com" className="hover:text-white" data-testid="footer-contact-email">javixagency@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon />
                <a href="tel:+918108602813" className="hover:text-white" data-testid="footer-contact-phone">+91 81086 02813</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} JAVIX Agency Inc. All rights reserved.</p>
          <p>Built with precision in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;