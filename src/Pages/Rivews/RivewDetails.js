import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const RivewDetails = ({ rivew }) => {
  return (
    <div className="shadow-xl p-5 relative min-h-full">
      <div>
        <div className="avatar absolute top-0 left-32">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img alt="" src={rivew?.image} />
            <h1>{rivew?.name}</h1>
          </div>
        </div>
        <div className="mt-20">
          <span>
            <StarIcon className="w-3 inline"></StarIcon>
            <StarIcon className="w-3 inline"></StarIcon>
            <StarIcon className="w-3 inline"></StarIcon>
            <StarIcon className="w-3 inline"></StarIcon>
            <StarIcon className="w-3 inline"></StarIcon>
          </span>
          <p>{rivew?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RivewDetails;
