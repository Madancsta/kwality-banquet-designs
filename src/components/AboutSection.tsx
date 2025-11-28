import { Award, Users, Heart, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Exceptional service and attention to detail in every event",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals ensuring flawless execution",
    },
    {
      icon: Heart,
      title: "Personalized Touch",
      description: "Custom solutions tailored to your unique vision",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Punctual and dependable for your peace of mind",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Creating Memories
              <br />
              <span className="gold-gradient-text">Since 2014</span>
            </h2>
            <div className="section-divider mb-8 ml-0" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Kwality Banquet, we pride ourselves on providing an exceptional 
              experience for every occasion. Nestled in the heart of Kathmandu, 
              our venue offers a sophisticated and elegant setting perfect for 
              weddings, corporate events, anniversaries, and any special celebration.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Our venue is renowned for its luxurious ambiance, meticulous attention 
              to detail, and unparalleled service. With spacious, tastefully decorated 
              banquet halls, state-of-the-art facilities, and a dedicated team of 
              professionals, we ensure that every event is executed to perfection.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">Gourmet Catering</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">Event Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">Decor Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">AV Equipment</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-gradient flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
