import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import { Title } from "../../Shared/Title";
import SingleService from "./SingleService/SingleService";

const AllServices = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  Title("all services");
  const services = useLoaderData();

  if (!services) {
    return <h1>loading</h1>;
  }

  return (
    <div className="relative">
      <div>
        <div className="grid grid-cols-3 gap-5 my-10 container mx-auto">
          {services.map((service) => (
            <SingleService service={service} key={service._id}></SingleService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
