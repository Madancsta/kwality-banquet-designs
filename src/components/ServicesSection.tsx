import { Heart, Building2, PartyPopper, Utensils, Music, Camera } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Receptions",
      description:
        "Transform your dream wedding into reality with our comprehensive wedding reception services. Our venue offers elegant settings that can be customized to your vision, with full-service catering and professional event planning.",
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description:
        "Elevate your next corporate event with our state-of-the-art facilities designed for seamless business meetings and conferences. We offer versatile meeting rooms equipped with advanced audio-visual technology.",
    },
    {
      icon: PartyPopper,
      title: "Special Celebrations",
      description:
        "Celebrate life's special moments in style with our tailored services for birthday parties, anniversaries, and traditional ceremonies. Our venue provides customizable options to suit your needs.",
    },
    {
      icon: Utensils,
      title: "Gourmet Catering",
      description:
        "Experience culinary excellence with our in-house catering service. From traditional Nepali cuisine to international dishes, our chefs prepare exquisite menus tailored to your preferences.",
    },
    {
      icon: Music,
      title: "Entertainment Setup",
      description:
        "Create the perfect atmosphere with our professional DJ services, live music arrangements, and state-of-the-art sound systems that transform your event into an unforgettable experience.",
    },
    {
      icon: Camera,
      title: "Decor & Photography",
      description:
        "Let our expert decorators bring your vision to life with stunning floral arrangements, elegant drapery, and themed decorations. Professional photography services available.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Our <span className="gold-gradient-text">Services</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground">
            From intimate gatherings to grand celebrations, we provide comprehensive
            services to make your event truly exceptional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-gold-gradient">
                  <service.icon className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                {/* Decorative Ring */}
                <div className="absolute -inset-1 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-primary/50 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
