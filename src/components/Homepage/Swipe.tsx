import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { Smartphone, Filter, Heart } from "lucide-react";

const Swipe = () => {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Fade triggerOnce direction="left" damping={2}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#ff0a54] rounded-xl">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[#ff0a54] font-semibold text-lg">
                    Smart Matching
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  Student Community app where students can{" "}
                  <span className="text-[#ff0a54]">connect</span> with each
                  other everyday.
                </h3>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                CatchMeApp is a student community app designed exclusively for
                UK universities, offering a fun and effortless way to meet new
                people on your campus and beyond. Our smart matching system
                recommends potential matches based on your interests, values,
                and preferences.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-md">
                  <div className="p-2 bg-[#ff0a54]/10 rounded-lg">
                    <Heart className="w-5 h-5 text-[#ff0a54]" />
                  </div>
                  <span className="font-semibold text-black">Smart Swipe</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-md">
                  <div className="p-2 bg-[#ff0a54]/10 rounded-lg">
                    <Filter className="w-5 h-5 text-[#ff0a54]" />
                  </div>
                  <span className="font-semibold text-black">
                    Advanced Filters
                  </span>
                </div>
              </div>
            </div>
          </Fade>

          <Fade triggerOnce direction="right" damping={2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff0a54]/20 to-transparent rounded-3xl"></div>
              <div className="flex justify-center gap-6">
                <div className="relative">
                  <Image
                    src="/img/swipe.png"
                    width={300}
                    height={600}
                    alt="Swipe interface"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ff0a54] rounded-full animate-pulse"></div>
                </div>
                <div className="hidden xl:block relative">
                  <Image
                    src="/img/swipe.png"
                    width={300}
                    height={600}
                    alt="Swipe interface 2"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Swipe;
