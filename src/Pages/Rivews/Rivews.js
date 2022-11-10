import React, { useEffect, useState } from "react";

import RivewDetails from "./RivewDetails";
const Rivews = ({ index }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://service-reviews-server.vercel.app/reviews/${index}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [index]);
  console.log(index);

  return reviews.map((rivew) => (
    <div className="container mx-auto">
      <RivewDetails rivew={rivew} key={rivew._id}></RivewDetails>
    </div>
  ));
};

export default Rivews;
