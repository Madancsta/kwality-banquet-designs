import { Facebook, Instagram, Heart } from "lucide-react";
import logo from "@/assets/KBlogo.jpg";

interface FooterProps {
  activeTab: "home" | "menu";
  setActiveTab: (tab: "home" | "menu") => void;
}

const Footer = ({ activeTab, setActiveTab }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home", tab: "home" },
    { href: "#about", label: "About", tab: "home" },
    { href: "#halls", label: "Halls", tab: "home" },
    { href: "#services", label: "Services", tab: "home" },
    { href: "#contact", label: "Contact", tab: "home" },
    { href: "#menu", label: "Menu", tab: "menu" },
  ];

  const handleLinkClick = (link: typeof quickLinks[0]) => {
    setActiveTab(link.tab);
    if (link.tab === "home" && link.href !== "#home") {
      const element = document.querySelector(link.href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal-light border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center border border-border/50">
                <img
                  src={logo}
                  alt="Kwality Banquet Logo"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-green-700">
                  Kwality Banquet
                </h3>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  Buddhanagar, Kathmandu, Nepal
                </p>
              </div>
            </div>

            <p className="text-muted-foreground max-w-md mb-6">
              Creating unforgettable memories for over a decade. Experience elegance,
              exceptional service, and the perfect setting for your special occasions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-gold-gradient group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="tel:01-12345678" className="hover:text-primary transition-colors">
                  01-12345678
                </a>
              </li>
              <li>
                <a href="tel:9851182103" className="hover:text-primary transition-colors">
                  +977 985-1182103
                </a>
              </li>
              <li>
                <a
                  href="mailto:kwalitybanquet00@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  kwalitybanquet00@gmail.com
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/wVEqfUJHF38ajgrp9">
                  Buddhanagar, Kathmandu, Nepal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Kwality Banquet. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
