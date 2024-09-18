import Navbar from "@/components/Navbar";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex">
      <div className="w-1/4 h-screen">
        <Navbar />
      </div>
      <div className="w-full h-screen bg-gray-100">home dashboard</div>
      <div className="w-1/4 h-screen">right-side-bar</div>
    </div>
  );
};

export default page;
