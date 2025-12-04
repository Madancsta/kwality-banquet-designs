import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/KBlogo.jpg";

interface NavbarProps {
  activeTab: "home" | "menu";
  setActiveTab: (tab: "home" | "menu") => void;
}

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", tab: "home" },
    { href: "#about", label: "About", tab: "home" },
    { href: "#halls", label: "Halls", tab: "home" },
    { href: "#services", label: "Services", tab: "home" },
    { href: "#contact", label: "Contact", tab: "home" },
    { href: "#menu", label: "Menu", tab: "menu" },
  ];

  const handleClick = (link: typeof navLinks[0]) => {
    setIsMobileMenuOpen(false);
    setActiveTab(link.tab as "home" | "menu");

    if (link.tab === "home" && link.href !== "#home") {
      const element = document.querySelector(link.href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("home");
          }}
          className="flex items-center gap-3"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center border border-border/50">
            <img
              src={logo}
              alt="Kwality Banquet Logo"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-xl font-semibold gold-gradient-text">
              Kwality Banquet
            </h1>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              Kathmandu
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link)}
              className={`text-sm font-medium transition-colors duration-300 relative ${
                activeTab === "menu" && link.tab === "menu"
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        {activeTab === "home" && (
          <div className="hidden md:block">
            <Button variant="gold" onClick={() => handleClick({ href: "#contact", label: "Contact", tab: "home" })}>
              Book Now
            </Button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link)}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
            >
              {link.label}
            </button>
          ))}
          {activeTab === "home" && (
            <Button
              variant="gold"
              className="mt-4"
              onClick={() => handleClick({ href: "#contact", label: "Contact", tab: "home" })}
            >
              Book Now
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
