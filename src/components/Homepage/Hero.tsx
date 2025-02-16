import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import CatchMe from "@/assets/CatchMe";
const Hero = () => {
  return (
    <div className="font-raleway text-black">
      {/* Main Wrapper */}
      <div className="h-screen w-screen relative flex flex-row">
        {/* Background Wrapper  or left side content*/}
        <div className="w-full xl:w-3/4 h-full xl:rounded-e-full relative overflow-hidden">
          {/* Background Image with Opacity */}
          <div className="absolute inset-0 bg-hero bg-cover bg-center opacity-70"></div>

          {/* Inner Content (Full Opacity) */}
          <div className="relative z-10 p-10 text-white justify-between gap-20 flex flex-col">
            <div className="flex flex-row items-center 4">
              <CatchMe />
              <h1 className="text-4xl font-raleway text-folly">CatchMeApp</h1>
            </div>

            <p className="text-6xl font-raleway">
              Fill the empty space in your Heart
            </p>

            <p className="text-2xl font-dmSans">
              Find your Value Match and build a relationship that's as
              meaningful as your shared values.
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="hidden xl:block xl:w-1/4 relative">
          <div className="flex justify-between p-10 flex flex-col w-full gap-10">
            <div className="flex flex-row bg-white py-2.5 px-3.5 rounded-4xl justify-around shadow-lg shadow-black/50">
              <FontAwesomeIcon
                style={{ width: 48, height: 48 }}
                icon={faPlay}
              />
              <div className="flex flex-col">
                <p className="font-dmSans">available on</p>
                <p>Google Play</p>
              </div>
            </div>
            <div className="flex flex-row bg-white py-2.5 px-3.5 rounded-4xl justify-around shadow-lg shadow-black/50">
              <FontAwesomeIcon
                style={{ width: 48, height: 48 }}
                icon={faAppleAlt}
              />
              <div className="flex flex-col">
                <p className="font-dmSans">available on</p>
                <p>App stote</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              className="rounded-full opacity-50 "
              src="/img/hero-girl.jpg"
              style={{ width: 210, height: 210 }}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
