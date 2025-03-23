"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import CatchMe from "@/assets/CatchMe";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { heroTexts } from "@/app/data";
const Hero = () => {
  return (
    <div className="font-raleway w-full text-black">
      {/* Main Wrapper */}
      <div className="h-screen w-full relative flex flex-row">
        {/* Background Wrapper  or left side content*/}
        <div className="w-full xl:w-3/4 h-full xl:rounded-e-full relative overflow-hidden">
          {/* Background Image with Opacity */}
          <div className="absolute inset-0 bg-hero bg-cover bg-center after:absolute after:inset-0 after:bg-black after:opacity-50"></div>

          {/* Inner Content (Full Opacity) */}
          <div className="relative z-10 p-10 text-white justify-between gap-20 flex flex-col">
            <div className="flex flex-row items-center 4">
              <CatchMe />
              <h1 className="text-4xl font-raleway text-folly">CatchMeApp</h1>
            </div>

            <p className="text-6xl font-raleway">
              Fill the empty space in your Heart
            </p>
            {/* 
            <p className="">
              Find your value match and build a connection, friendship, or
              relationship with someone who has similar shared value as you
            </p> */}
            <TypeAnimation
              className="text-2xl font-dmSans"
              sequence={heroTexts}
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Right Side Content */}
        <div className="hidden flex flex-col justify-between  xl:block xl:w-1/4 relative">
          <div className="flex justify-between p-10 flex flex-col w-full gap-10 ">
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.boogie2k.catchmeappfrontend"
              }
              target="_blank"
              className="flex flex-row bg-white py-2.5 px-3.5 rounded-4xl justify-around shadow-lg shadow-black/50"
            >
              <FontAwesomeIcon
                style={{ width: 48, height: 48 }}
                icon={faPlay}
              />
              <div className="flex flex-col">
                <p className="font-dmSans">available on</p>
                <p>Google Play</p>
              </div>
            </Link>
            <Link
              target="_blank"
              href={"https://apps.apple.com/gb/app/thecatchmeapp/id6738162941"}
              className="flex flex-row bg-white py-2.5 px-3.5 rounded-4xl justify-around shadow-lg shadow-black/50"
            >
              <FontAwesomeIcon
                style={{ width: 48, height: 48 }}
                icon={faAppleAlt}
              />
              <div className="flex flex-col">
                <p className="font-dmSans">available on</p>
                <p>App store</p>
              </div>
            </Link>
          </div>

          <div className="overflow-hidden  absolute bottom-0 w-full">
            <img
              className="rounded-full opacity-50  z-10"
              src="/img/hero-girl.jpg"
              style={{ width: 250, height: 250 }}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
