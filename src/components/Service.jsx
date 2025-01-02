import React, { useEffect, useState } from "react";
import { Link } from "react-router";


const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl">Service</h3>
        <h1 className="text-3xl font-bold">Our Service Area</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
          necessitatibus?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10 mb-10">
        {services.map((service) => (
          <div
            key={service._id}
            className="flex flex-col items-center justify-center border p-3 rounded-lg"
          >
            <div className="text-start">
              <img className="h-60 w-96 rounded-lg" src={service.img} alt="" />
              <h1 className="">{service.title}</h1>
              <div className="flex justify-between">
                <p className="text">Price: {service.price}</p>
                <Link to={`/book/${service._id}`}><button className="bg-orange-400 text-white px-2 rounded-xl text-sm">Details...</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
