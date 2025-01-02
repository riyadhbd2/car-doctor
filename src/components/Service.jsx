import React, { useEffect, useState } from "react";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
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
      <div className="grid grid-cols-3 gap-4 mt-10">
        {services.map((service) => (
          <div
            key={service._id}
            className="flex flex-col items-center justify-center border p-5"
          >
            <div className="text-start">
              <img className="h-60" src={service.img} alt="" />
              <h1 className="">{service.title}</h1>
              <div>
                <p className="text">Price: {service.price}</p>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
