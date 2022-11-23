import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Context/ContextProvider";
import { Title } from "../../Shared/Title";

const Login = () => {
  const { logIn, user, signWithGoogle, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  Title("Login");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };

        // implementing jwt in client

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("myToken", data.token);
            setLoading(false);
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => swal(err.message));
  };

  const handleGoogleSign = () => {
    signWithGoogle()
      .then((res) => {
        const user = res.user;

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("myToken", data.token);
            setLoading(false);
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => swal(err.message));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);
  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
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
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Register
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <button
                onClick={handleGoogleSign}
                className="btn btn-primary mt-3"
              >
                Register with google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
