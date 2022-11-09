import { data } from "autoprefixer";
import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Context/ContextProvider";

const Addservice = () => {
  const { user } = useContext(AuthContext);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const picture = form.img.value;
    const description = form.description.value;
    const service = {
      name,
      email,
      description,
      picture,
    };

    fetch("http://localhost:5000/allservices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        swal("post added successfully");
      });
  };
  return (
    <form
      onSubmit={handleAddService}
      className="flex flex-col
     justify-center items-center h-screen"
    >
      <input
        type="text"
        name="name"
        placeholder="Type here service name"
        className="input border border-black w-full max-w-xs mb-5"
      />
      <input
        type="text"
        name="img"
        placeholder="Type here service img url"
        className="input border border-black w-full max-w-xs mb-5"
      />
      <input
        type="email"
        name="email"
        defaultValue={user?.email}
        placeholder="Type here service img url"
        className="input border border-black w-full max-w-xs mb-5"
      />
      <textarea
        name="description"
        className="textarea textarea-primary"
        placeholder="Type service description"
      ></textarea>

      <button type="submit" className="btn btn-primary mt-5">
        Add service
      </button>
    </form>
  );
};

export default Addservice;
