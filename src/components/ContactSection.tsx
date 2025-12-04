import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    hall: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`http://localsite:8000/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Email failed");

      setIsSubmitted(true);
      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        guests: "",
        hall: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Failed",
        description: "Could not send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "01-12345678",
      link: "tel:01-12345678",
    },
    {
      icon: Mail,
      title: "Email",
      value: "kwalitybanquet00@gmail.com",
      link: "mailto:kwalitybanquet00@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Buddhanagar, Kathmandu, Nepal",
      link: "https://maps.app.goo.gl/wVEqfUJHF38ajgrp9",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "9 AM - 7 PM, Daily",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Book Your <span className="gold-gradient-text">Event</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground">
            Ready to create unforgettable memories? Fill out the form below and
            our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-serif font-semibold mb-8">
              Contact Information
            </h3>

            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-gold-gradient transition-colors">
                  <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>  
                <div>
                  <p className="text-sm text-muted-foreground">{info.title}</p>
                  <p className="font-medium text-foreground">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            {/* <div className="mt-8 rounded-lg overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.64603902438!2d85.2550855!3d27.7089603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kwality Banquet Location"
              />
            </div> */}
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold-gradient flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your inquiry has been received. Our team will contact you shortly.
                  </p>
                  <Button
                    variant="goldOutline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+977 98XXXXXXXX"
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-border/50 bg-secondary/50 px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding Reception</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Event Date
                      </label>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Number of Guests
                      </label>
                      <Input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="100"
                        className="bg-secondary/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Preferred Hall
                      </label>
                      <select
                        name="hall"
                        value={formData.hall}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-border/50 bg-secondary/50 px-3 py-2 text-sm ring-offset-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select hall</option>
                        <option value="chhap">Chhap (Grand Hall)</option>
                        <option value="chhanga">Chhanga (Intimate Hall)</option>
                        <option value="bhirpani">Bhirpani (Conference Hall)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your event..."
                      rows={4}
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
