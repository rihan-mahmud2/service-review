import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const SingleService = useLoaderData();
  console.log(SingleService);
  return (
    <div>
      <h1>This is the detail page</h1>
    </div>
  );
};

export default ServiceDetails;
