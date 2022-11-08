import React from "react";

const Services = ({ service }) => {
  const { picture, name, description } = service;
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
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
