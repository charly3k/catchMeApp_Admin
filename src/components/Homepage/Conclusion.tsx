"use client";

import { Button } from "@/components/ui/button";
import { handleExternalLink } from "@/utils/handleExternalLink";
import { faAppleAlt, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Smartphone, Download, Star } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Conclusion = () => {
  return (
    <div className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden before:absolute before:inset-0 before:bg-hero-conv before:bg-cover before:bg-center before:opacity-100 before:z-0">
      {/* Background elements */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#ff0a54] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#ff0a54] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#ff0a54] rounded-3xl">
              <Smartphone className="w-12 h-12 text-white" />
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            WHY YOU SHOULD USE{" "}
            <span className="text-[#ff0a54]">TheCATCHMEAPP</span> AS A STUDENT
          </h3>
          <div className="w-24 h-1 bg-[#ff0a54] mx-auto rounded-full"></div>
        </div>

        <div className="bg-black backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
          <p className="text-white font-bold text-lg leading-relaxed">
            TheCatchMeApp makes connection with other students easy and
            convenient. With smart filters, instant notifications, and a simple
            interface, it helps you connect with like-minded students anytime,
            anywhere. Enjoy CatchMeApp completely free! All features are
            accessible once your account is verified, no subscriptions or in-app
            purchases required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-black backdrop-blur-lg rounded-2xl border border-white/20">
            <Star className="w-8 h-8 text-[#ff0a54] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">100% Free</h4>
            <p className="text-white font-bold text-sm">
              No hidden costs or subscriptions
            </p>
          </div>
          <div className="p-6 bg-black backdrop-blur-lg rounded-2xl border border-white/20">
            <Download className="w-8 h-8 text-[#ff0a54] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">Easy Setup</h4>
            <p className="text-white font-bold text-sm">
              Quick verification and you&apos;re ready
            </p>
          </div>
          <div className="p-6 bg-black backdrop-blur-lg rounded-2xl border border-white/20">
            <Smartphone className="w-8 h-8 text-[#ff0a54] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">Smart Features</h4>
            <p className="text-white font-bold text-sm">
              Advanced matching and discovery
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          <Button
            onClick={() =>
              handleExternalLink(
                "https://play.google.com/store/apps/details?id=com.boogie2k.catchmeappfrontend"
              )
            }
            variant="outline"
            className="border-[#ff0a54] text-[#ff0a54] hover:bg-[#ff0a54] hover:text-white py-6"
          >
            <FontAwesomeIcon style={{ width: 24, height: 24 }} icon={faPlay} />{" "}
            <div>
              <p className="font-dmSans">available on</p>
              <p>Google Play</p>
            </div>
          </Button>
          <Button
            onClick={() =>
              handleExternalLink(
                "https://apps.apple.com/gb/app/thecatchmeapp/id6738162941"
              )
            }
            className="bg-[#ff0a54] hover:bg-[#e60948] text-white  py-6"
          >
            <FontAwesomeIcon
              style={{ width: 24, height: 24 }}
              icon={faAppleAlt}
            />{" "}
            <div>
              <p className="font-dmSans">available on</p>
              <p>App store</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
