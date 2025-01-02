import React from "react";
import parts from "../assets/images/about_us/parts.jpg";
import person from "../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="flex gap-5 mt-40 mb-40">
      <div className="w-1/2">
        <div className="w-5/6 relative">
          <img className="w-3/4 pb-16" src={person} alt="" />
          <img className="w-1/2 absolute bottom-0 right-0" src={parts} alt="" />
        </div>
      </div>
      <div className="w-1/2 p-16">
        <h2>About Us</h2>
        <h1 className="text-4xl">
          We are qualified of experince in this worl
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button>Get More Info</button>
      </div>
    </div>
  );
};

export default About;
