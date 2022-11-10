import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Title } from "../../Shared/Title";
import Services from "../Services/Services";
import "./Home.css";
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
      <section>
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

      {/* //  there service section  */}
    </div>
  );
};

export default Home;
