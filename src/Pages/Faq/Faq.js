import React, { useEffect, useState } from "react";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="grid grid-cols-1cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-5 mx-auto my-10">
      {blogs.map((blog) => (
        <SingleFaq blog={blog} key={blog}></SingleFaq>
      ))}
    </div>
  );
};

export default Faq;
