import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import { Title } from "../../Shared/Title";
import SingleService from "./SingleService/SingleService";

const AllServices = () => {
  Title("all services");
  const services = useLoaderData();
  const { user } = useContext(AuthContext);
  return (
    <div className="relative">
      <div className="z-10 right-0 top-20 fixed">
        {user ? (
          <Link className="btn btn-primary" to="/addrivews">
            Add rivews
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Please Login to add your rivews Login
          </Link>
        )}
      </div>
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
