import { Users, Maximize, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import hallChhap from "@/assets/main-hall.jpg";
import hallChhanga from "@/assets/catering-hall.jpg";
import hallBhirpani from "@/assets/hall-bhirpani.jpg";

const HallsSection = () => {
  const halls = [
    {
      name: "CHHAP",
      subtitle: "Grand Hall",
      image: hallChhap,
      capacity: "300+ Guests",
      size: "5000 sq.ft",
      description:
        "Chhap is the perfect choice for those seeking a spacious and versatile venue. With its elegant design and modern amenities, this hall offers ample room for large gatherings such as weddings, corporate events, and celebrations.",
      features: ["Crystal Chandeliers", "Stage Setup", "Premium Sound System", "Air Conditioned"],
    },
    {
      name: "CHHANGA",
      subtitle: "Intimate Hall",
      image: hallChhanga,
      capacity: "150 Guests",
      size: "2500 sq.ft",
      description:
        "Chhanga boasts a charming and intimate atmosphere, ideal for smaller, more personal events. Its tasteful decor and cozy ambiance create a warm and inviting space for gatherings such as anniversaries, receptions, or family celebrations.",
      features: ["Romantic Ambiance", "Elegant Drapes", "Floral Decor", "Climate Controlled"],
    },
    {
      name: "BHIRPANI",
      subtitle: "Conference Hall",
      image: hallBhirpani,
      capacity: "200 Guests",
      size: "3500 sq.ft",
      description:
        "Bhirpani combines sophistication with functionality, making it an ideal setting for corporate meetings, conferences, and formal events. The versatile space can be configured to suit various event formats.",
      features: ["Projector & Screen", "Conference Setup", "High-Speed WiFi", "Podium & Mics"],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="halls" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Our Venues
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Elegant <span className="gold-gradient-text">Halls</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground">
            Choose from our three beautifully designed halls, each offering a unique
            atmosphere perfect for your special occasion.
          </p>
        </div>

        {/* Halls Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {halls.map((hall, index) => (
            <div
              key={hall.name}
              className="group glass-card overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hall.image}
                  alt={`${hall.name} - ${hall.subtitle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Hall Name Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold-gradient text-primary-foreground text-xs font-semibold rounded-full">
                    {hall.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-2 gold-gradient-text">
                  {hall.name}
                </h3>

                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} className="text-primary" />
                    {hall.capacity}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Maximize size={16} className="text-primary" />
                    {hall.size}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {hall.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {hall.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      <Star size={10} className="text-primary" />
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant="goldOutline"
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Inquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallsSection;
