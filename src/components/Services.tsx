const services = [
  { label: "Restaurants", icon: "/icons/passbook.svg", bg: "bg-[#FAF9F4]" },
  { label: "Grocery", icon: "/icons/cart.svg", bg: "bg-[#ffffff]" },
  { label: "Pharmacy & Meds", icon: "/icons/pharma.svg", bg: "bg-[#FAF9F4]" },
  { label: "Gifts", icon: "/icons/gifts.svg", bg: "bg-[#fdfdfd]" },
  { label: "E-commerce", icon: "/icons/ecom.svg", bg: "bg-[#FAF9F4]" },
];

export default function Services() {
  return (
    <div className="overflow-x-auto lg:overflow-visible">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-[300px] h-[300px] ${service.bg} flex-shrink-0 flex flex-col items-center justify-center space-y-6 hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-yellow-400`}
          >
            <img src={service.icon} alt={service.label} className="h-16" />
            <p className="text-sm text-gray-800 font-montserrat text-center">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
