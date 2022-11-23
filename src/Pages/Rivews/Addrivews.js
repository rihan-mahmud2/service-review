import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import swal from "sweetalert";
import { AuthContext } from "../../Context/ContextProvider";

const Addrivews = ({ SingleService, isAdd, setIsAdd, setReviews, reviews }) => {
  const { user } = useContext(AuthContext);
  const [serviceOut, setServiceOut] = useState({});

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const serviceName = SingleService.name;
    const email = user?.email;
    const image = user?.photoURL;
    const description = form.description.value;
    const date = format(new Date(), "PP");
    console.log(name, email, date, description, user?.displayName);

    const service = {
      name,
      email,
      date,
      description,
      image,
      serviceName,
    };
    setServiceOut(service);
  };

  // useEffect(() => {
  fetch("http://localhost:5000/rivews", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("myToken")}`,
    },
    body: JSON.stringify(serviceOut),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        // setIsAdd(!isAdd);
        // swal("Rivews added successfully");
      }
    })
    .catch((err) => console.log(err));
  // }, [serviceOut, reviews, setReviews]);

  return (
    <div>
      <form onSubmit={() => handleAddService()} className="w-1/2 mx-auto">
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            name="description"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Rivews
        </button>
      </form>
    </div>
  );
};

export default Addrivews;
