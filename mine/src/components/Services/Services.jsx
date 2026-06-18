import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { products } from "../data/Data";
const Services = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-[100%]  h-[700px] flex flex-col justify-center items-center  gap-8">
        <div className="flex flex-col   text-2xl ">
          <h1 className="text-4xl">Our Services</h1>
          <p className="mr-28">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
        <div  className=" w-10xl h-110  flex  flex-wrap  h-100  gap-24 ml-36  ">
          {products &&
            products.map((item) => {
              return (
                <div  className="flex border-0.7">
                  <div className="w-xl h-50 bg-amber-50 ">
                        <div className="w-18 h-14 object-cover mt-2">
                        <img src={item.Image}   alt="" />
                    </div>
                    <div className="flex  flex-col gap-3.5 items-start ml-4 ">
                  
                     <div className="ml-16 flex flex-col items-start gap-3">
                      <h1 >{item.title}</h1>
                      <p >
                        fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point
                        of using
                      </p>
                      <button onClick={()=> navigate(`/ServiceDetails/${item.id} `)}>
                        Read More
                      </button>
                     </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

  );
};

export default Services;
