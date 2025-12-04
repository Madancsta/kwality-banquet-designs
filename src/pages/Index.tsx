import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HallsSection from "@/components/HallsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MenuSection from "@/components/Menu";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"home" | "menu">("home");
  return (
   <main className="min-h-screen bg-background">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "home" && (
        <>
          <HeroSection />
          <AboutSection />
          <HallsSection />
          <ServicesSection />
          <ContactSection />
        </>
      )}

      {activeTab === "menu" && <MenuSection />}

      <Footer activeTab={activeTab} setActiveTab={setActiveTab}/>
    </main>
  );
};

export default Index;
