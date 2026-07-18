import React from "react";

const Loader = () => {
  return (
    <div
      className="flex items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="h-6 w-6 animate-spin rounded-full border-[3px] border-white/30 border-t-white" />
    </div>
  );
};

export default Loader;
