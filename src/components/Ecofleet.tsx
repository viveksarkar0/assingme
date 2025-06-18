export default function EcoFleet() {
  const fleetData = [
    {
      title: "Electric & Hybrid Vehicles",
      description:
        "Gradually transition to electric or hybrid vehicles to reduce carbon emissions",
      image: "icons/logo1.svg",
      alt: "Electric Truck Icon",
    },
    {
      title: "Route Optimization",
      description:
        "Implement advanced routing software to minimize fuel consumption by reducing travel time and distance.",
      image: "icons/logo2.svg",
      alt: "Route Optimization Icon",
    },
    {
      title: "Bicycle or E-bike Deliveries",
      description:
        "In urban areas, use bicycles or e-bikes to eliminate emissions entirely for short-distance deliveries.",
      image: "icons/logo3.svg",
      alt: "E-bike Delivery Icon",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
          Eco-friendly Fleet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {fleetData.map((card, index) => (
            <div
              key={index}
              className="w-[320px] h-[440px] bg-[#FFFCF8] rounded-[24px] p-6 flex flex-col items-center justify-start text-center border border-[#E0E0E0] hover:border-blue-500 transition-all duration-300 mx-auto"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="h-[160px] object-contain mb-6"
              />
              <h3 className="text-[18px] font-bold text-gray-900 whitespace-nowrap mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed px-2">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
