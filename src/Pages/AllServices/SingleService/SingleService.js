import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { picture, name, description, _id } = service;
  return (
    <div className="card bg-dark-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {description.length > 100
            ? `${description.slice(0, 10)}...`
            : description}
        </p>
        <div className="card-actions justify-center">
          <Link to={`/allServices/${_id}`} className="btn btn-primary">
            See Service Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
