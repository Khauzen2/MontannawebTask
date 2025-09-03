import React from "react";
import Cardvideo from "../Images/cardvideo.mp4";
import Button from "./Button";
import Banner from "../Images/banner.webp";

const Body = () => {
  return (
    <>
      <div className="relative mt-[-10px] mb-[20px] w-full h-screen  ">
        <div className="block  bg-[linear-gradient(135deg,rgba(255,165,0,1)_0%,rgba(200,200,200,0.9)_50%,rgba(255,255,255,0.8)_100%)] lg:flex justify-between  mt-[15px] lg:pl-[40px] pl-[10px] lg:p-[0px] p-[20px]">
          <div className="w-[100%]  lg:w-[50%] items-center flex ">
            <div>
              <h1 className="lg:text-[45px] text-[27px] ">
                Effortlessly Growth Organize{" "}
                <span className="bg-[orange] lg:p-[5px] p-[5px] rounded-[15px]">
                  Product
                </span>{" "}
                Management
              </h1>
              <p className="lg:text-[23px] text-[20px] mt-[10px] ">
                When you join our journey, you are choosing a partner who
                believes in a healthier, more balanced you — and works
                tirelessly to help you get there.
              </p>
            </div>
          </div>

          <div className="w-[100%] lg:w-[50%] lg:mt-[0px] mt-[30px]">
            <img src={Banner} />
          </div>
        </div>

        {/* <video
        src={Cardvideo}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      /> */}

        <div className="bg-[rgb(10,20,40)]  ;">
          <div className="p-[20px] ">
            <h1 className="text-[white] font-['Playfair_Display'] lg:text-[30px] text-[22px] text-center">
              What our clients say about us..
            </h1>
            <h1 className="text-[white] font-['Playfair_Display']  lg:text-[30px] text-[22px] mt-[70px] text-center">
              Customer testimonials that speak for themselves.
            </h1>
            <div class="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 block lg:w-full md:w-full lg:p-[50px] p-[0px]">
              <div class="lg:bg-[transparent] cursor-pointer bg-[#292929] lg:h-[200px] md:h-[200px] lg:mt-0 md:mt-0 mt-[10px] lg:flex md:flex block gap-4 text-white p-[15px] items-center">
                <div class="w-12 h-12 p-[25px] lg:mt-[-50px] md:mt-[-50px] bg-orange-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-bullhorn text-white text-2xl"></i>
                </div>
                <div className=" p-[5px]">
                  <h1 class="font-semibold mb-[10px] mt-[10px] lg:mt-0 md:mt-0 text-[25px]">
                    Digital Marketing
                  </h1>
                  <p class="text-[18px]">
                    Its flexibility allows you to adapt it for any business need
                    from fintech and analytics tools to CRM platforms and admin.
                  </p>
                </div>
              </div>

              <div class="lg:bg-[transparent] cursor-pointer bg-[#292929] lg:h-[200px] md:h-[200px] lg:mt-0 md:mt-0 mt-[10px] lg:flex md:flex gap-4 text-white p-[15px] items-center">
                <div class="w-12 h-12 p-[25px] lg:mt-[-50px] md:mt-[-50px] bg-orange-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-lightbulb text-white text-2xl"></i>
                </div>
                <div className=" p-[5px]">
                  <h1 class="font-semibold mb-[10px] mt-[10px] lg:mt-0 md:mt-0 text-[25px]">
                    Marketing Strategy
                  </h1>
                  <p class="text-[18px]">
                    Its flexibility allows you to adapt it for any business need
                    from fintech and analytics tools to CRM platforms and admin.
                  </p>
                </div>
              </div>

              <div class="lg:bg-[transparent] cursor-pointer bg-[#292929] lg:h-[200px] md:h-[200px] lg:mt-0 md:mt-0 mt-[10px] lg:flex md:flex gap-4 text-white p-[15px] items-center">
                <div class="w-12 h-12 p-[25px] lg:mt-[-50px] md:mt-[-50px] bg-orange-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-code text-white text-2xl"></i>
                </div>
                <div className=" p-[5px] ">
                  <h1 class="font-semibold mb-[10px] mt-[10px] lg:mt-0 md:mt-0 text-[25px]">
                    Made for Developer
                  </h1>
                  <p class="text-[18px]">
                    Its flexibility allows you to adapt it for any business need
                    from fintech and analytics tools to CRM platforms and admin.
                  </p>
                </div>
              </div>

              <div class="lg:bg-[transparent] cursor-pointer bg-[#292929] lg:h-[200px] md:h-[200px] lg:mt-0 md:mt-0 mt-[10px] lg:flex md:flex gap-4 text-white p-[15px] items-center">
                <div class="w-12 h-12 p-[25px] lg:mt-[-50px] md:mt-[-50px] bg-orange-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-headset text-white text-2xl"></i>
                </div>
                <div className=" p-[5px]">
                  <h1 class="font-semibold mb-[10px] mt-[10px] lg:mt-0 md:mt-0 text-[23px]">
                    24x7 Customer Supports
                  </h1>
                  <p class="text-[18px]">
                    Its flexibility allows you to adapt it for any business need
                    from fintech and analytics tools to CRM platforms and admin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
