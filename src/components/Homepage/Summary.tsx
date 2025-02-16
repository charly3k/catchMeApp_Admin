import React from "react";

const Summary = () => {
  return (
    <div className="pt-20 pb-32 px-10 xl:px-32">
      <h4 className="font-raleway text-3xl text-black">
        What's on CatchMeApp?
      </h4>

      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-evenly mt-10 ">
        <div className="flex flex-col sm:gap-4">
          <h4 className="font-raleway text-black">
            Recommended Matches for you
          </h4>
          <p className="font-dmSans text-black">Find your Value Match</p>
        </div>

        <div className="flex flex-col sm:gap-4">
          <h4 className="font-raleway text-black">Robust Discovery page</h4>
          <p className="font-dmSans text-black">
            Browse through list of potential matches
          </p>
        </div>

        <div className="flex flex-col sm:gap-4 ">
          <h4 className="font-raleway text-black">Cool chat interface</h4>
          <p className="font-dmSans text-black">Chat with other students</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
