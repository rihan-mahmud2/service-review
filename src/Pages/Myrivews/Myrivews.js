import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import { Title } from "../../Shared/Title";
import Mysinglerivews from "./Mysinglerivews";

const Myrivews = () => {
  const { user } = useContext(AuthContext);
  const [rivews, setRivews] = useState([]);
  Title("myrivews");
  useEffect(() => {
    fetch(`http://localhost:5000/rivews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRivews(data));
  }, [user?.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {rivews.map((rivew) => (
            <Mysinglerivews rivew={rivew} key={rivew._id}></Mysinglerivews>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myrivews;
