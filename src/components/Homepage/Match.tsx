import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { MessageSquare, Users, Zap } from "lucide-react";

const Match = () => {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Fade triggerOnce direction="up" damping={2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[#ff0a54]/10 to-transparent rounded-3xl"></div>
              <div className="flex justify-center gap-6">
                <div className="relative">
                  <Image
                    src="/img/match.png"
                    width={300}
                    height={600}
                    alt="Match interface"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ff0a54] rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="hidden xl:block relative">
                  <Image
                    src="/img/chat.png"
                    width={300}
                    height={600}
                    alt="Chat interface"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#ff0a54]" />
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade triggerOnce direction="up" damping={2}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#ff0a54] rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[#ff0a54] font-semibold text-lg">
                    Instant Connection
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                  Match and <span className="text-[#ff0a54]">chat</span> with
                  students
                </h3>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you are looking for a romantic relationship, a study
                partner, or just someone to share meaningful conversations with,
                our platform helps you find your ideal match based on values,
                interests, and personality.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="p-2 bg-[#ff0a54] rounded-lg mt-1">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">
                      Smart Matching Algorithm
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Get paired with students who share your passions and goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="p-2 bg-[#ff0a54] rounded-lg mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">
                      Instant Messaging
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Start chatting immediately with seamless messaging system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Match;
