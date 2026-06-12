import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";

const Services = () => {
  return (
    <div className=" w-[100%]  h-[700px] flex flex-col justify-center items-center bg-amber-950 gap-8">
      <div className="w-[80%] flex flex-col gap-10">
        <div className="flex flex-col bg-amber-400  text-2xl">
          <h1 className="text-4xl">Our Services</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
        <div className="flex gap-24 mb-8 ">
          <div className="w-xl h-50 bg-blue-600 flex">
           birinci
          </div>
          <div className="w-xl h-50 bg-amber-300">qutu ikif</div>
        </div>
        <div className="flex gap-24 ">
          <div className="w-xl h-50 bg-amber-300">qutu 3</div>
          <div className="w-xl h-50 bg-amber-300">qutu 4</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
