import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Title } from "../../Shared/Title";
import Services from "../Services/Services";
import "./Home.css";
import img1 from "../../assets/home (1).jpg";
import img2 from "../../assets/home (2).jpg";
const Home = () => {
  Title("Home");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://service-reviews-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <section className="grid grid-cols-3 gap-5 my-10 container mx-auto">
        {services.map((service) => (
          <Services service={service} key={service._d}></Services>
        ))}

        <Link className="btn btn-primary" to="/allservices">
          See All Services
        </Link>
      </section>
      <section className="container mx-auto">
        <div className="hero min-h-screen cover">
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Meet all your investigative and litigation needs
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex container mx-auto h-screen justify-center mt-10">
        <div className="md:w-1/2 w-[100%] relative">
          <img className="w-[500px] absolute top-20 " src={img1} alt=""></img>
          <img
            className="w-[300px] absolute h-[300px] top-0 left-0"
            src={img2}
            alt=""
          ></img>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl text-green-400">
            I am Samson having vast experience to solve different case
          </h1>
          <p>
            Contact: <span>+99001111111</span>
          </p>
        </div>
      </section>

      {/* //  there service section  */}
    </div>
  );
};

export default Home;
