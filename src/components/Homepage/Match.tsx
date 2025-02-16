import React from "react";
import { Fade } from "react-awesome-reveal";

const Match = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-0 px-10  gap-10 lg:pl-10">
      <Fade
        triggerOnce
        direction="left"
        damping={2}
        className=" xl:w-2/4  h-screen"
      >
        <div className="w-full flex-row flex justify-evenly h-full">
          <img src="/img/match.png" style={{ height: "80%" }} alt="" />
          <img
            className="hidden xl:block"
            src="/img/chat.png"
            style={{ height: "80%" }}
            alt=""
          />
        </div>
      </Fade>
      <Fade triggerOnce direction="right" damping={2} className=" lg:w-2/4  ">
        <div className=" flex flex-col gap-10  items-center w-full  justify-flex-end">
          <h4 className="font-raleway text-3xl text-black ">
            Match and chat with students
          </h4>
          <p className="font-dmSans text-black">
            CatchMeApp is a dating app built exclusively for students, making it
            easy to connect, match, and chat with like-minded peers. Whether you
            are looking for a romantic relationship, a study partner, or just
            someone to share meaningful conversations with, our platform helps
            you find your ideal match based on values, interests, and
            personality. With our smart matching algorithm, you will be paired
            with other students who share your passions and goals, ensuring more
            meaningful connections. Once matched, you can start chatting
            instantly using our seamless messaging system, designed to keep
            conversations engaging and natural. CatchMeApp is more than just a
            dating app—it is a space where students can meet new people in a
            safe and friendly environment. Join today and start making
            connections that matter!
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Match;
