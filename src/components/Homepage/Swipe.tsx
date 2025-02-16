import React from "react";
import { Fade } from "react-awesome-reveal";

const Swipe = () => {
  return (
    <div className="flex flex-col lg:flex-row px-10 lg:px-0 lg:pl-40 gap-10">
      <Fade
        triggerOnce
        direction="left"
        damping={2}
        className="flex flex-col gap-10  items-center lg:w-2/4  justify-flex-end"
      >
        <div className=" ">
          <h4 className="font-raleway text-3xl text-black ">
            Online Dating for Students
          </h4>
          <p className="font-dmSans text-black">
            CatchMeApp is a dating app designed exclusively for students,
            offering a fun and effortless way to meet new people on your campus
            and beyond. Our smart matching system recommends potential matches
            based on your interests, values, and preferences, making it easy to
            find someone who truly connects with you. With a simple swipe, you
            can browse through curated profiles of other students, liking those
            who catch your interest. Want more control over your matches? Our
            advanced filters allow you to customize your search based on factors
            like location, academic interests, or shared hobbies, ensuring that
            every recommendation aligns with what you are looking for. Once you
            find a match, start chatting instantly with our built-in messaging
            system and take the next step in building a meaningful connection.
            Whether you are looking for love, friendship, or just great
            conversations, CatchMeApp makes it easy to connect in a way that
            feels right for you!
          </p>
        </div>
      </Fade>

      <Fade
        triggerOnce
        direction="right"
        damping={2}
        className=" xl:w-2/4 h-screen"
      >
        <div className="w-full h-full flex justify-evenly  ">
          <img
            className="xl:block hidden"
            src="/img/swipe.png"
            style={{ height: "80%" }}
            alt=""
          />
          <img src="/img/swipe.png" style={{ height: "80%" }} alt="" />
        </div>
      </Fade>
    </div>
  );
};

export default Swipe;
