import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Data";

const ServiceDetails = () => {
  const { id } = useParams();
  const a = products.filter((x) => x.id == id);

  return (
    <div>
      <p>{a[0].title}</p>
      <div><img src={a[0].Image} alt="auffkj" /></div>
       
    </div>
  );
};

export default ServiceDetails;
