import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAppleAlt } from "@fortawesome/free-solid-svg-icons";

const Conclusion = () => {
  return (
    <div className="md:px-40 px-5  flex flex-col gap-10  relative ">
      <div className="absolute inset-0 bg-hero-conv bg-cover bg-center opacity-50">
        {" "}
      </div>
      <div className="relative z-10 p-10  justify-between gap-20 flex flex-col">
        <h4 className="font-raleway text-3xl text-black ">
          Make friends and build meaningful connections
        </h4>
        <p className="font-dmSans text-black ">
          Find Love Anywhere with CatchMeApp Love and connection can happen
          anywhere, and CatchMeApp makes student dating easier than ever.
          Whether you're walking to class, studying at the library, or hanging
          out with friends, you can match with like-minded students anytime,
          anywhere. Our mobile app ensures that meeting your perfect match fits
          seamlessly into your busy student life. With an easy-to-use interface,
          CatchMeApp lets you browse profiles, send messages, and connect with
          other students right from your phone. Our smart filters help you find
          matches based on your school, course of study, or shared interests,
          making every connection more meaningful. Plus, you'll receive instant
          notifications when you get a new match or message, so you never miss
          an opportunity to spark something special. New to student dating apps?
          No worries! CatchMeApp is designed to be simple, fun, and stress-free,
          so you can start matching and chatting in no time. Best of all,
          joining is free! Don’t wait—your next great connection is just a swipe
          away.
        </p>

        <div className="flex flex-col lg:flex-row w-full gap-10 justify-center">
          <div className="flex flex-row bg-white py-2.5 px-3.5 gap-7   rounded-4xl justify-around shadow-lg shadow-black/50 self-center md:self-start">
            <FontAwesomeIcon
              style={{ width: 48, height: 48, color: "black" }}
              icon={faPlay}
            />
            <div className="flex flex-col">
              <p className="font-dmSans text-black">available on</p>
              <p className="font-raleway text-black">Google Play</p>
            </div>
          </div>
          <div className="flex flex-row bg-white py-2.5 px-3.5 gap-7 rounded-4xl justify-around shadow-lg shadow-black/50 self-center md:self-start">
            <FontAwesomeIcon
              style={{ width: 48, height: 48, color: "black" }}
              icon={faAppleAlt}
            />
            <div className="flex flex-col">
              <p className="font-dmSans text-black">available on</p>
              <p className="font-raleway text-black">App store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
