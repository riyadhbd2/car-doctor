import React from "react";
import photo_one from "../assets/images/banner/1.jpg";
import photo_two from "../assets/images/banner/2.jpg";
import photo_three from "../assets/images/banner/3.jpg";
import photo_four from "../assets/images/banner/4.jpg";
import photo_five from "../assets/images/banner/5.jpg";
import photo_six from "../assets/images/banner/6.jpg";

const Hero = () => {
  return (
    <div className="carousel w-full h-[600px]">
      {/* photo one */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={photo_one} className="w-full h-full rounded-lg" />
        {/* text */}
        <div className="w-1/2 h-full rounded-lg absolute top-1/2 justify-center items-center flex -translate-y-1/2 transform p-10  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div>
            <h2 className="text-6xl text-white">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white mt-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5 mt-5">
              <button className="btn btn-active btn-secondary">
                Secondary
              </button>
              <button className="border text-white px-4 py-2 rounded-xl">
                Success
              </button>
            </div>
          </div>
        </div>
        {/* arrorw */}
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* photo two */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={photo_two} className="w-full h-full" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* photo three */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={photo_three} className="w-full h-full" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* photo four */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={photo_four} className="w-full h-full" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* photo five */}
      <div id="slide5" className="carousel-item relative w-full">
        <img src={photo_five} className="w-full h-full" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* photo six */}
      <div id="slide6" className="carousel-item relative w-full">
        <img src={photo_six} className="w-full h-full" />
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
