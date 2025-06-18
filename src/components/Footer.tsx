import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    // Add your subscription logic here
  };

  return (
    <footer className="bg-[#131314] text-white py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-8 gap-8 lg:gap-10   border-t-1  border-t-[#FFFFFF4D]">
        {/* Reach us Section */}
        <div className="lg:col-span-1 mt-5">
          <h3 className="text-lg font-semibold mb-6 text-white">Reach us</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mr-3 mt-0.5 w-5 h-5">
                <img
                  src="/icons/phone.svg"
                  alt="Phone"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="text-gray-300 text-sm">+33761406084</span>
            </div>
            <div className="flex items-start">
              <span className="mr-3 mt-0.5 w-5 h-5">
                <img
                  src="/icons/email.svg"
                  alt="Email"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="text-gray-300 text-sm">elyas@rapidmate.fr</span>
            </div>
            <div className="flex items-start">
              <span className="text-base mr-3 mt-0.5">
                <img src="/icons/location.svg" alt="" />
              </span>
              <span className="text-gray-300 text-sm">
                8B Avenue Danielle Casanova, 95210
                <br />
                Saint-Gratien, France
              </span>
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className="lg:col-span-1 mt-5">
          <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#about"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="lg:col-span-1 mt-5">
          <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#privacy"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms-services"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                Terms & Services
              </a>
            </li>
            <li>
              <a
                href="#terms-use"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="#refund"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="lg:col-span-1 mt-5">
          <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#home"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#product"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="lg:col-span-1 mt-5">
          <h3 className="text-lg font-semibold mb-6 text-white">
            Join Our Newsletter
          </h3>
          <form onSubmit={handleSubscribe} className="mb-3">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-[#1E1E1E]  rounded-l text-white text-sm placeholder-gray-400 focus:outline-none focus:border-gray-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-r hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="text-[#4d4b4b] text-xs leading-relaxed">
            * Will send you weekly updates and news about the company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
