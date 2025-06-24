"use client";
import { TypeAnimation } from "react-type-animation";
import { heroTexts } from "@/app/data";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import CatchMe from "@/assets/CatchMe";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#ff0a54] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-[#ff0a54] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 mb-8">
            <div className="hidden sm:flex">
              <CatchMe />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#ff0a54] tracking-tight">
              TheCatchMeApp
            </h1>
          </div>

          {/* Main heading */}
          <div className="mb-8">
            <h2 className="text-5xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Fill the empty
              <span className="block text-[#ff0a54] relative">
                space in your
                <Sparkles className="absolute -top-4 -right-8 w-12 h-12 text-[#ff0a54] animate-pulse" />
              </span>
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Heart
              </span>
            </h2>
          </div>

          {/* Animated text */}
          <div className="mb-4">
            <TypeAnimation
              className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
              sequence={heroTexts}
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          {/* CTA Buttons */}

          <div>
            <Button
              onClick={() => router.push("/get-started")}
              size="lg"
              className="bg-[#ff0a54] hover:bg-[#e00948] text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl shadow-[#ff0a54]/25 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-hero bg-cover bg-center after:absolute after:inset-0 after:bg-black after:opacity-50"></div>
    </div>
  );
};

export default Hero;
