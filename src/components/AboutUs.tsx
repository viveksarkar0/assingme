import Statics from "./Statics";

export default function AboutUs() {
  return (
    <>
      <section className="relative bg-white overflow-hidden mt-10">
        {/* Background City */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/city.svg"
            alt="City Illustration"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Truck Image */}
        <div className="absolute bottom-[0%] left-[10%] z-10">
          <img
            src="/icons/truck.svg"
            alt="Truck"
            className="h-30"
          />
        </div>

        {/* Foreground Text Content */}
        <div className="relative z-10 mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12">
          <div className="text-left max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About us</h2>
            <p className="text-md text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Laoreet quisque faucibus
              quis laoreet ultricies eget auctor. Viverra sed pretium libero
              aliquam purus magna ultrices. Risus blandit quis lorem suspendisse
              senectus libero non amet ultrices.
            </p>
          </div>
        </div>

        {/* Spacer to push Statics below the background visuals */}
        <div className="h-[400px] md:h-[400px]"></div>
      </section>

      {/* Now Statics will be clearly visible below the About section */}
      <Statics />
    </>
  );
}
