import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

const Mysinglerivews = ({ rivew }) => {
  const handleDelete = () => {
    fetch(`http://localhost:5000/rivews/${rivew._id}`, {
      method: "DELETE",
    });
  };
  return (
    <tr>
      <th>
        <TrashIcon
          onClick={handleDelete}
          className="text-sm w-10 text-red-400"
        ></TrashIcon>
      </th>
      <td>{rivew?.name}</td>
      <td>{rivew.email}</td>
      <td>{rivew.description}</td>
    </tr>
  );
};

export default Mysinglerivews;
