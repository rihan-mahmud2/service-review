import { data } from "autoprefixer";
import { convertToHsl } from "daisyui/src/colors/functions";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendImageToImagDb } from "../../api/uploadImage/uploadImage";
import { AuthContext } from "../../Context/ContextProvider";
import { Title } from "../../Shared/Title";

const Register = () => {
  const navigate = useNavigate();
  Title("Register");
  const { createUser, updateUser, setLoading } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        sendImageToImagDb(image)
          .then((data) => {
            updateUserProfile(name, data);
            console.log(data);
            setLoading(false);
            navigate("/");
          })
          .catch((err) => console.log(err));
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  const updateUserProfile = (name, image) => {
    updateUser(name, image)
      .then((result) => {
        navigate("/");
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="Name"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="file"
                name="image"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span>
                  Have an account
                  <Link to="/login" className="label-text-alt link link-hover">
                    Login
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
