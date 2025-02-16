import React from "react";

const Summary = () => {
  return (
    <div className="pt-20 pb-32 px-10 ">
      <h4 className="font-raleway text-3xl text-black">
        What will you find on CatchMeApp?
      </h4>

      <div className="flex flex-col gap-5 sm:gap-0 sm:gap-0 sm:flex-row justify-evenly mt-10 ">
        <div className="flex flex-col sm:gap-4 sm:w-1/5">
          <h4 className="font-raleway text-black">
            Student Community Discovery Search
          </h4>
          <p className="font-dmSans text-black text-justify">
            Browse through list of schools, levels, and course of study to
            connect with one or more university students in the United Kingdom
          </p>
        </div>

        <div className="flex flex-col sm:gap-4 sm:w-1/5">
          <h4 className="font-raleway text-black">Cool Chat Interface</h4>
          <p className="font-dmSans text-black">
            Engage in meaning conversation with other students.
          </p>
        </div>

        <div className="flex flex-col sm:gap-4 sm:w-1/5">
          <h4 className="font-raleway text-black">Recommended Student Users</h4>
          <p className="font-dmSans text-black">
            The app recommends other students who are registered on the app
            according to your selected preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
