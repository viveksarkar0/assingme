export default function Demand() {
  return (
    <section className="bg-[#FBFAF5] overflow-hidden montserrat">
      <div className="flex flex-col md:flex-row">
        {/* Left Text Section */}
        <div className="flex-1">
          <div className="ml-6 md:ml-30 mt-10 md:mt-20 px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6">
              On-Demand Delivery Solutions <br className="hidden md:block" /> for Everyone
            </h1>
            <p className="text-gray-600 text-sm md:text-sm">
              Whether you’re an individual, restaurant, or enterprise, Rapidmate offers
              flexible, reliable, and secure delivery services.
            </p>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 mt-8 md:mt-0 px-4 md:px-0">
          <img
            src="/images/demand.svg"
            alt="Delivery Illustration"
            className="w-full max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
