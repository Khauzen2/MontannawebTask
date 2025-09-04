import React, { useState, useEffect } from "react";
import Image1 from "../Images/image1.webp";
import Image2 from "../Images/new 2.webp";
import Image3 from "../Images/new3.webp";
import Image4 from "../Images/image4.jpg";
import Image5 from "../Images/image5.webp";
import Image6 from "../Images/image6.jpg";
import Image7 from "../Images/home.webp";

const Imageslider = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const [image, setImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className=" lg:h-[300px] md:h-[400px] h-[300px] lg:w-[45%] relative p-[20px] "
      style={{
        backgroundImage: `url(${images[image]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <b>
        <p className="text-[#fff] relative float-right lg:mt-[240px] mt-[]">
          {image + 1}/{images.length}
        </p>
      </b>
    </div>
    /* <img
        className="w-[44%] h-[300px] rounded-[25px] "
        src={images[image]}
        alt={` Slide ${image + 1}`}
      /> */
  );
};

export default Imageslider;
