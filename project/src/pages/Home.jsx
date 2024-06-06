import React from "react";
import graph from "../images/graph.png";
import rounded from "../images/rounded.png";
import trending from "../images/trending-up.png";
import afterpay from "../images/afterpay.png";
import basecamp from "../images/basecamp.png";
import maze from "../images/maze.png";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.png";
import playDiv from "../images/playdiv.png";
import play from "../images/play.png";

const Home = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex pl-20 pr-20 pt-10 ">
        <div className="flex flex-col w-4/6 gap-8 pr-20">
          <div className="font-semibold text-7xl">
            Stay ahead of the curve with our forward-thinking
          </div>

          <div className="font-medium text-base text-gray-500 w-11/12">
            An award-winning SEO agency with disciplines in digital marketing,
            design, and website development. focused on understanding you.
          </div>

          <div className="flex gap-12">
            <button className="duration-300 w-60 h-14 bg-black rounded-3xl text-white text-base hover:bg-white border-black hover:text-black border-solid border-2">
              Schedule Call
            </button>
            <div className="underline text-base font-medium mt-3 cursor-pointer">
              View Case Study
            </div>
          </div>

          <div className="flex mt-16 gap-10">
            <p className="text-sm font-semibold">
              Trusted by the world's biggest brands
            </p>

            <img className="w-28 h-5 mt-3" src={afterpay} alt="" />

            <img className="w-28 h-5 mt-3" src={basecamp} alt="" />

            <img className="w-28 h-5 mt-3" src={maze} alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex gap-5">
            <div className="w-80 h-72 relative overflow-hidden">
              <div className="rounded-full w-28 h-28 absolute left-40 bg-black shadow-xl shadow-gray-500">
                <img className="pl-8 pt-8" src={trending} alt="" />
              </div>

              <img className="mt-10 " src={rounded} />
            </div>

            <div className="overflow-hidden w-80 h-72">
              <div className="flex flex-col mt-10 gap-7 w-80 h-72 bg-gray-200 rounded-xl p-8">
                <div className="text-7xl font-bold">230+</div>
                <div className="text-base font-medium">
                  some big companies that we work with, and trust us very much
                </div>

                <div className="h-2 bg-gray-300">
                  <div className="h-2 w-3/4 bg-black"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black h-56 rounded-3xl flex gap-7">
            <div className="w-2/4 p-10">
              <p className="text-white">Drive More Traffic and Sales</p>
              <p className=" text-white text-3xl font-semibold mt-8">
                Drive more traffic and product sales
              </p>
            </div>

            <img className="w-56 h-40 mt-16" src={graph}></img>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="flex flex-col pl-20 pr-20 pt-20 gap-14">
        <div className="flex">
          <p className="text-5xl font-semibold w-1/2">
            Provide the best service with out of the box ideas
          </p>
          <p className="pl-5 text-base font-medium w-1/2 leading-7 text-gray-500">
            we are a passionate team of digital marketing enthusiasts dedicated
            to helping businesses succeed in the digital world. With years of
            experience and a deep understanding of the ever-evolving online
            landscape, we stay at the forefront of industry trends and
            technologies.
          </p>
        </div>

        <div className="flex gap-5 relative">
          <div className="bg-black w-1/3 h-96 rounded-3xl p-8">
            <p className="text-7xl font-bold text-white">
              920<span className="text-green-300">+</span>
            </p>
            <p className="text-gray-500 mt-3 text-lg font-medium">
              Project finish with superbly
            </p>

            <div className="flex gap-1 mt-36">
              <div>
                <img
                  className="w-14 h-12 rounded-full mt-4"
                  src={project1}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-14 h-12 rounded-full mt-4"
                  src={project2}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-14 h-12 rounded-full mt-4"
                  src={project3}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-14 h-12 rounded-full mt-4"
                  src={project4}
                  alt=""
                />
              </div>
              <div className="text-7xl font-bold text-white">+</div>
            </div>
          </div>

          <div className="h-96 w-3/4 mr-5 rounded-3xl bg-gray-300 p-5">
            <p className="font-semibold text-5xl tracking-[10px] ml-[170px] mt-[140px] text-white">
              HOW WE WORK
            </p>

            <img
              className="absolute right-0 top-64 h-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              src={playDiv}
              alt=""
            />
            <img
              className="absolute right-12 top-[305px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              src={play}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
