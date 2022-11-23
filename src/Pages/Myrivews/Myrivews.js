import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Context/ContextProvider";
import { Title } from "../../Shared/Title";
import Mysinglerivews from "./Mysinglerivews";

const Myrivews = () => {
  const { user, loading, setLoading } = useContext(AuthContext);

  const [rivews, setRivews] = useState([]);
  Title("myrivews");

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/rivews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          swal("Deleted sucessfully");
          const remainings = rivews.filter((riv) => riv._id !== id);
          console.log(remainings);
          setRivews(remainings);
        }
      });
  };

  setLoading(true);
  useEffect(() => {
    fetch(`http://localhost:5000/rivews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("myToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRivews(data);
        setLoading(false);
      });
  }, [user, setLoading]);

  return (
    <>
      {!user?.email ? (
        <h1>loading........</h1>
      ) : (
        <div className="my-10 container mx-auto">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>email</th>
                  <th>description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rivews?.length === 0 ? (
                  <p className="text-red-500 h-screen text-center text-xl mt-10">
                    No rivews is added
                  </p>
                ) : (
                  rivews?.map((rivew) => (
                    <Mysinglerivews
                      handleDelete={handleDelete}
                      rivew={rivew}
                      key={rivew._id}
                    ></Mysinglerivews>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Myrivews;
