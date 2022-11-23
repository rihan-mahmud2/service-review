import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";
import { Title } from "../../../Shared/Title";
import Addrivews from "../../Rivews/Addrivews";
import Rivews from "../../Rivews/Rivews";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  Title("Service details");
  const SingleService = useLoaderData();
  const { picture, name, description } = SingleService;

  return (
    <div>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={picture}
              alt=""
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-5 container mx-auto">
        <Rivews
          isAdd={isAdd}
          reviews={reviews}
          setReviews={setReviews}
          index={name}
        ></Rivews>
      </section>
      <section className="container mx-auto my-24">
        {user ? (
          <Addrivews
            setIsAdd={setIsAdd}
            isAdd={isAdd}
            rivews={reviews}
            setRivews={setReviews}
            SingleService={SingleService}
          />
        ) : (
          <Link to="/login">
            <button>Please Login To add rivews</button>{" "}
          </Link>
        )}
      </section>
    </div>
  );
};

export default ServiceDetails;
