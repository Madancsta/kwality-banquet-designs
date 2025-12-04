import menu1 from "@/assets/menu1.png";
import menu2 from "@/assets/menu2.png";
import menu3 from "@/assets/menu3.png";
import menu4 from "@/assets/menu4.png";

const MenuSection = () => {
  const menuItems = [menu1, menu2, menu3, menu4];

  return (
    <section id="menu" className="py-24 container mx-auto px-4">
      <h2 className="text-4xl font-serif font-bold text-center mb-12">
        Our Menu
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white flex justify-center items-center"
          >
            <img
              src={item}
              alt={`Menu ${index + 1}`}
              className="max-w-full max-h-[600px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
