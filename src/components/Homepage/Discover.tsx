import React from "react";
import { Fade } from "react-awesome-reveal";

const Discover = () => {
  return (
    <div className="flex flex-col lg:flex-row px-10 lg:px-0 lg:pl-40 gap-10 mt-10 lg:mt-0">
      <Fade triggerOnce direction="up" damping={2} className=" lg:w-2/4">
        <div className=" flex flex-col gap-10  items-center w-full  justify-flex-end">
          <h4 className="font-raleway text-3xl text-black ">
            Browse other students on our discovery page
          </h4>
          <p className="font-dmSans text-black">
            CatchMeApp Discovery Page makes it easier than ever for students to
            explore and connect with potential matches beyond just swiping. This
            feature allows you to discover people in different ways, ensuring
            that every interaction feels intentional and relevant to your
            preferences. You can browse by school, making it simple to connect
            with students from your university or nearby campuses. If you prefer
            to meet people at a similar stage in their academic journey, you can
            filter matches by level, whether you are a freshman, senior, or
            graduate student. For those who want to find like-minded individuals
            with shared academic interests, the course of study filter helps you
            connect with students in your field. If real-time engagement is
            important to you, the Discovery Page also highlights recently active
            users, making it easier to interact with people who are more likely
            to respond. Additionally, the currently active section allows you to
            connect instantly with students who are online and ready to chat,
            making meaningful conversations happen in real time. With CatchMeApp
            Discovery Page, you have complete control over how you meet new
            people.
          </p>
        </div>
      </Fade>
      <Fade
        triggerOnce
        direction="up"
        damping={2}
        className="xl:w-2/4 h-screen"
      >
        <div className="w-full flex-row flex justify-evenly h-full">
          <img src="/img/discover.png" style={{ height: "80%" }} alt="" />
          <img
            className="hidden xl:block"
            src="/img/discover-two.png"
            style={{ height: "80%" }}
            alt=""
          />
        </div>
      </Fade>
    </div>
  );
};

export default Discover;
