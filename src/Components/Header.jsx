import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LOGO from "../Images/LOGO.png";
import Button from "./Button";

const Header = () => {
  const [scroll, setCroll] = useState(false);
  return (
    <section className="  lg:pb-[15px] p-0 ">
      <div className="bg-[hsla(0,0%,0%,1)] w-[100%] lg:w-[100%] p-[15px] flex justify-between items-center rounded-[0px] lg:rounded-[25px]">
        <div className="cursor-pointer  w-[20%] logoContainer">
          <img className="w-[64%] lg:w-[24%] ml-[20px] logo" src={LOGO} />
        </div>

        <div className="hidden lg:block  w-[70%] p-[10px] items-center justify-center ">
          <ul className="flex  text-[white] justify-center items-center">
            <li className="ml-[30px] cursor-pointer flex items-center">
              Home
              <i className="fa-solid text-[13px] fa-angle-down ml-[5px]"></i>
            </li>
            <li className="ml-[30px]  cursor-pointer flex items-center">
              Services
              <i className="fa-solid text-[13px] fa-angle-down ml-[5px]"></i>
            </li>
            <li className="ml-[30px] cursor-pointer flex items-center">
              About
              <i className="fa-solid text-[13px] fa-angle-down ml-[5px]"></i>
            </li>
            <li className="ml-[30px] cursor-pointer flex items-center">
              Contact Us
              <i className="fa-solid text-[13px] fa-angle-down ml-[5px]"></i>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block w-[16%] cursor-pointer  text-[white] ">
          <Button props=" Get in touch" />
        </div>
        <div className="lg:hidden block  ">
          <motion.i
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setCroll(true);
            }}
            className="fa-solid fa-bars cursor-pointer text-[white]"
          ></motion.i>
        </div>
      </div>
      <div className="bg-[blue] text-[white]">
        {scroll && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: open ? "0%" : "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0  h-full w-[100%] bg-[black] text-white p-[25px] shadow-lg z-[9999]"
          >
            <div className="flex justify-end z-[3000]">
              <i
                onClick={() => {
                  setCroll(false);
                }}
                className="fa-solid fa-xmark cursor-pointer"
              ></i>
            </div>
            <div className="w-[100%]  h-full">
              <ul className="h-full  p-[10px]">
                <li className="h-[80px] flex items-center p-[5px] text-[20px] hover hover:bg-[rgba(255,165,0,1)]">
                  Home
                </li>
                <li className="h-[80px] flex items-center p-[5px] text-[20px] hover hover:bg-[rgba(255,165,0,1)]">
                  Services
                </li>
                <li className="h-[80px] flex items-center p-[5px] text-[20px] hover hover:bg-[rgba(255,165,0,1)]">
                  About Us
                </li>
                <li className="h-[80px] flex items-center p-[5px] text-[20px] hover hover:bg-[rgba(255,165,0,1)]">
                  Contact Us
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Header;
