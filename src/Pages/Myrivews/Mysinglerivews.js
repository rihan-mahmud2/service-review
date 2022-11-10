import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import Other from "../Others/Other";

const Mysinglerivews = ({ handleDelete, rivew }) => {
  const handleUpdate = () => {
    fetch("");
  };

  return (
    <tr>
      <th>
        <TrashIcon
          onClick={() => handleDelete(`${rivew._id}`)}
          className="text-sm w-10 text-red-400"
        ></TrashIcon>
      </th>
      <td>{rivew?.name}</td>
      <td>{rivew.email}</td>
      <td>{rivew.description}</td>
      <td onClick={handleUpdate}>
        <Other></Other>
      </td>
    </tr>
  );
};

export default Mysinglerivews;
