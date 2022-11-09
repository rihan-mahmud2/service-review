import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

const Mysinglerivews = ({ rivew }) => {
  return (
    <tr>
      <th>
        <TrashIcon className="text-sm w-10 text-red-400"></TrashIcon>
      </th>
      <td>{rivew?.name}</td>
      <td>{rivew.email}</td>
      <td>{rivew.description}</td>
    </tr>
  );
};

export default Mysinglerivews;
