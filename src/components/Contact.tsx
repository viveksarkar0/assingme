export default function ContactSection() {
  return (
    <section className="bg-[#FFFCF8] py-20 px-6 montserrat">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <img
          src="/images/team.svg" // replace with your actual image path
          alt="Talk to our team"
          className="w-[320px] md:w-[480px] mb-10"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Talk to our team
        </h2>

        <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg mb-8 montserrat">
          Our dedicated support team is here to help you with any delivery-related queries.
          From tracking your order to resolving issues, we’ve got you covered.
        </p>

        <button className="bg-[#FF005C] hover:bg-[#e60052] text-white font-medium px-6 py-3 rounded-full text-sm transition-all duration-300">
          Contact us
        </button>
      </div>
    </section>
  );
}
