import React from "react";

const SingleFaq = ({ blog }) => {
  const { picture, Workname, description } = blog;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Workname}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleFaq;
