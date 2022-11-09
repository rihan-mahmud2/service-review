import React, { useEffect, useState } from "react";

import RivewDetails from "./RivewDetails";
const Rivews = ({ index }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${index}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [index]);
  console.log(index);

  return reviews.map((rivew) => (
    <div className="grid grid-cols-3 gap-5 container mx-auto">
      <RivewDetails rivew={rivew} key={rivew._id}></RivewDetails>
    </div>
  ));
};

export default Rivews;
