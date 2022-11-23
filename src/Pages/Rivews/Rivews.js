import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";

import RivewDetails from "./RivewDetails";
const Rivews = ({ index, isAdd, reviews, setReviews }) => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/reviews/${index}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("myToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [isAdd]);
  console.log(index);

  return (
    <>
      {loading || !user ? (
        <h1>Loading.....</h1>
      ) : (
        reviews.map((rivew) => (
          <div className="container mx-auto my-20">
            <RivewDetails
              setReviews={setReviews}
              rivew={rivew}
              key={rivew._id}
            ></RivewDetails>
          </div>
        ))
      )}
    </>
  );
};

export default Rivews;
