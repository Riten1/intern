import React, { useId } from "react";
import { useNavigate } from "react-router-dom";
import Vector from "../../images/Vector.png";
import logoInner from "../../images/logoInner.png";
import logoOuter from "../../images/logoOuter.png";

const Header = () => {
  let id = useId();

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Agency",
      path: "/agency",
    },
    {
      name: "Case study",
      path: "/case-study",
    },
    {
      name: "Resources",
      path: "/resources",
    },
  ];

  return (
    <div className="flex w-full h-28 pl-20 pr-20 pt-8 pb-8 justify-between">
      <div className="flex gap-2">
        <div className="mt-2">
          <img className="relative" src={logoOuter} alt="" />
          <img
            className="absolute top-[52px] left-[88px]"
            src={logoInner}
            alt=""
          />
        </div>

        <div className="mt-2 font-bold text-2xl" onClick={() => navigate("/")}>
          boostim
        </div>
      </div>

      <div className="flex gap-x-10">
        {navItems.map((eachItem) => (
          <ul>
            <div
              className="mt-2 cursor-pointer"
              key={id}
              onClick={() => navigate(eachItem.path)}
            >
              {eachItem.name}
              <select></select>
            </div>
          </ul>
        ))}
        <div
          className="mt-2 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contact
        </div>
      </div>
      <div className="flex gap-x-7">
        <div>
          <button className="w-40 h-12 rounded-3xl border-solid border-2 border-black hover:bg-black hover:text-white duration-300">
            Get Started
          </button>
        </div>
        <div className="rounded-full w-8 h-8 bg-black mt-2 cursor-pointer">
          <img className="ml-1.5 mt-1.5" src={Vector}></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
