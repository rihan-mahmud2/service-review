import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Services = ({ service }) => {
  const { picture, name, description } = service;
  return (
    <div className="card bg-dark-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={picture}>
            <img src={picture} alt="Shoes" />
          </PhotoView>
        </PhotoProvider>
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
      </div>
    </div>
  );
};

export default Services;
