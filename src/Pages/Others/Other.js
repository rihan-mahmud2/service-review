import React from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Other = () => {
  const storedUser = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const des = form.des.value;

    const updatedRivews = {
      name,
      email,
      des,
    };

    fetch(
      `https://service-reviews-server.vercel.app/updaterivews/${storedUser._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedRivews),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("User Updated");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="w-1/2 shadow-2xl h-screen container mx-auto my-5 flex justify-center items-center">
        <form onSubmit={handleUpdateUser}>
          <h1 className="text-xl mb-5">
            Update the rivews of {storedUser.name}
          </h1>
          <div className="form-control">
            <label></label>
            <input
              type="text"
              name="email"
              defaultValue={storedUser.email}
              className="border border-primary py-2 px-3"
            ></input>
          </div>
          <div className="form-control my-4">
            <label></label>
            <input
              type="text"
              defaultValue={storedUser.name}
              name="name"
              className="border border-primary py-2 px-3"
            ></input>
          </div>
          <div className="form-control">
            <label></label>
            <input
              type="text"
              name="des"
              defaultValue={storedUser.description}
              className="border border-primary py-2 px-3"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary mt-5">
            Update Rivews
          </button>
        </form>
      </div>
    </>
  );
};

export default Other;
