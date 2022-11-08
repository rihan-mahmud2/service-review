import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService/SingleService";

const AllServices = () => {
  const services = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-5 my-10 container mx-auto">
      {services.map((service) => (
        <SingleService service={service} key={service._id}></SingleService>
      ))}
    </div>
  );
};

export default AllServices;
