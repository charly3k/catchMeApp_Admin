import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Conclusion = () => {
  return (
    <div className="md:px-40 px-5  flex flex-col gap-10   relative  ">
      <div className="absolute inset-0 bg-hero-conv bg-cover bg-center opacity-50">
        {" "}
      </div>
      <div className="relative z-10 p-10  justify-between gap-20 flex flex-col">
        <h4 className="font-raleway text-3xl text-black ">
          WHY YOU SHOULD USE CATCHMEAPP AS A STUDENT
        </h4>
        <p className="font-dmSans text-black ">
          CatchMeApp makes connection with other students easy and convenient.
          With smart filters, instant notifications, and a simple interface, it
          helps you connect with like-minded students anytime, anywhere.
          CatchMeApp Discovery Page makes connecting with potential matches
          effortless. Browse by school, academic level, or course of study to
          find students who share your interests. With filters for real-time
          engagement and active users, every interaction is intentional and
          tailored to your preferences. Enjoy CatchMeApp completely free! All
          features are accessible once your account is verified, no
          subscriptions or in-app purchases required. Start connecting and
          exploring without any hidden costs!
        </p>

        <div className="flex flex-col lg:flex-row w-full gap-10 justify-center">
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.boogie2k.catchmeappfrontend"
            }
            target="_blank"
            className="flex flex-row bg-white py-2.5 px-3.5 gap-7   rounded-4xl justify-around shadow-lg shadow-black/50 self-center md:self-start"
          >
            <FontAwesomeIcon
              style={{ width: 48, height: 48, color: "black" }}
              icon={faPlay}
            />
            <div className="flex flex-col">
              <p className="font-dmSans text-black">available on</p>
              <p className="font-raleway text-black">Google Play</p>
            </div>
          </Link>
          <Link
            target="_blank"
            href={"https://apps.apple.com/gb/app/thecatchmeapp/id6738162941"}
            className="flex flex-row bg-white py-2.5 px-3.5 gap-7 rounded-4xl justify-around shadow-lg shadow-black/50 self-center md:self-start"
          >
            <FontAwesomeIcon
              style={{ width: 48, height: 48, color: "black" }}
              icon={faAppleAlt}
            />
            <div className="flex flex-col">
              <p className="font-dmSans text-black">available on</p>
              <p className="font-raleway text-black">App store</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
