import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { Compass, School, Clock } from "lucide-react";

const Discover = () => {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Fade triggerOnce direction="left" damping={2}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#ff0a54] rounded-xl">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[#ff0a54] font-semibold text-lg">
                    Discovery Features
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  Browse other students on our{" "}
                  <span className="text-[#ff0a54]">discovery</span> page
                </h3>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                CatchMeApp Discovery Page makes it easier than ever for students
                to explore and connect with potential matches beyond just
                swiping. This feature allows you to discover people in different
                ways, ensuring that every interaction feels intentional and
                relevant.
              </p>

              <div className="grid gap-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md border-l-4 border-[#ff0a54]">
                  <School className="w-8 h-8 text-[#ff0a54]" />
                  <div>
                    <h4 className="font-semibold text-black">
                      Browse by School
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Connect with students from your university
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md border-l-4 border-[#ff0a54]">
                  <Clock className="w-8 h-8 text-[#ff0a54]" />
                  <div>
                    <h4 className="font-semibold text-black">
                      Real-time Activity
                    </h4>
                    <p className="text-gray-600 text-sm">
                      See who&apos;s currently active and ready to chat
                    </p>
                  </div>
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
                    src="/img/discover.png"
                    width={300}
                    height={600}
                    alt="Discovery interface"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#ff0a54] rounded-full flex items-center justify-center animate-bounce">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="hidden xl:block relative">
                  <Image
                    src="/img/discover-two.png"
                    width={300}
                    height={600}
                    alt="Discovery interface 2"
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Discover;
