import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/entrance-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up">
            <div className="h-px w-16 bg-primary/50" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Welcome to
            </span>
            <div className="h-px w-16 bg-primary/50" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-up delay-100">
            <span className="gold-gradient-text">Kwality</span>
            <br />
            <span className="text-foreground">Banquet</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Experience elegance and excellence in the heart of Kathmandu. 
            Where every celebration becomes an unforgettable memory.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
            <Button
              variant="hero"
              onClick={() => scrollToSection("#contact")}
            >
              Book Your Event
            </Button>
            <Button
              variant="heroOutline"
              onClick={() => scrollToSection("#halls")}
            >
              Explore Halls
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-fade-up delay-400">
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground mt-1">Elegant Halls</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Events Hosted</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
