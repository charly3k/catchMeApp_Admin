import React from "react";

import Hero from "@/components/Homepage/Hero";
import Summary from "@/components/Homepage/Summary";
import Swipe from "@/components/Homepage/Swipe";
import Match from "@/components/Homepage/Match";
import Discover from "@/components/Homepage/Discover";
import StudentsDating from "@/components/Homepage/StudentsDating";
import Friendship from "@/components/Homepage/Friendship";
import Conclusion from "@/components/Homepage/Conclusion";
import { Fade } from "react-awesome-reveal";
import Footer from "@/components/Footer";
const Page = () => {
  return (
    <div>
      <Hero />

      <Fade triggerOnce damping={2} direction="down">
        <Summary />
      </Fade>

      <Swipe />
      <Match />
      <Discover />

      <Fade triggerOnce damping={2} direction="up">
        <StudentsDating />
      </Fade>
      <Fade triggerOnce damping={2} direction="up">
        <Friendship />
      </Fade>

      <Conclusion />
      <Footer />
    </div>
  );
};

export default Page;
