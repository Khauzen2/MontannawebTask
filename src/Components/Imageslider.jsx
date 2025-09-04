import React, { useState, useEffect } from "react";
import Image1 from "../Images/image1.webp";
import Image2 from "../Images/new 2.webp";
import Image3 from "../Images/new3.webp";
import Image4 from "../Images/image4.jpg";
import Image5 from "../Images/image5.webp";
import Image6 from "../Images/image6.jpg";
import Image7 from "../Images/home.webp";
import Image8 from "../Images/01.jpg";
import Image9 from "../Images/02.jpg";
import Image10 from "../Images/03.jpg";
import Image11 from "../Images/04.jpg";

const Imageslider = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
  ];
  const [image, setImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className=" lg:h-[350px] w-full md:h-[400px]  rounded-[20px] h-[300px] relative p-[20px] "
      style={{
        backgroundImage: `url(${images[image]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between">
        <b>
          <p className="text-[black] text-[23px] md:mt-[320px] font-['Playfair_Display'] relative float-right lg:mt-[240px] mt-[210px]">
            Marketing Analytics
          </p>
        </b>
        <b>
          <p className="text-[#fff] relative md:mt-[320px] float-right lg:mt-[270px] mt-[230px]">
            {image + 1}/{images.length}
          </p>
        </b>
      </div>
    </div>
  );
};

export default Imageslider;
