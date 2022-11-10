import { data } from "autoprefixer";
import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Context/ContextProvider";

const Addrivews = () => {
  const { user } = useContext(AuthContext);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);

    const description = form.description.value;
    const service = {
      name,
      email,
      description,
    };

    fetch("https://service-reviews-server.vercel.app/rivews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Rivews added successfully");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form
        onSubmit={handleAddService}
        className="grid grid-cols-2 container mx-auto items-center gap-5
     h-screen"
      >
        <input
          type="text"
          name="name"
          placeholder="Type here service name"
          className="input border border-black w-full  mb-5"
        />

        <input
          type="email"
          name="email"
          defaultValue={user?.email}
          placeholder="Type here service img url"
          className="input border border-black w-full  mb-5"
        />
        <input
          type="date"
          name="date"
          defaultValue={new Date().getDate()}
          placeholder="Type here service img url"
          className="input border border-black w-full  mb-5"
        />
        <textarea
          name="description"
          className="textarea textarea-primary"
          placeholder="Type service description"
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Add Rivews
        </button>
      </form>
    </div>
  );
};

export default Addrivews;
