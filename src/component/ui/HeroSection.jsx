import { FaLongArrowAltRight } from "react-icons/fa";
export const HeroSection = () => {
  return (
    <div className=" w-full text-gray-200 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-around items-center mt-6 p-4 sm:p-6 lg:p-8">
        {/* Text Section */}
        <div className="flex flex-col gap-6 justify-center text-center lg:text-left max-w-xl animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            Explore The World, One Country at a Time
          </h1>
          <p className="max-w-[600px] text-sm sm:text-base lg:text-base leading-relaxed opacity-80">
            Discover the beauty of every nation through immersive stories and
            stunning visuals. Let your journey begin with a single step into the
            unknown.
          </p>
          <button className="max-w-[260px] px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-2">
              <h2>Start Exploring</h2>
              <FaLongArrowAltRight />
            </div>
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-start w-full max-w-[450px] animate-fade-in-right">
          <div className="relative w-full aspect-w-16 aspect-h-9 group">
            <img
              src="/images/world.png"
              alt="World Map"
              className="object-cover w-full h-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style jsx>
        {`@keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }`}
      </style>
    </div>
  );
};
