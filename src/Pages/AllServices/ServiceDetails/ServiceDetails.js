import { useLoaderData } from "react-router-dom";
import Rivews from "../../Rivews/Rivews";

const ServiceDetails = () => {
  const SingleService = useLoaderData();

  const { picture, index, name, description } = SingleService;
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
        <Rivews index={index}></Rivews>
      </section>
    </div>
  );
};

export default ServiceDetails;
